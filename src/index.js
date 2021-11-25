import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById('root');
// const name = "Hồ Thích Huy";
// const age = 21;
// const person = {
//   name: 'Hồ Thích Huy',
//   age : 21,
//   status: false
// };
// const show = (name) => {
//   return <h2>{name}</h2>;
// };
// const Show = (props) => {
//   return <h2>{props.name}</h2>;
// };
// const element = (
//   <div>
//     <h1>Xin chào {show(name)}</h1>
//     <div>Họ tên: {person.name} </div>
//     <div>Tuổi: {person.age}</div>
//     <div>Tình trạng: {person.status ? "Đã kết hôn" : "Chưa kết hôn"}</div>
//     /* <div>{show(name)}</div>
//     <div>{show(name)}</div>
//     <hr />
//     <div>
//       <Show name={name} />
//       <Show name={name} /> 
//     </div>
//   </div>
// );
ReactDOM.render(<App/>, rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
