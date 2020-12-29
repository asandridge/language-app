import React from 'react';

const languages = {
  spanish: 'flag',
  french: 'flag',
  german: 'flag',
  latin: 'flag',
  greek: 'flag',
  chinese: 'flag',
  korean: 'flag',
  japanese: 'flag',
  hindi: 'flag',
  arabic: 'flag',
};

class LanguageSelection extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(language) {
    this.props.onLanguageChanged(language);
  }

  render() {
    const languageList = Object.keys(languages).map((language) => <button onClick={() => { this.handleClick(language); }} key={language}>{language.charAt(0).toUpperCase() + language.slice(1)}</button>);
    return (
      <div display="flex" flex-direction="column" justify-content="center">
        <div display="flex" justify-content="space-around">
          {languageList}
        </div>
      </div>
    );
  }
}
export default LanguageSelection;
