import React, {useState} from 'react';
import LanguageSelection from './components/LanguageSelection/LanguageSelection';

function App() {
    const [language, setLanguage] = useState('spanish');
    const [showLanguageSelection, setShowLanguageSelection] = useState(false);

    function handleLanguageChange(state) {
      setLanguage(state)
      setShowLanguageSelection(false)
    }

    function handleOpenLanguageMenu() {
      setShowLanguageSelection(true)
    }

    if (showLanguageSelection) {
      return <LanguageSelection onLanguageChanged={handleLanguageChange} />;
    }
    return (
      <div onClick={handleOpenLanguageMenu}>{language}</div>
    );
}

export default App;
