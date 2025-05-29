import React, { createContext, ReactNode, useState } from "react";

// Define a type for the context value
export interface MainContextType {
  totalBudget: number;
  setTotalBudget: (value: string | number) => void; // Accepts both string and number
  currency: string;
  setCurrency: (value: string) => void;
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
  const [totalBudget, setTotalBudgetState] = useState<number>(0);
  const [currency, setCurrencyState] = useState<string>("USD");

  // Custom setter for totalBudget
  const setTotalBudget = (value: string | number) => {
    let numericValue = 0;

    if (typeof value === "string") {
      numericValue = parseFloat(value.replace(/[^0-9.]/g, "")) || 0;
    } else {
      numericValue = value;
    }

    setTotalBudgetState(numericValue);
  };

  // Custom setter for currency
  const setCurrency = (value: string) => {
    // Optional: validate currency code
    const validCurrencies = ["USD", "BDT", "EUR"];
    if (validCurrencies.includes(value)) {
      setCurrencyState(value);
    }
  };

  const value: MainContextType = {
    totalBudget,
    setTotalBudget,
    currency,
    setCurrency,
  };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};

export default MyProvider;
