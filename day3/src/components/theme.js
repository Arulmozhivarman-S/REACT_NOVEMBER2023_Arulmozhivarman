import React, { useState, useEffect } from 'react';
function Theme() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={`App ${theme}`}>
      <h1>Change Theme</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
export default Theme;