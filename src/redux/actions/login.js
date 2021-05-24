import { LOGIN, LOGOUT } from '../types/login';

export const login = (payload) => ({type: LOGIN, payload});
export const logout = () => ({type: LOGOUT});