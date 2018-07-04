import React, { Component } from "react";
import moment from "moment";
import "moment/locale/ko";
moment.locale("ko");

const TIME_FORMAT = "A hh:mm";

class Timer extends Component {
  constructor(props) {
    super(props); //항상 super를 사용한 뒤에만 this를 사용할 수 있다.

    this.state = {
      date: moment()
    };

    this.nTimer = setInterval(() => {
      this.setState({
        date: moment()
      });
    }, 1000);

    this.TIME_FORMAT = "A ss";
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.state.date.format(TIME_FORMAT) !== nextState.date.format(TIME_FORMAT)
    )
      return false;
    else return true;
  }

  handleTick = () => {
    //console.log(1);
    this.forceUpdate(); //강제업데이트
  };

  render() {
    console.log("render...");
    const { expireDate } = this.props;
    const { date } = this.state;

    if (moment(expireDate) < date) {
      return <div>종료되었습니다.</div>;
    }

    return (
      <div>
        <div> 현지시간은 오후 {date.format(TIME_FORMAT)} </div>
        <div>{moment(expireDate).fromNow()}에 강의 종료합니다. </div>
      </div>
    );
  }
}

export default Timer;
