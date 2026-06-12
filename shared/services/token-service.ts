import { STORAGE_KEYS } from '../constants';
import { StorageService } from './storage-service';

export const TokenService = {
  getAccessToken: () => {
    return StorageService.get(STORAGE_KEYS.ACCESS_TOKEN);
  },

  getRefreshToken: () => {
    return StorageService.get(STORAGE_KEYS.REFRESH_TOKEN);
  },

  setTokens: (accessToken: string, refreshToken: string) => {
    StorageService.set(STORAGE_KEYS.ACCESS_TOKEN, accessToken);
    StorageService.set(STORAGE_KEYS.REFRESH_TOKEN, refreshToken);
  },

  clearTokens: () => {
    StorageService.remove(STORAGE_KEYS.ACCESS_TOKEN);
    StorageService.remove(STORAGE_KEYS.REFRESH_TOKEN);
  },
};
