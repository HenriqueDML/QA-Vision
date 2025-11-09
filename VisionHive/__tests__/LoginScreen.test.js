import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import LoginScreen from '../VisionHive/screens/unauthorized/LoginScreen';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: jest.fn(), replace: jest.fn() }),
}));
jest.mock('@context/ThemeContext', () => ({
  useTheme: () => ({ colors: {} }),
}));
jest.mock('@hooks/auth', () => ({
  useAuth: () => ({ login: jest.fn() }),
}));

describe('Tela de Login', () => {
  it('deve mostrar mensagens de erro ao tentar logar com campos vazios', async () => {
    const { getByText, findByText } = render(<LoginScreen />);
    const loginButton = getByText('Entrar');
    fireEvent.press(loginButton);
    const emailError = await findByText('Por favor, insira seu e-mail');
    const passwordError = await findByText('Por favor, insira sua senha');
    expect(emailError).toBeTruthy();
    expect(passwordError).toBeTruthy();
  });
});