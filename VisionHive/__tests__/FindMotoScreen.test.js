import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import FindMotoScreen from '../screens/FindMotoScreen';

jest.mock('@react-navigation/native', () => ({ useNavigation: () => ({ navigate: jest.fn() }) }));
jest.mock('../../context/ThemeContext', () => ({ useTheme: () => ({ colors: {} }) }));
jest.mock('../../components/Header', () => 'Header');
jest.mock('../../components/Footer', () => 'Footer');

describe('Tela de Encontrar Moto', () => {
  it('deve exibir o alerta de IoT ao buscar por uma placa válida', async () => {
    const { getByText, getByPlaceholderText, findByText } = render(<FindMotoScreen />);
    const input = getByPlaceholderText('Digite o(a) placa da moto');
    fireEvent.changeText(input, 'XYZ-5678');
    
    const searchButton = getByText('BUSCAR');
    fireEvent.press(searchButton);

    const alertTitle = await findByText('IoT Ativado!');

    expect(alertTitle).toBeTruthy();
  });
});