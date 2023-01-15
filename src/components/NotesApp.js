import React from 'react';
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
// import { ThemeProvider } from '../contexts/ThemeContext';

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
      initializing: true,
      localeContext: {
        locale: localStorage.getItem('locale') || 'id',
        toggleLocale: () => {
          this.setState((prevState) => {
            const newLocale =
              prevState.localeContext.locale === 'id' ? 'en' : 'id';

            localStorage.setItem('locale', newLocale);

            return {
              localeContext: {
                ...prevState.localeContext,
                locale: newLocale,
              },
            };
          });
        },
      },
    };

    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);

    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authUser: data,
      };
    });
  }

  onLogout() {
    this.setState(() => {
      return {
        authUser: null,
      };
    });
    putAccessToken('');
  }

  async componentDidMount() {
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authUser: data,
        initializing: false,
      };
    });
  }

  render() {
    if (this.state.initializing) {
      return (
        <>
          <p style={{ marginTop: '20rem', textAlign: 'center' }}>
            LOADING . . . . . . . . . . . . . .
          </p>
        </>
      );
    }

    if (this.state.authUser === null) {
      return (
        <LocaleProvider value={this.state.localeContext}>
          <div className="NotesApp">
            <header className="NotesApp_header">
              <Navigation />
            </header>
            <main>
              <Routes>
                <Route
                  path="/*"
                  element={<LoginPage loginSuccess={this.onLoginSuccess} />}
                />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </LocaleProvider>
      );
    }

    return (
      <LocaleProvider value={this.state.localeContext}>
        <div className="NotesApp">
          <header className="NotesApp_header">
            <Navigation
              logout={this.onLogout}
              name={this.state.authUser.name}
            />
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
      </LocaleProvider>
    );
  }
}

export default NotesApp;
