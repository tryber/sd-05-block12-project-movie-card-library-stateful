import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Header from './components/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      texto: '',
    };
  }
  onSearchTextChange() {
    return 'teste';
  }
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar searchText="Digite aqui" func={this.onSearchTextChange} />
      </div>
    );
  }
}
export default App;
