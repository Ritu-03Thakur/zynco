import { Box, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {
  BrowserRouter,
  Route,
  Routes,
  
} from "react-router-dom";
import Prediction from "./Pages/Prediction";
import Dashboard from "./Pages/DashBoard";
import Navbar from "./Component/Navbar";
import { themeSettings } from "./theme";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
     <>
     <BrowserRouter>
     <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Box
                        width="100%"
                        height="100%"
                        padding="1rem 2rem 4rem 2rem"
                    >
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route
                                path="/predictions"
                                element={<Prediction />}
                            />
                        </Routes>
                    </Box>
                </ThemeProvider>
     
     </BrowserRouter>
     </>
  )
}

export default App
