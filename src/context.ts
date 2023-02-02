import { createContext, useContext } from "react";

export type AppContext = {
  showNavBar: boolean;
  setShowNavBar: (value: any) => void;
};

const MainContext = createContext<AppContext | null>({
  showNavBar: false,
  setShowNavBar: () => {},
});

export const useMainContext = useContext(MainContext);
