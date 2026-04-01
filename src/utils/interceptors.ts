import {
  type AxiosError,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios';

export interface ConsoleError {
  status: number;
  data: unknown;
}

export const requestInterceptor = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const token = process.env.NEXT_PUBLIC_API_TOKEN || '';
  if (token) {
    config.headers.set('Authorization', `Bearer ${token.replace(/^"|"$/g, '')}`);
  }
  return config;
};

export const successInterceptor = (response: AxiosResponse): AxiosResponse => {
  return response;
};

export const errorInterceptor = async (error: AxiosError): Promise<void> => {
  if (error.response?.status === 401) {
    await Promise.reject(error.response.data);
  } else {
    if (error.response) {
      const errorMessage: ConsoleError = {
        status: error.response.status,
        data: error.response.data,
      };
      console.error('error response', errorMessage);
      await Promise.reject(errorMessage);

    } else if (error.request) {
      console.error('error request', error.request);
    } else {
      console.error('final error', error.message);
    }
    await Promise.reject(error);
  }
};
