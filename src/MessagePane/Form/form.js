import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      message: ''
    };

    this.onSubmit=this.onSubmit.bind(this);
    this.updateName=this.updateName.bind(this);
    this.updateMessage=this.updateMessage.bind(this);
  }

  onSend () {

  }

  onSubmit () {
    const {name, message} = this.state;
    console.log(name, message);
    this.props.onSend(name, message);
    this.setState({name:'', message: ''});
  }

  updateName (event) {
    this.setState({name: event.target.value});
  }

  updateMessage(event) {
    this.setState({message: event.target.value});
  }

  render () {
    return (
      <div className="MessagePane-Form">
        <div className="MessagePane-Form-container">
          <p>
            <input
              ref={(node) => {this.name_input = node}}
              className="name"
              type='text'
              placeholder="Your Chat Name"
              onChange={this.updateName}
              value={this.state.name}
            />
          </p>
          <p>
            <textarea
              className="Message"
              placeholder="Your message goes here"
              onChange={this.updateMessage}
              value={this.state.message}
            />
          </p>
          <p>
            <button className="send" onClick={this.onSubmit}>Send</button>
          </p>
        </div>
      </div>
    )
  }
}

Form.defaultProps = {
  onSend: () => {}
}

Form.propTypes = {
  onSend: PropTypes.func.isRequired
}

export default Form;