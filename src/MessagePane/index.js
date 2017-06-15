import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form/form.js';

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

const MessagePane = ({messages, onSendMessage}) => {
  return (
    <div className="MessagePane">
      <List messages={messages} />
      <Form onSend={onSendMessage} />
    </div>
  )
}

MessagePane.defaultProps = {
  messages: []
}

MessagePane.propTypes = {
  messages: PropTypes.array.isRequired
}

export default MessagePane;