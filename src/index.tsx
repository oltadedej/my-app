import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './components/Hello';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import BookContextProvider from './seminar6/BookContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// root.render(
//   <React.StrictMode>
//     <App />
//     {/* <Hello /> */}
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//Leksion 6 React Redux State Management
// root.render(
//   <BookContextProvider>
//     <App />
//   </BookContextProvider>
// );


//TO UncommentBookContextProvider
root.render(
  // <BookContextProvider>
    <App />
  // </BookContextProvider>
);

reportWebVitals();
