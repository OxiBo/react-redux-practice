import React, { Component } from "react";
import InputTime from "./timerComponents/InputTime";
import DisplayTimer from "./timerComponents/DisplayTimer";
import IntervalDisplay from "./timerComponents/IntervalDisplay";


export default class Timer extends Component {
  state = {
    interval: "5",
    timer: { minutes: 5, seconds: 0 },
    seconds: 300,
    timerOn: false 
    // minutes: 5
  };

  componentWillUnmount() {
    clearInterval(this.intervalID)
  }

  onFormSubmit = async e => {
    e.preventDefault();
    await this.setState({ seconds: +this.state.interval * 60 });
    await this.setState({ timer: this.secondsToMinutes(this.state.seconds) });
    this.tic();
    
  };

  onInputChange = inputValue => {
    this.setState({ interval: inputValue });
  };

  secondsToMinutes = timerTime => {
    console.log(timerTime)
    const minutes = Math.floor(timerTime / 60);
    const seconds = Math.ceil(timerTime % 60);
    // const seconds = timerTime - minutes * 60;
    // console.log(minutes)
    // console.log(seconds)
    return { minutes, seconds };
  };

  tic() {
    this.setState({timerOn: true})
    this.intervalID = setInterval(async () => {
      // await console.log(this.state.timer);
      await this.setState({ timer: this.secondsToMinutes(this.state.seconds) });
      if (this.state.seconds > 0) {
        await this.setState(prevState => ({ seconds: prevState.seconds - 1 }));
      } else {
        this.setState({timerOn: false})
        clearInterval(this.intervalID)
      }
      // this.setState({ timer: this.secondsToMinutes(this.state.seconds) });
      // console.log(this.state.timer);
      
    }, 1000);
    
  }


  // if (this.state.seconds === 0) clearInterval(this.intervalID);

  // console.log(this.state.minutes);
  // this.setState(prevState => ({ minutes: prevState.minutes-- }));
  // this.setState(() => ({ seconds: 60 }));
  // }
  // }

  onStopClick = () => {
    clearInterval(this.intervalID)
  }


  render() {
    return (
      <div className="ui container content">
        <IntervalDisplay interval={this.state.interval} />
        <InputTime
          onFormSubmit={this.onFormSubmit}
          onInputChange={this.onInputChange}
          interval={this.state.interval}
          onStopClick={this.onStopClick}
        />
        <DisplayTimer timer={this.state.timer} />
        
      </div>
    );
  }
}
