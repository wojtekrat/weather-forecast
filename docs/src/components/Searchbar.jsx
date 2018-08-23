import React, {Component} from 'react';

class Searchbar extends Component {
  state = {
    input: '',
  };

  updateText = (e) => {
    this.setState({input: e.target.value});
  };

  checkIfSend = (e) => {
    if (e.key === 'Enter') {
      if (this.state.input.length < 2) {
        return;
      }
      this.props.getCities(this.state.input);
    }
  };

  render() {
    return (
      <input
        type="text"
        placeholder="Enter city"
        value={this.state.input}
        onChange={this.updateText}
        onKeyPress={this.checkIfSend}
      />
    );
  }
}

export default Searchbar;
