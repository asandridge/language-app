import React from 'react';
import LanguageSelection from './components/LanguageSelection/LanguageSelection';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { language: 'spanish', showLanguageSelection: false }; // language should default to undefined and change based on local storage
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
    this.handleOpenLanguageMenu = this.handleOpenLanguageMenu.bind(this);
  }

  handleLanguageChange(state) {
    this.setState({ language: state });
    this.setState({ showLanguageSelection: false });
  }

  handleOpenLanguageMenu() {
    this.setState({ showLanguageSelection: true });
  }

  render() {
    if (this.state.showLanguageSelection) {
      return <LanguageSelection onLanguageChanged={this.handleLanguageChange} />;
    }
    return (
      <div onClick={this.handleOpenLanguageMenu}>{this.state.language}</div>
    );
  }
}

export default App;
