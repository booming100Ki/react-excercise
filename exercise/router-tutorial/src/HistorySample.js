import React, { Component, component } from 'react'

class HistorySample extends Component {
  handleGoBack = () => {
    this.props.history.goBack();
  };
  
  handleGoHome = () => {
    this.props.history.push('/');
  };
  
  componentDidMount() {
    this.unblock = this.props.history.block('정말 떠나실건가요?');
  }

  render() {
    return (
      <div>
        <button onClick={this.handleGoBack}>뒤로</button>
        <button onClick={this.handleGoHome}>홈으로</button>
      </div>
    );
  }
}

export default HistorySample;