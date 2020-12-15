//  import React from 'react';
//  import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//  If you want to start measuring performance in your app, pass a function
//  to log results (for example: reportWebVitals(console.log))
//  or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Facebooklogin from './facebooklogin';
import Home from './home';
import FormClass from './class4/formclass';
import FormClass2 from './class4/formclass2';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';

// function Home() {
//   let name = "Joshua (AJ)";
//   let ans = 2 + 2;
//   return (
//     <>

// <Home />/
{/* <Navbar />
      <p style={{ color: 'red' }}>This is the home</p>
      <h2>Your other component</h2>
      <br /><br />*/}
{/* < Facebooklogin /> */ }

{/* <ShortText answer={ans} question="QQQ" option="mmm" /> */ }
//     </>
//   )
// }


// function ShortText(props) {
//   let { question, option, answer } = props;
//   return (
//     <small>Welcome to our page {question} {option} {answer}</small>
//   )
// }
// ReactDOM.render(<Home />, document.getElementById('root'));
let myStore = createStore(reducer);
ReactDOM.render(
      <Provider store={myStore}>
             <App />
      </Provider> , document.getElementById('root'));