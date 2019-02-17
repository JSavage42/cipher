import React, { Component } from 'react';
import vigenere from './cipher';
import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      key: '',
      decode: false,
      answer: 'Enter something to encrypt.',
    };
  }

  // *** On submit of form
  onSubmit = e => {
    // *** Prevent page refresh
    e.preventDefault();
    // *** Create variable answer using the vigenere function fron ./cipher.js
    const answer = vigenere(this.state.text, this.state.key, this.state.decode);
    // *** Set the state key answer to the varible answer
    this.setState({ answer });
  };

  // *** Generalized onChange function.
  // *** Takes the input's name as a variable key and sets the state to the target value.
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // *** Generalized onChecked function.
  // *** Gets the value from the radio buttons.
  // *** Checks value and using a ternary operator sets the state to the value to a truthy value.
  onChecked = e => {
    console.log(this.state);
    const decode = e.target.value === 'true' ? true : false;
    this.setState({ decode });
  };

  render() {
    // *** State deconstruction
    const { text, key, answer } = this.state;
    return (
      <main>
        <h1>Vigenère Cipher</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="text"
            onChange={this.onChange}
            value={text}
            placeholder="Text"
          />
          <input
            type="text"
            name="key"
            onChange={this.onChange}
            value={key}
            placeholder="Key"
          />
          <p className="radio-text">
            <input
              type="radio"
              name="decode"
              value={true}
              onChange={this.onChecked}
              defaultChecked
            />{' '}
            Encode
            <input
              type="radio"
              name="decode"
              value={false}
              onChange={this.onChecked}
            />{' '}
            Decode
          </p>
          <input type="submit" value="Run" className="btn" />
          <input type="reset" className="btn" />
        </form>
        {/* *** Show Answer *** */}
        <h2>Answer</h2>
        <span>{answer}</span>
      </main>
    );
  }
}

export default App;
