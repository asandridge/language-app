import React from 'react';
import PropTypes from 'prop-types';

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

function LanguageSelection(props) {

    function handleClick(language) {
      props.onLanguageChanged(language);
    }

    const languageList = Object.keys(languages).map((language) => <button onClick={() => { handleClick(language); }} key={language}>{language.charAt(0).toUpperCase() + language.slice(1)}</button>);

    return (
      <div display="flex" flex-direction="column" justify-content="center">
        <div display="flex" justify-content="space-around">
          {languageList}
        </div>
      </div>
    );
};

LanguageSelection.propTypes = {
    onLanguageChanged: PropTypes.func.isRequired
};

LanguageSelection.defaultProps = {};

export default LanguageSelection;
