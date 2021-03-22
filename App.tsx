import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import Header from './src/components/Header/Header';
import TaskList from './src/components/TaskList/TaskList';

import { ThemeProvider } from 'styled-components';


import darkTheme from './src/theme/dark';

import blueTheme from './src/theme/blue';


const App = () => {

  const [dark, setDark] = useState(false);
  return (
    <ThemeProvider theme={dark ? darkTheme : blueTheme}>
      <StatusBar barStyle={"light-content"} />
      <Header
        onDarkModeChange={() => setDark(!dark)}
        darkModeValue={dark}
      />
      <TaskList />
    </ThemeProvider>
  )
};

export default App;