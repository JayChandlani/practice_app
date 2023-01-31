import { ThemeProvider } from "@emotion/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/auth";
import { themeSettings } from "./theme"
import { createTheme, CssBaseline } from "@mui/material";
import Home from './pages/home'
import Cart from "./pages/cart";


const App = () => {
  const theme = createTheme(themeSettings('dark'))

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App