import React, { useContext, useReducer } from 'react';
import { createContext } from 'react';

const UserDataContext = createContext();

const initialState = {
  Authenticated: false,
  UserData: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'UserLoggedIn':
      return { Authenticated: true, UserData: action.payload };
    default:
      return state;
  }
}

export function UserDataProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserDataContext.Provider value={{ state, dispatch }}>
      {children}
    </UserDataContext.Provider>
  );
}

export function useUserData() {
  const context = useContext(UserDataContext);
  if (context === undefined) throw new Error('State used outside context');
  return context;
}
