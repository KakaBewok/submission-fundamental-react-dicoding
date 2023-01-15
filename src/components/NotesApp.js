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
        <p style={{ marginTop: '20rem', textAlign: 'center' }}>
          LOADING . . . . . . . . . . . . . .
        </p>
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

// class NotesApp extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       authUser: null,
//       initializing: true,
//       localeContext: {
//         locale: localStorage.getItem('locale') || 'id',
//         toggleLocale: () => {
//           this.setState((prevState) => {
//             const newLocale =
//               prevState.localeContext.locale === 'id' ? 'en' : 'id';

//             localStorage.setItem('locale', newLocale);

//             return {
//               localeContext: {
//                 ...prevState.localeContext,
//                 locale: newLocale,
//               },
//             };
//           });
//         },
//       },
//       themeContext: {
//         theme: localStorage.getItem('theme') || 'light',
//         toggleTheme: () => {
//           this.setState((prevState) => {
//             const newTheme =
//               prevState.themeContext.theme === 'light' ? 'dark' : 'light';

//             localStorage.setItem('theme', newTheme);

//             return {
//               ...prevState.themeContext,
//               theme: newTheme,
//             };
//           });
//         },
//       },
//     };

//     this.onLoginSuccess = this.onLoginSuccess.bind(this);
//     this.onLogout = this.onLogout.bind(this);
//   }

//   async onLoginSuccess({ accessToken }) {
//     putAccessToken(accessToken);

//     const { data } = await getUserLogged();

//     this.setState(() => {
//       return {
//         authUser: data,
//       };
//     });
//   }

//   onLogout() {
//     this.setState(() => {
//       return {
//         authUser: null,
//       };
//     });
//     putAccessToken('');
//   }

//   async componentDidMount() {
//     const { data } = await getUserLogged();

//     this.setState(() => {
//       return {
//         authUser: data,
//         initializing: false,
//       };
//     });

//     document.documentElement.setAttribute(
//       'data-theme',
//       this.state.themeContext.theme
//     );
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.themeContext.theme !== this.state.themeContext.theme) {
//       document.documentElement.setAttribute(
//         'data-theme',
//         this.state.themeContext.theme
//       );
//     }
//   }

//   render() {
//     if (this.state.initializing) {
//       return (
//         <>
//           <p style={{ marginTop: '20rem', textAlign: 'center' }}>
//             LOADING . . . . . . . . . . . . . .
//           </p>
//         </>
//       );
//     }

//     if (this.state.authUser === null) {
//       return (
//         <ThemeProvider value={this.state.themeContext}>
//           <LocaleProvider value={this.state.localeContext}>
//             <div className="NotesApp">
//               <header className="NotesApp_header">
//                 <Navigation />
//               </header>
//               <main>
//                 <Routes>
//                   <Route
//                     path="/*"
//                     element={<LoginPage loginSuccess={this.onLoginSuccess} />}
//                   />
//                   <Route path="/register" element={<RegisterPage />} />
//                   <Route path="*" element={<NotFound />} />
//                 </Routes>
//               </main>
//             </div>
//           </LocaleProvider>
//         </ThemeProvider>
//       );
//     }

//     return (
//       <ThemeProvider value={this.state.themeContext}>
//         <LocaleProvider value={this.state.localeContext}>
//           <div className="NotesApp">
//             <header className="NotesApp_header">
//               <Navigation
//                 logout={this.onLogout}
//                 name={this.state.authUser.name}
//               />
//             </header>
//             <main>
//               <Routes>
//                 <Route path="/" element={<HomePage />} />
//                 <Route path="/notes/new" element={<AddPage />} />
//                 <Route path="/notes/:id" element={<DetailPage />} />
//                 <Route path="*" element={<NotFound />} />
//               </Routes>
//             </main>
//           </div>
//         </LocaleProvider>
//       </ThemeProvider>
//     );
//   }
// }

// export default NotesApp;
