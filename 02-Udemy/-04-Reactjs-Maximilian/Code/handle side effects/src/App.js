import React, { useState  ,useEffect} from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // ButuseEffect it's just a dummy/ demo anyways

  };
  useEffect(() => {
    localStorage.setItem("login" ,"1")

    if(localStorage.getItem("login") ==="1"){
      setIsLoggedIn(true)
    }
  }, [])

  const logoutHandler = () => {
    localStorage.removeItem("login")
    setIsLoggedIn(false)
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
