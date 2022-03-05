import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Keyboard, TextInputProps } from 'react-native';

import { Container, TextInput } from './styles';

interface IInputProps extends TextInputProps {
  placeholder?: string;
  icon: React.ComponentProps<typeof MaterialIcons>['name'];
}

export function Input({ placeholder, icon, ...rest }: IInputProps) {
  return (
    <Container>
      <TextInput
        keyboardType="web-search"
        placeholder={placeholder}
        {...rest}
      />
      <MaterialIcons name={icon} size={24} color="#212529" />
    </Container>
  );
}
