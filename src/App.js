import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {Routes, Route} from 'react-router-dom';

import Topbar from './components/Topbar';
import Sidebar from "./components/Sidebar";

import Dashboard from "./modules/dashboard/index";
import Team from "./modules/team/index";
import Contacts from "./modules/contacts/index";
import Invoices from "./modules/invoices/index";
import Profile from "./modules/profile/index";
import Calendar from "./modules/calendar/index";
import FAQ from "./modules/faq/index";

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
                  <Route path="/team" element={<Team />} />
                  <Route path="/contacts" element={<Contacts />} />
                  <Route path="/invoices" element={<Invoices />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/faq" element={<FAQ />} />
                </Routes>
              </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    )
}

export default App;
