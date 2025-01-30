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
import ClickEvent from './utils/Events/ClickEvent';
import FormValidationBuiltIn from './utils/Validations/FormValidationBuiltIn';
import CustomFormValidation from './utils/Validations/CustomFormValidation';
import FormikFormValidation from './utils/Validations/FormikFormValidation';
import AsyncValidationForm from './utils/Validations/AsyncFormValidation';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './App.module.css';
import CounterWithReducer from './reducer/CounterWithReducer';
import FormWithReducer from './reducer/FormWithReducer';
import ThemeProvider from './context/ThemeProvider';
import ThemedComponent from './context/ThemedComponent';
import AuthProvider from './context/AuthenticationContext';
import { LoginDashboard, LoginPage } from './context/LoginComponent';
import AddTask from './redux/AddTask';
import TaskList from './redux/TaskList';

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


// //Leksion 2
// function App() {
//   return (
//     <div>
//       <FormExample/>
//       {/* <Input/> */}
//       {/* <ButtonClick/> */}
//       {/* <Counter/>
//       <Greeting name="Alice" /> */}
//     </div>
//   );
// }

//React-Router
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

//React Router with useNavigate and show only elements from a page 
// const App: React.FC = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/home" element={
//             <div>
//               <h1>React Router Navigation Example</h1>
//               <NavigateButton />
//             </div>
//           }
//         />

//         {/* User Profile Page (No H1) */}
//         <Route path="/user/:id" element={<UserProfile />} />
//       </Routes>
//     </Router>
//   );
// };


//Leksion 5
// function App() {
//   return (
//     <div>
//       {/* <h1>React Events</h1>
//       <ClickEvent></ClickEvent>
//       <h1>React Validations Built In HTML</h1>
//       <FormValidationBuiltIn/>
//       <h1>Custom Form Validation</h1>
//       <CustomFormValidation/>
//       <h1>Formik Form Validation</h1>
//       <FormikFormValidation/> */}
//       <h1> Async Form Validation</h1>
//       <AsyncValidationForm/>
//     </div>
//   );
// }


//Simple CSS
// function App() {
//   return (
//     <div className="container">
//     <h1>Hello, World!</h1>
//   </div>
//   );
// }

//Bootstrap css
// function App() {
//   return (
//     <div className="container mt-5">
//     <button className="btn btn-primary">Buton i dizenjuar nga Bootstrap</button>
//   </div>
//   );
// }


//Module CSS
// function App() {
//   return (
//     <div className={styles.container}>
//       <h1>Hello, World From Module CSS!</h1>
//     </div>
//   );
// }

//Leksion 6
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <CounterWithReducer/> */}
//         <FormWithReducer/>
//       </header>
//     </div>
//   );
// }

//leksion 6 --> Theme Provider

// function App() {
//   return (
//     <ThemeProvider>
//       <ThemedComponent />
//     </ThemeProvider>
//   );
// }

// function App() {
//   return (
//     <AuthProvider>
//       <LoginPage />
//       <LoginDashboard />
//     </AuthProvider>
//   );
// };


function App() {
  return (
    <div>
      <h1>Task Management System</h1>
      <AddTask />
      <TaskList />
    </div>
  );
};


export default App;
