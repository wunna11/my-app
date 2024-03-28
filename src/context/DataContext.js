import React, { createContext } from "react";

export const DataContext = createContext({
  data: ['One', 'Two', 'Three']
});

export const ThemeContext = createContext(null);