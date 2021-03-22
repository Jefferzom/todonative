import React from 'react';

import { Switch } from 'react-native';

import Logo from '../../assets/logo.svg';
import { Head, Wrapper } from './styles';


const Header = ({ darkModeValue, onDarkModeChange }) => {
  return (
    <Head>
      <Switch
        value={darkModeValue}
        onValueChange={onDarkModeChange}
        thumbColor={darkModeValue ? "#fff" : '#000'}
      />
      <Wrapper>
        <Logo width="120" height="120" />
      </Wrapper>
    </Head>
  )
}


export default Header;