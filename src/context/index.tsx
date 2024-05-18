/* eslint-disable no-unused-vars */

/**
  This file is used for controlling the global states of the components,
  you can customize the states for the different components here.
*/

import { createContext, ReactNode, useContext, useMemo, useReducer } from "react";

// The  ALDR Tech Dashboard main context
const MaterialUI = createContext<any>(null);

// Setting custom name for the context which is visible on react dev tools
MaterialUI.displayName = "MaterialUIContext";

type sideNavColor =
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "error"
  | "light"
  | "dark";

// types
interface StateTypes {
  miniSidenav: boolean;
  transparentSidenav: boolean;
  whiteSidenav: boolean;
  sidenavColor: sideNavColor;
  transparentNavbar: boolean;
  fixedNavbar: boolean;
  direction: "ltr" | "rtl";
  layout: "dashboard" | "page";
  darkMode: boolean;
}

interface ActionTypes {
  type:
    | "MINI_SIDENAV"
    | "TRANSPARENT_SIDENAV"
    | "WHITE_SIDENAV"
    | "SIDENAV_COLOR"
    | "TRANSPARENT_NAVBAR"
    | "FIXED_NAVBAR"
    | "DIRECTION"
    | "LAYOUT"
    | "DARKMODE";
  value: any;
}

// ALDR Tech Dashboard reducer
function reducer(state: StateTypes, action: ActionTypes) {
  switch (action.type) {
    case "MINI_SIDENAV": {
      return { ...state, miniSidenav: action.value };
    }
    case "TRANSPARENT_SIDENAV": {
      return { ...state, transparentSidenav: action.value };
    }
    case "WHITE_SIDENAV": {
      return { ...state, whiteSidenav: action.value };
    }
    case "SIDENAV_COLOR": {
      return { ...state, sidenavColor: action.value };
    }
    case "TRANSPARENT_NAVBAR": {
      return { ...state, transparentNavbar: action.value };
    }
    case "FIXED_NAVBAR": {
      return { ...state, fixedNavbar: action.value };
    }
    case "DIRECTION": {
      return { ...state, direction: action.value };
    }
    case "LAYOUT": {
      return { ...state, layout: action.value };
    }
    case "DARKMODE": {
      return { ...state, darkMode: action.value };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

// ALDR Tech Dashboard context provider
function MaterialUIControllerProvider({ children }: { children: ReactNode }): JSX.Element {
  const supportedLanguages = process.env.REACT_APP_SUPPORTED_LANGUAGES?.split(",") || ["EN"];
  const defaultLanguage = supportedLanguages[0].toLowerCase();
  const initialState: StateTypes = {
    miniSidenav: process.env.REACT_APP_MINI_SIDENAV === "true",
    transparentSidenav: process.env.REACT_APP_TRANSPARENT_SIDENAV === "true",
    whiteSidenav: process.env.REACT_APP_WHITE_SIDENAV === "true",
    sidenavColor: [
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "light",
      "dark",
    ].includes(process.env.REACT_APP_SIDENAV_COLOR)
      ? (process.env.REACT_APP_SIDENAV_COLOR as sideNavColor)
      : "info",
    transparentNavbar: process.env.REACT_APP_TRANSPARENT_NAVBAR === "true",
    fixedNavbar: process.env.REACT_APP_FIXED_NAVBAR === "true",
    direction: defaultLanguage === "ar" ? "rtl" : "ltr",
    darkMode: process.env.REACT_APP_DARK_MODE === "true",
    layout: process.env.REACT_APP_LAYOUT === "page" ? "page" : "dashboard",
  };

  const [controller, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => [controller, dispatch], [controller, dispatch]);

  return <MaterialUI.Provider value={value}>{children}</MaterialUI.Provider>;
}

// ALDR Tech Dashboard custom hook for using context
function useMaterialUIController() {
  const context = useContext(MaterialUI);

  if (!context) {
    throw new Error(
      "useMaterialUIController should be used inside the MaterialUIControllerProvider."
    );
  }

  return context;
}

// Context module functions
const setMiniSidenav = (
  dispatch: (arg: { type: "MINI_SIDENAV"; value: boolean }) => void,
  value: boolean
) => dispatch({ type: "MINI_SIDENAV", value });
const setTransparentSidenav = (
  dispatch: (arg: { type: "TRANSPARENT_SIDENAV"; value: boolean }) => void,
  value: boolean
) => dispatch({ type: "TRANSPARENT_SIDENAV", value });
const setWhiteSidenav = (
  dispatch: (arg: { type: "WHITE_SIDENAV"; value: boolean }) => void,
  value: boolean
) => dispatch({ type: "WHITE_SIDENAV", value });
const setSidenavColor = (
  dispatch: (arg: {
    type: "SIDENAV_COLOR";
    value: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "light" | "dark";
  }) => void,
  value: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "light" | "dark"
) => dispatch({ type: "SIDENAV_COLOR", value });
const setTransparentNavbar = (
  dispatch: (arg: { type: "TRANSPARENT_NAVBAR"; value: boolean }) => void,
  value: boolean
) => dispatch({ type: "TRANSPARENT_NAVBAR", value });
const setFixedNavbar = (
  dispatch: (arg: { type: "FIXED_NAVBAR"; value: boolean }) => void,
  value: boolean
) => dispatch({ type: "FIXED_NAVBAR", value });
const setDirection = (
  dispatch: (arg: { type: "DIRECTION"; value: "ltr" | "rtl" }) => void,
  value: "ltr" | "rtl"
) => dispatch({ type: "DIRECTION", value });
const setLayout = (
  dispatch: (arg: { type: "LAYOUT"; value: "dashboard" | "page" }) => void,
  value: "dashboard" | "page"
) => dispatch({ type: "LAYOUT", value });
const setDarkMode = (
  dispatch: (arg: { type: "DARKMODE"; value: boolean }) => void,
  value: boolean
) => dispatch({ type: "DARKMODE", value });

export {
  MaterialUIControllerProvider,
  useMaterialUIController,
  setMiniSidenav,
  setTransparentSidenav,
  setWhiteSidenav,
  setSidenavColor,
  setTransparentNavbar,
  setFixedNavbar,
  setDirection,
  setLayout,
  setDarkMode,
};
