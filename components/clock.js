import React from 'react';
import '../styles/components/clock.scss';

class Clock extends React.Component {

  constructor(props) {
    super(props);

    this.setTime = this.setTime.bind(this);
  }

  // http://stackoverflow.com/questions/32880484/react-js-live-clock-update
  setTime(){
    const currentdate = new Date();
    let hours = currentdate.getUTCHours() - currentdate.getTimezoneOffset();

    // correct for number over 24, and negatives
    if( hours >= 24 ){ hours -= 24; }
    if( hours < 0   ){ hours += 12; }

    // add leading zero, first convert hours to string
    hours = hours + "";
    if( hours.length == 1 ){ hours = "0" + hours; }

    // minutes are the same on every time zone
    let minutes = currentdate.getUTCMinutes();

    // add leading zero, first convert hours to string
    minutes = minutes + "";
    if( minutes.length == 1 ){ minutes = "0" + minutes; }

    this.setState({
      hours: hours,
      minutes: minutes
    });
  }

  componentWillMount(){
    this.setTime();
  }

  componentDidMount(){
     window.setInterval(function () {
      this.setTime();
    }.bind(this), 10000);
  }

  render() {
    return (
      <div className='clock'>
        {this.state.hours}:{this.state.minutes}
      </div>
    );
  }
}

export default Clock;
