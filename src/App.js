import React from 'react';
import MessageItemView from './components/MessageItem.js';
import DialogView from './components/DialogView.js';
import DialogView1 from './components/DialogView1.js';
import './App.css';

// const icon = require('./resource/icon_Good_B-2.png');

import icon from './resource/icon_Good_B-2.png';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      messages: [
        {
          icon: icon,
          title: '小年糕',
          descript: 'hello 小年糕',
          time: '7-18 11:14'
        },
        {
          icon: icon,
          title: '小板凳',
          descript: 'hello 小板凳',
          time: '7-18 11:15',
        },
        {
          icon: icon,
          title: '小豆包',
          descript: 'hi 小豆包',
          time: '7-17 10:00',
        }
      ],
      isDialogActive: false,
      isDialogActive1: false,
    }
  }

  onItemClick = (message) => {
    console.log(message);
  }

  handleAddItem = () => {
    const newMessages = this.state.messages.slice();
    newMessages.unshift({
      icon: icon,
      title: 'zhanglinxue',
      descript: '哎呦不错',
      time: '20180719'
    });
    this.setState({
      messages: newMessages
    });
  }

  handleShowDialog = isActive => {
    this.setState({ isDialogActive: isActive });
  }
  
  handleShowDialog = isActive => {
    this.setState({ isDialogActive1: isActive });
  }
 
  renderMessageList = () => {
    const messageViews = this.state.messages.map((item,i) => {
      return <MessageItemView key={i} item={item} onClick={this.onItemClick}/>
    });
    return messageViews;
  }

  render() {
    return (
      <div>

         <div className = "header">
       
       <span className="left_span">微信</span>
       <span className="right_span" onClick={this.handleShowDialog.bind(this, true)}  >+</span>
       
               </div>
        { this.renderMessageList() }

       

        <nav className="chat-nav">
          <div className="chat-nav__item" onClick={this.handleAddItem}>
            <img className="chat-nav__item__icon" src={icon} alt="" />
            <div className="chat-nav__item__name">微信</div>
          </div>
          <div className="chat-nav__item">
            <img className="chat-nav__item__icon" src={icon} alt="" />
            <div className="chat-nav__item__name">通讯录</div>
          </div>
          <div className="chat-nav__item">
            <img className="chat-nav__item__icon" src={icon} alt="" />
            <div className="chat-nav__item__name">发现</div>
          </div>
          <div className="chat-nav__item" onClick={this.handleShowDialog.bind(this, true)}>
            <img className="chat-nav__item__icon" src={icon} alt="" />
            <div className="chat-nav__item__name">我</div>
          </div>

        
        </nav>
        
        <DialogView isActive={this.state.isDialogActive} onCloseClick={this.handleShowDialog} />
        <DialogView1 isActive={this.state.isDialogActive1} onCloseClick={this.handleShowDialog} />
      </div>
    );
  }
}

export default App;
