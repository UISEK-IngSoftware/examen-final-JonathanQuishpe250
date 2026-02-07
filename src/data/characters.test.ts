import { describe, it, expect, vi } from 'vitest';
import axios from 'axios';
import { getCharacters } from './characters';

vi.mock('axios');
const mockedAxios = vi.mocked(axios);

describe('Characters API', () => {
  it('calls API with correct parameters', async () => {
    vi.mocked(mockedAxios.get).mockResolvedValue({ data: { items: [] } });

    await getCharacters();

    expect(mockedAxios.get).toHaveBeenCalledWith(
      'https://futuramaapi.com/api/characters',
      { params: { orderBy: 'id', orderByDirection: 'asc', page: 1, size: 50 } }
    );
  });
});

