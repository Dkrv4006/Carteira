import React, { createContext, ReactNode, useState } from 'react';


import dark from './theme/dark';
import light from './theme/light';

// interface ThemeContextProps {
//   stateTheme,
//   toggleTheme: () => void;
// }


export const ThemeContext = createContext({
  stateTheme: dark,
  toggleTheme: () => {}
})
// fornecendo o contexto
export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [stateTheme, setState] = useState(light);

  const toggleTheme = () => {
    console.log("daniel");
    console.log(stateTheme);
    
    setState(stateTheme === light ? dark : light);
  }

  return (
    <ThemeContext.Provider value={{ stateTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};