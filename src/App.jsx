import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

// user defined components
import Calendar from "./components/calendar";
import Dashboard from "./components/dashboard";
import ResponsiveAppBar from "./components/global/Appbar";
import Orders from "./components/orders";
import Products from "./components/products";

// user defined context
import { ColorModeContext, useMode } from "./theme";
import store from "./store";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CssBaseline />
          <div className="app ">
            <main className="content">
              <ResponsiveAppBar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/products" element={<Products />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/calendar" element={<Calendar />} />
              </Routes>
            </main>
          </div>
        </Provider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
