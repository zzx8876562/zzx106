import React, { Component } from 'react';
import './DialogView.css';

export default class DialogView extends Component {
  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  handleClose = () => {
    this.props.onCloseClick(false);
  }

  render() {
    console.log('component render');
    const { isActive } = this.props;

    if (!isActive) {
      return null;
    }
    return (
      <div className="mask-ctn">
        <div className="close-btn" onClick={this.handleClose}>close</div>
        <div className="dialog-ctn">
        <div className="dialog-content">
        <div className="content-01">
        <span>标题 </span>
        <input type="text" className="dialog-input"></input>
            <br></br>
        </div>
        <div className="content-01">
        <span>描述</span>
        <input type="text" className="dialog-input"></input>
            <br></br>
        </div>
        <div className="content-01">
        <span>时间 </span>
        <input type="text" className="dialog-input"></input>
            <br></br>
        </div>
        <div className="content-btn"onClick={this.handleConfirm}>确认</div>
</div>
        

_

        </div>
      </div>
    );
  }
}

