import React, { createContext, ReactNode } from "react";

// Define a type for the context value
export interface MainContextType {
  // Add your shared state and functions here
  // Example:
  // user: string;
  // setUser: React.Dispatch<React.SetStateAction<string>>;
}

// Create the context with undefined as default
export const MainContext = createContext<MainContextType | undefined>(
  undefined
);

// Define the type for the children prop
interface MyProviderProps {
  children: ReactNode;
}

// Provider component
const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
  const value: MainContextType = {
    // Add values here later
  };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};

export default MyProvider;
