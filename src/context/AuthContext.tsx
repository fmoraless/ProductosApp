import {LoginData, LoginResponse, User} from '@src/interfaces/appInterfaces';
import React, {createContext, useReducer} from 'react';
import {AuthState, authReducer} from './authReducer';
import ProdApi from '@src/api/ProdApi';

type AuthContextProps = {
  errorMessage: string;
  token: string | null;
  user: User | null;
  status: 'checking' | 'authenticated' | 'not-authenticated';
  signIn: (loginData: LoginData) => void;
  signUp: () => void;
  logOut: () => void;
  removeError: () => void;
};

const authInitialState: AuthState = {
  status: 'checking',
  token: null,
  user: null,
  errorMessage: '',
};
export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = async ({email, password}: LoginData) => {
    try {
      const {data} = await ProdApi.post<LoginResponse>('/auth/login', {
        email,
        password,
      });
      dispatch({
        type: 'signUp',
        payload: {
          token: data.authToken,
          user: data.user,
        },
      });
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const signUp = () => {};
  const logOut = () => {};
  const removeError = () => {};

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signUp,
        signIn,
        logOut,
        removeError,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
