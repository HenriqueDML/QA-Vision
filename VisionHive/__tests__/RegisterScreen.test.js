import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import RegisterScreen from '../screens/RegisterScreen';

jest.mock('@react-navigation/native', () => ({ useNavigation: () => ({ navigate: jest.fn() }) }));
jest.mock('../../hooks/auth', () => ({ useAuth: () => ({ register: jest.fn() }) }));

describe('Tela de Cadastro', () => {
  it('deve mostrar erro se a senha tiver menos de 6 caracteres', async () => {
    const { getByPlaceholderText, findByText } = render(<RegisterScreen />);
    const passwordInput = getByPlaceholderText('Crie uma senha');
    fireEvent.changeText(passwordInput, '123');

    const passwordError = await findByText('A senha deve ter no mínimo 6 caracteres');

    expect(passwordError).toBeTruthy();
  });
});