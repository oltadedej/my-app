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
import { divide } from './types/leksion4/ErrorHandling';
import { add, greet } from './types/leksion4/Functions';
import { audiVehicle, teslaVehicle } from './types/leksion4/Vehicle';
import { ferrari } from './types/leksion4/SportsVehicle';
import { myDog } from './types/leksion4/Animal';
import { dev } from './types/leksion4/Employee';
import { UserRole, userRole } from './types/leksion4/UserRole';
import { identity } from './types/leksion4/Identity';
import { numberValue } from './types/leksion4/CastingExamples';
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


//Leksion 4 Add
// function App() {
//   return (
//     <h1>Adding 2 numbers: {add(10, 10)}</h1>
//   );
// }

//Greet Overload
// function App() {
//   return (
//     // use this <> </> to avoid adding a div
//     <> 
//    <h1>{greet('John')}</h1>
//    <h1>{greet(20)}</h1>
//    </>
//   );
// }

//Vehicle class
// function App() {
//   return (
//     <div>
//       <h1>Vehicle Information</h1>
//       <h2>Model: {teslaVehicle.model}</h2>
//       <h3>Info: {teslaVehicle.info}</h3>
//       <p>{teslaVehicle.showEngineNumber()}</p>
//       {/* <h4>Speed: {teslaVehicle.speed}</h4>  
//       //nuk mund ta aksesojme dot me . , na duhet nje funksion i ngjashem me showEngineNumber */}

//       <h2>Model: {audiVehicle.model}</h2>
//       <h3>Info: {audiVehicle.info}</h3>
//       <p>{audiVehicle.showEngineNumber()}</p>
//       {/* <h3>Speed: {audiVehicle.speed}</h3> */}
//     </div>
//   );
// }

//Trashegimia duke perdorur klasat normale
// function App() {
//   return (
//     <div>
//       <h1>Sports Vehicle Information</h1>
//       <h2>Model: {ferrari.model}</h2>
//       <p>{ferrari.showEngineNumber()}</p>
//       <h3>Boosting Speed: {ferrari.boostSpeed()}</h3> 
//       {/* child fuction */}
//     </div>
//   );
// }

//Trashegimia duke perdorur klasat abstrakte
// function App() {
//   return (
//     <div>
//       <h1>Animal</h1>
//       <h2>Dog Name: {myDog.name}</h2>
//       <p>{myDog.makeSound()}</p>
//     </div>
//   );
// }

//Trashegimia duke perdorur interface
// function App() {
//   return (
//     <div>
//       <h1>Developer</h1>
//       <h2>Dev Name: {dev.name}</h2>
//       <p>{dev.work()}</p>
//     </div>
//   );
// }

//Enums
//  function App() {
//   return (
//     <>
//     {/* i lexohet vlera ne int */}
//     <h1>User Role Enum Value: {userRole} </h1> 
//     {/* i lexohet vlera ne string */}
//     <h1>User Role Enum Value: {UserRole[userRole]} </h1>
//     </>
//   );
// }

//GENERICS NE TYPESCRIPT
// function App() {
//   return (
//     <>
//     {/* Generics me int */}
//     <h3>Number Generics: {identity<number>(10)} </h3> 
//     <h3>String Generics: {identity<string>("Welcome")} </h3> 
//     <h3>Boolean Generics: {identity<boolean>(true) } </h3> 
//     {/* Nuk e afishon vlere true, false pasi reacti i ben ignore true false, null or undefined */}
//     <h3>Boolean Generics: {identity<boolean>(true).toString() } </h3> 
//     </>
//   );
// }

//CASTING I TE DHENAVE
// function App() {
//   return (
//     <>
//       {/* Casting  Convertimi i unknown ne string dhe afishimi i gjatesise se arrayt*/}
//       <div>
//         <h3>{numberValue} </h3>
//       </div>
//     </>
//   );
// }


//divide
function App() {
  return (
   <h1>{divide(10,0)}</h1>
  );
}
export default App;
