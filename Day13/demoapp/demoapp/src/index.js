import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Calculation  from './Calculation';
import reportWebVitals from './reportWebVitals';
import Factorial from './Factorial';
import Circle from './Circle';
import Square from './Square';
import Rectangle from './Rectangle';
import Case from './Case';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Factorial num="5" />
    <Calculation num1="7" num2="6" op ="sum"/>
    <Rectangle Length ="45" Breadth ="12" />
    <Circle Radius = "7" />
    <Square Side="9" />
    <Case></Case> 
  </React.StrictMode>
  
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
