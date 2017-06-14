import React, { Component } from 'react';

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

const Message = ({author, text}) => (
  <div className="Message">
    <div className='Message-author'>{author}</div>
    <div className='Message-text'>{text}</div>
  </div>
);

const List = ({messages}) => {
  return (
  <div className="MessagePane-List">
    {messages.map(({author, text, id}) => <Message author={author} text={text} key={id} />)}
  </div>
)};

const MessagePane = () => {
  return (
    <List messages={messages} />
  )
}

export default MessagePane;