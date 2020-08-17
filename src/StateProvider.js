import React from "react";
import { createContext } from "react";
import { useContext } from "react";
import { useReducer } from "react";

// Data Layer
export const StateContext = createContext();

// Provider - To give access to Data Layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
