import './App.css';
//import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
//import Register from './components/register/register';
//import { Route, Router } from 'react-router-dom'
//import { useState } from 'react';

function App() {
  //const [user, setLoginUser] = useState({})

  return (
    // <Router>
    //   <switch>
    //     <Route>
          <div className="App">

            <Login />
            {/* <Routes>
        <Route exact path="/" element={< Homepage />}>
          {
            user && user.id ? <Homepage setLoginUser={setLoginUser}/> : <Login setLoginUser={setLoginUser}/>
          }
        </Route>
        <Route path="/login" element={< Login />}>
          {/* <Login setLoginUser={setLoginUser}/> */}
            {/* </Route>
        <Route path="/register" element={<Register />}> */}
            {/* <Register /> */}
            {/* </Route>
      </Routes> */}
          </div>
    //     </Route>
    //   </switch>
    // </Router>
  );
}

export default App;