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

const channels = [
    {id:1, name: 'General Room'},
    {id:2, name: 'Birthday celebration'},
    {id:3, name: 'Phayul'}
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages,
      channels,
      selectedChannelId: channels[0].id
    };

    this.onSendMessage = this.onSendMessage.bind(this);
    this.onChannelSelect = this.onChannelSelect.bind(this);
    this.filteredMessage = this.filteredMessage.bind(this);
  }

  onSendMessage (author, text) {
    const newMessage = {
      id: this.state.messages[this.state.messages.length - 1].id + 1,
      author,
      text,
      channel_id: this.state.selectedChannelId
    };

    const messages = [...this.state.messages, newMessage];
    this.setState({messages});
  }

  onChannelSelect (id) {
    this.setState({selectedChannelId:id});
  }

  filteredMessage () {
    return this.state.messages.filter(({channel_id}) => channel_id === this.state.selectedChannelId);
  };

  render() {
    return (
      <div className="App">
        <ChannelList
          channels={this.state.channels}
          selectedChannelId={this.state.selectedChannelId}
          onSelect={this.onChannelSelect}
        />
        <MessagePane messages={this.filteredMessage()} onSendMessage={this.onSendMessage} />
      </div>
    );
  }
}

export default App;
