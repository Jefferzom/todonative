import React from 'react';

import { Switch } from 'react-native';

import Logo from '../../assets/todosvg.svg';
import { Head, Wrapper } from './styles';

interface ThemeProv {
  darkModeValue: boolean;
  onDarkModeChange: boolean;
}


const Header = ({ darkModeValue, onDarkModeChange }: ThemeProv) => {
  return (
    <Head>
      <Switch
        value={darkModeValue}
        onValueChange={onDarkModeChange}
        thumbColor={darkModeValue ? "#fff" : '#000'}
      />
      <Wrapper>
        <Logo width="140" height="140" />
      </Wrapper>
    </Head>
  )
}


export default Header;