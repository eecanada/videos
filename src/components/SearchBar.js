import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
    console.log(this.state.term);
  };

  render() {
    return (
      <div className="ui form container">
        <div className="field">
          <label>Video label</label>
          <input
            type="text"
            value={this.state.term}
            onChange={this.onInputChange}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
