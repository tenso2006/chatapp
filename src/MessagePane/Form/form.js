import React, {Component} from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      message: ''
    };

    this.send=this.send.bind(this);
    this.updateName=this.updateName.bind(this);
  }

  send () {
    console.log("this.name_input.value");
  }

  updateName (event) {
    this.setState({name: event.target.value});
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
            />
          </p>
          <p>
            <button className="send" onClick={this.send}>Send</button>
          </p>
        </div>
      </div>
    )
  }
}
export default Form;