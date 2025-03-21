import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import ButtonClick from './components/Button';
import Input from './components/Input';
import FormExample from './components/FormExample';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Dashboard from './pages/Dashboard';
import NavigateButton from './components/NavigationButton';
import Hello from './components/Hello';

//Leksion 2, Base structure of react application
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


// //Leksion 3
// function App() {
//   return (
//     <div>
//       {/* <Hello/> */}
//       {/* <Greeting name='User1'/> */}
//       {/* <Counter/> */}
//       {/* <Input/> */}
//       {/* <ButtonClick/> */}
//       <FormExample/>
//       {/* <Hello/> */}
//       {/* <FormExample/> */}
//       {/* <Input/> */}
//       {/* <ButtonClick/> */}
//       {/* <Counter/>
//       <Greeting name="Alice" /> */}
//     </div>
//   );
// }

//React-Router  --> aksesimi i url direkt ne browser
// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/home" element={<Home />} />
//       </Routes>
//     </Router>
//   );
// }

//React-Router with Links and Dynamic Params

// function App() {
//   return (
//     <Router>
//       <nav>
//         <Link to="/home">Go to Home</Link>|
//         <Link to="/user/1">User 1</Link> | 
//         <Link to="/user/2">User 2</Link> | 
//         <Link to="/user/3">User 3</Link>
//       </nav>
//       <Routes>
//         <Route path="/home" element={<Home />} />
//         <Route path="/user/:id" element={<UserProfile />} />
//       </Routes>
//     </Router>
//   );
// }

//React Router with Nested Routes
// function App() {
//   return (
//     <Router>
//       <nav>
//         <Link to="/dashboard">Dashboard</Link>
//       </nav>
//       <Routes>
//         {/* Parent Route */}
//         <Route path="/dashboard" element={<Dashboard />}>
//           {/* Nested Child Routes */}
//           <Route path="profile" element={<Profile />} />
//           <Route path="settings" element={<Settings />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }


//React Router with useNavigate
// function App() {
//   return (
//     <Router>
//       <h1>React Router Navigation Example</h1>
//       <NavigateButton />

//       <Routes>
//         {/* Dynamic Route for User Profile */}
//         <Route path="/user/:id" element={<UserProfile />} />
//       </Routes>
//     </Router>
//   );
// }

//React Router with useNavigate and show only elements from a page  access home and on click it shows only elements of a page
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={
            <div>
              <h1>React Router Navigation Example</h1>
              <NavigateButton />
            </div>
          }
        />

        {/* User Profile Page (No H1) */}
        <Route path="/user/:id" element={<UserProfile />} />
      </Routes>
    </Router>
  );
};


export default App;
