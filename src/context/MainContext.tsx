import React, { createContext, ReactNode, useEffect, useState } from "react";
import foundersData from "../../assets/data/founders.json";
import teamsData from "../../assets/data/teams.json";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Founder, Team } from "../types/types";

export interface MainContextType {
  totalBudget: number;
  setTotalBudget: (value: string | number) => void;
  currency: string;
  setCurrency: (value: string) => void;
  founders: Founder[];
  setFounders: React.Dispatch<React.SetStateAction<Founder[]>>;
  projectName: string;
  setProjectName: (value: string) => void;
  teams: Team[];
  setTeams: React.Dispatch<React.SetStateAction<Team[]>>;
}

// Create the context
export const MainContext = createContext<MainContextType | undefined>(
  undefined
);

interface MyProviderProps {
  children: ReactNode;
}

// Keys for AsyncStorage
const STORAGE_KEYS = {
  TEAMS: "app_teams",
  FOUNDERS: "app_founders",
  TOTAL_BUDGET: "app_total_budget",
  PROJECT_NAME: "app_project_name",
  CURRENCY: "app_currency",
};

// Provider component
const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
  const [totalBudget, setTotalBudgetState] = useState<number>(0);
  const [currency, setCurrencyState] = useState<string>("USD");
  const [founders, setFounders] = useState<Founder[]>(
    Array.isArray(foundersData) ? foundersData : []
  );
  const [projectName, setProjectNameState] = useState<string>("");
  const [teams, setTeams] = useState<Team[]>(
    Array.isArray(teamsData) ? teamsData : []
  );

  // Load persisted data on mount
  useEffect(() => {
    const loadPersistedData = async () => {
      try {
        const [
          storedTeams,
          storedFounders,
          storedBudget,
          storedProjectName,
          storedCurrency,
        ] = await Promise.all([
          AsyncStorage.getItem(STORAGE_KEYS.TEAMS),
          AsyncStorage.getItem(STORAGE_KEYS.FOUNDERS),
          AsyncStorage.getItem(STORAGE_KEYS.TOTAL_BUDGET),
          AsyncStorage.getItem(STORAGE_KEYS.PROJECT_NAME),
          AsyncStorage.getItem(STORAGE_KEYS.CURRENCY),
        ]);

        if (storedTeams) setTeams(JSON.parse(storedTeams));
        if (storedFounders) setFounders(JSON.parse(storedFounders));
        if (storedBudget) setTotalBudgetState(parseFloat(storedBudget));
        if (storedProjectName) setProjectNameState(storedProjectName);
        if (storedCurrency) setCurrencyState(storedCurrency);
      } catch (error) {
        console.error("Failed to load persisted data", error);
      }
    };

    loadPersistedData();
  }, []);

  // Save data whenever it changes
  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEYS.TEAMS, JSON.stringify(teams));
  }, [teams]);

  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEYS.FOUNDERS, JSON.stringify(founders));
  }, [founders]);

  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEYS.TOTAL_BUDGET, totalBudget.toString());
  }, [totalBudget]);

  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEYS.PROJECT_NAME, projectName);
  }, [projectName]);

  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEYS.CURRENCY, currency);
  }, [currency]);

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
    teams,
    setTeams,
  };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};

export default MyProvider;
