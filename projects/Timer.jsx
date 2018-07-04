import React, { Component } from "react";
import moment from "moment";
import "moment/locale/ko";
moment.locale();

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment()
    };
    this.nTimer = setInterval(this.handleTick(), 1000);
  }

  handleTick = () => {
    //console.log(1);
    this.forceUpdate();
  };

  render() {
    //console.log("render....");
    return (
      <div>
        <div> 현지시간은 오후 {this.state.date.format("hh:mm")} </div>
        <div>{moment(this.props.expireDate).fromNow()} 강의 종료합니다. </div>
      </div>
    );
  }
}

export default Timer;
