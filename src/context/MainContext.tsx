import React, { createContext, ReactNode, useEffect, useState } from "react";

// Import founders JSON
import foundersData from "../../assets/data/founders.json";

// Founder type
export type Founder = {
  name: string;
  amount: number;
  color: string;
};

// Updated context interface
export interface MainContextType {
  totalBudget: number;
  setTotalBudget: (value: string | number) => void;
  currency: string;
  setCurrency: (value: string) => void;
  founders: Founder[];
  setFounders: React.Dispatch<React.SetStateAction<Founder[]>>;
  projectName: string;
  setProjectName: (value: string) => void;
}

// Create the context
export const MainContext = createContext<MainContextType | undefined>(
  undefined
);

interface MyProviderProps {
  children: ReactNode;
}

// Provider component
const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
  const [totalBudget, setTotalBudgetState] = useState<number>(0);
  const [currency, setCurrencyState] = useState<string>("USD");
  const [founders, setFounders] = useState<Founder[]>(foundersData);
  const [projectName, setProjectNameState] = useState<string>("");
  useEffect(() => {
    if (!foundersData || !Array.isArray(foundersData)) {
      console.error("Failed to load founders data");
      setFounders([]);
    }
  }, []);
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
    const validCurrencies = ["USD", "BDT", "EUR"];
    if (validCurrencies.includes(value)) {
      setCurrencyState(value);
    }
  };

  // Custom setter for projectName
  const setProjectName = (value: string) => {
    if (value.trim() === "") {
      return; // Ignore empty strings
    }

    setProjectNameState(value);
  };

  const value: MainContextType = {
    totalBudget,
    setTotalBudget,
    currency,
    setCurrency,
    founders,
    setFounders,
    projectName,
    setProjectName,
  };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};

export default MyProvider;
