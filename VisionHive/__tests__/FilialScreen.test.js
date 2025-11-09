import React from 'react';
import { render } from '@testing-library/react-native';
import FilialScreen from '@screens/authorized/FilialScreen';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: jest.fn() }),
}));
jest.mock('@context/ThemeContext', () => ({
  useTheme: () => ({ colors: {} }),
}));
jest.mock('@context/FilialContext', () => ({
  useFilial: () => ({
    filiais: [],
    loading: false,
    error: null,
    listarFiliais: jest.fn(),
    adicionarFilial: jest.fn(),
    atualizarFilial: jest.fn(),
    removerFilial: jest.fn(),
  }),
}));

describe('Tela de Filial', () => {
  it('deve renderizar o título e o botão de adicionar', () => {
    const { getByText } = render(<FilialScreen />);
    expect(getByText('Gerenciar Filiais')).toBeTruthy();
    expect(getByText('+ Adicionar Nova Filial')).toBeTruthy();
  });
});