import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {Routes, Route} from 'react-router-dom';

import Topbar from './components/Topbar';
import Sidebar from "./components/Sidebar";

import Dashboard from "./modules/dashboard/index";

function App() {
    const [theme, colorMode] = useMode();

    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Sidebar />
              <main className="content">
                <Topbar />
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                </Routes>
              </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    )
}

export default App;
