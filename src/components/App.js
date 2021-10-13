import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = { fromChild: '' };

  handleCallBack = (nameFromChild) =>{
    this.setState({fromChild: nameFromChild})
  }

  render() {
    return (
      <div>
        <SearchBar parentCallBackFunction={this.handleCallBack}/>
      </div>
    );
  }
}

export default App;
