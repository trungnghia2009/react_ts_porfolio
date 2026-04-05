import { createContext, useContext, useEffect, useState } from "react";

interface IAppContext {
  theme: ThemeContextType;
  setTheme: (theme: ThemeContextType) => void;
}

export type ThemeContextType = "light" | "dark";

const AppContext = createContext<IAppContext | null>(null);

type Props = {
  children: React.ReactNode;
};

export const AppContextProvider = (props: Props) => {
  const { children } = props;

  const [theme, setTheme] = useState<ThemeContextType>(() => {
    const initialTheme =
      (localStorage.getItem("theme") as ThemeContextType) || "light";
    return initialTheme;
  });

  useEffect(() => {
    const mode = localStorage.getItem("theme") as ThemeContextType;
    if (mode) {
      setTheme(mode);
      document.documentElement.setAttribute("data-bs-theme", mode);
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useCurrentApp = () => {
  const currentAppContext = useContext(AppContext);

  if (!currentAppContext) {
    throw new Error(
      "useCurrentApp has to be used within <AppContext.Provider>",
    );
  }

  return currentAppContext;
};
