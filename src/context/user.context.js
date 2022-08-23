import { async } from "@firebase/util";
import { createContext, useEffect, useState } from "react";
import { handleAuthStateChanges, handleSignOut } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
export const UserContext = createContext({
  currentUser: "",
  setCurrentUser: () => {},
});

export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    console.log("user context useeffect fire");
    handleSignOut();
    const handleAuthStateChangesCapsule = async () => {
      handleAuthStateChanges((user) => {
        setCurrentUser(user);
        console.log(user);
        user ? navigate("shop") : navigate("home");
      });
    };
    const unsubscribe = handleAuthStateChangesCapsule();
    return () => {
      unsubscribe();
    };
  }, []);
  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
