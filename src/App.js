import React, { Component } from 'react';
import './App.css';
import MessagePane from './MessagePane/index.js';
import ChannelList from './ChannelList/ChannelList.js';

const messages = [
  {
    id: 1,
    text: 'hi',
    author: 'Ben',
    channel_id: 1
  },
  {
    id: 2,
    text: 'hi to you too',
    author: 'Jen',
    channel_id: 1
  },
  {
    id: 3,
    text: 'hi from another channel',
    author: 'Meg',
    channel_id: 2
  },
  {
    id: 4,
    text: 'hi to you too from another channel',
    author: 'Jeff',
    channel_id: 2
  }
];


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages
    };

    this.onSendMessage = this.onSendMessage.bind(this);
  }

  onSendMessage (author, text) {
    const newMessage = {
      id: this.state.messages[this.state.messages.length - 1].id + 1,
      author,
      text,
      channel_id: 1
    };

    const messages = [...this.state.messages, newMessage];
    this.setState({messages});
  }


  render() {
    return (
      <div className="App">
        <ChannelList />
        <MessagePane messages={this.state.messages} onSendMessage={this.onSendMessage} />
      </div>
    );
  }
}

export default App;
