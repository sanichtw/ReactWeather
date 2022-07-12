import { ThemeContext } from './../context/context';
import { useContext } from "react";

export const useTheme = () => useContext(ThemeContext);