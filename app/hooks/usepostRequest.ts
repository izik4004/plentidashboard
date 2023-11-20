// usePostRequest.ts
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const usePostRequest = () => {
  return (url: string, onSuccess: (data: any) => void, onError: (error: any) => void) => {
    return useMutation({
      mutationFn: async (data: any) => await axios.post(url, data),
      onSuccess,
      onError,
    });
  };
};

export default usePostRequest;
