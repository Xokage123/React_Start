import React from "react";
import { hot } from "react-hot-loader/root";

import { Header } from "./shared/Header";

const AppComponent = () => {
  return (
    <h1>Привет Мир!!!</h1>
  );
}

export const App = hot(() => <AppComponent />);
