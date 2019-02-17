import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      plain: '',
      key: '',
    };
  }

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.plain + (this.state.key % 26));
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { plain, key } = this.state;
    return (
      <div className="App">
        <h1>Vigenère Cipher</h1>

        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="plain"
            onChange={this.onChange}
            value={plain}
            placeholder="Plain"
          />
          <input
            type="text"
            name="key"
            onChange={this.onChange}
            value={key}
            placeholder="Key"
          />
          <select name="" onChange={this.onChange}>
            <option value="encode">Encode</option>
            <option value="decode">Decode</option>
          </select>
          <input type="submit" value="Run" />
          <input type="reset" />
        </form>
      </div>
    );
  }
}

export default App;
