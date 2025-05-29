import React, { useContext } from "react";
import { MainContext, MainContextType, Founder } from "../context/MainContext";

/**
 * Custom hook to use the main app context.
 * Ensures that the context is only used within a valid provider.
 *
 * @returns {MainContextType} The context value
 */
export const useMainContext = (): MainContextType => {
  const context = useContext(MainContext);

  if (!context) {
    throw new Error("useMainContext must be used within a MyProvider");
  }

  return context;
};

// Re-export types you want to share
export type { Founder };
