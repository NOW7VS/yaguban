import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Header from './components/Header/Header';
import theme from './theme';
import HomePage from './pages/HomePage';
import TeamPage from './pages/TeamPage';
import PlayersPage from './pages/PlayersPage';
import RecordsPage from './pages/RecordsPage';
import SchedulePage from './pages/SchedulePage';
import DuesPage from './pages/DuesPage';
import CommunityPage from './pages/CommunityPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import './App.css';

const routes = [
  { path: "*", element: <Navigate to="/home" /> },
  { path: "/home", element: <HomePage /> },
  { path: "/team", element: <TeamPage /> },
  { path: "/players", element: <PlayersPage /> },
  { path: "/records", element: <RecordsPage /> },
  { path: "/schedule", element: <SchedulePage /> },
  { path: "/dues", element: <DuesPage /> },
  { path: "/community/*", element: <CommunityPage /> },
  { path: "/sign-in", element: <SignInPage /> },
  { path: "/sign-up", element: <SignUpPage /> },
  { path: "/findinfo", element: <SignInPage /> },
];

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <TransitionGroup className="transitions-wrapper">
      <CSSTransition
        key={location.pathname}
        classNames="page-transition"
        timeout={500}
      >
        <Routes location={location}>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <AnimatedRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
