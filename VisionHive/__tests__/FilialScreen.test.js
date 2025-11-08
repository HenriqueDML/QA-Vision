import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import FilialScreen from '../screens/FilialScreen';

jest.mock('../../context/ThemeContext', () => ({ useTheme: () => ({ colors: {} }) }));
jest.mock('../../context/FilialContext', () => ({
  useFilial: () => ({
    filiais: [],
    loading: false,
    error: null,
    listarFiliais: jest.fn(),
  }),
}));
jest.mock('../../components/ScreenLayout', () => ({ children }) => <>{children}</>);

describe('Tela de Gerenciar Filiais', () => {
  it('deve abrir o modal para adicionar nova filial ao clicar no botão', async () => {
    const { getByText, findByText } = render(<FilialScreen />);
    const addButton = getByText('+ Adicionar Nova Filial');
    fireEvent.press(addButton);

    const modalTitle = await findByText('Nova Filial');

    expect(modalTitle).toBeTruthy();
  });
});