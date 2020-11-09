import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    message: ''
  }

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleChange = this.handleClick.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value
    });
  }

  handleClick = (e) => {
    this.setState({
      message: ''
    });
  }

  render() {
    return (
      <>
        <h1>이벤트 연습</h1>
        <h2>깃 머지 연습</h2>
        <input 
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
          />
          <button onClick={this.handleClick}>확인</button>
      </>
    );
  }
}

export default EventPractice;