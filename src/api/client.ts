import axios from 'axios';
import { io, Socket } from 'socket.io-client';

// The Base API Client for David's Express API
export const apiClient = axios.create({
  baseURL: 'https://api.placeholder.com', // To be updated when backend is live
  timeout: 10000,
});

// The WebSocket connection for the 24-Hour Chat Crucible
let chatSocket: Socket | null = null;

export const connectChatSocket = (token: string) => {
  chatSocket = io('https://api.placeholder.com', {
    auth: { token },
  });
  return chatSocket;
};
