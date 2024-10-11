import axios from 'axios';

const API_KEY = 'TU_CLAVE_API_AQUI'; // Reemplaza esto con tu clave API de Alpha Vantage
const BASE_URL = 'https://www.alphavantage.co/query';

export async function getCurrentPrice(symbol: string): Promise<number> {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        function: 'GLOBAL_QUOTE',
        symbol: symbol,
        apikey: API_KEY
      }
    });

    const data = response.data['Global Quote'];
    if (data && data['05. price']) {
      return parseFloat(data['05. price']);
    } else {
      throw new Error('No se pudo obtener el precio actual');
    }
  } catch (error) {
    console.error('Error al obtener el precio de la acción:', error);
    throw error;
  }
}