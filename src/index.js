import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Text from './Text';
// import Welcome from './Welcome';
import 'bootstrap/dist/css/bootstrap.min.css'
// import NameCard from './component/NameCard'

ReactDOM.render(
  
    <App />,
    //  <Text />,
    //  <NameCard />,
   
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
