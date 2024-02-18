import {LoginData, LoginResponse, User} from '@src/interfaces/appInterfaces';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useEffect, useReducer} from 'react';
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

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    const token = await AsyncStorage.getItem('token');
    const user = await AsyncStorage.getItem('user');
    console.log('LS_token', token);
    console.log('LS_user', user);

    if (!token) return dispatch({type: 'notAuthenticated'});

    if (!user) return dispatch({type: 'notAuthenticated'});

    dispatch({
      type: 'signUp',
      payload: {
        token: token,
        user: JSON.parse(user),
      },
    });
  };

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
      await AsyncStorage.setItem('token', data.authToken);
      await AsyncStorage.setItem('user', JSON.stringify(data.user));
    } catch (error) {
      console.log(error.response.data.message);
      dispatch({
        type: 'addError',
        payload: error.response.data.message || 'Información incorrecta.',
      });
    }
  };

  const signUp = () => {};
  const logOut = () => {};

  const removeError = () => {
    dispatch({
      type: 'removeError',
    });
  };

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
