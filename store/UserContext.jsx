import { createContext, useState } from "react";

// Create the context
export const UserContext = createContext();

// Create the provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "" });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
