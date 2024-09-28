import { createContext, useState } from "react";

// Create the trees context
export const TreesContext = createContext();

// Create the trees provider component
export const TreesProvider = ({ children }) => {
  const [numberOfTrees, setNumberOfTrees] = useState(0); // Initialize with 0 or any default value

  return (
    <TreesContext.Provider value={{ numberOfTrees, setNumberOfTrees }}>
      {children}
    </TreesContext.Provider>
  );
};
