/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import HomePage from '../pages/HomePage';
import AddPage from '../pages/AddPage';
import DetailPage from '../pages/DetailPage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import NotFound from './NotFound';
import { getUserLogged, putAccessToken } from '../utils/network-data';
import { LocaleProvider } from '../contexts/LocaleContext';
import { ThemeProvider } from '../contexts/ThemeContext';
import Loading from '../components/isLoading';

const NotesApp = () => {
  const [authedUser, setAuthedUser] = useState(null);
  const [isInit, setIsInit] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [locale, setLocale] = useState(localStorage.getItem('locale') || 'id');

  useEffect(() => {
    const setupUser = async () => {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setIsInit(false);
    };
    setupUser();
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const toggleLocale = () => {
    const newLocale = locale === 'id' ? 'en' : 'id';
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  };

  const onLogout = () => {
    setAuthedUser(null);
    putAccessToken('');
  };

  const contextValueTheme = useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  const contextValueLocale = useMemo(() => {
    return {
      locale,
      toggleLocale,
    };
  }, [locale]);

  if (isInit) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <ThemeProvider value={contextValueTheme}>
      <LocaleProvider value={contextValueLocale}>
        <>
          {!authedUser ? (
            <div className="NotesApp">
              <header className="NotesApp_header">
                <Navigation />
              </header>
              <main>
                <Routes>
                  <Route
                    path="/*"
                    element={<LoginPage loginSuccess={onLoginSuccess} />}
                  />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          ) : (
            <div className="NotesApp">
              <header className="NotesApp_header">
                <Navigation logout={onLogout} name={authedUser.name} />
              </header>
              <main>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/notes/new" element={<AddPage />} />
                  <Route path="/notes/:id" element={<DetailPage />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          )}
        </>
      </LocaleProvider>
    </ThemeProvider>
  );
};

export default NotesApp;
