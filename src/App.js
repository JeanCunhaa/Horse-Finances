import logo from './logo.svg';
import './App.css';
var parse = require('html-react-parser');
function App() {
  let test = ''
    for (let i = 1; i < 10; i++) {
     test+=`<h1 style="padding-left:${i*20}px;">Hello World</h1>`
     console.log(test)
  }
  test = parse(test)
  //now return 10 sepate elements
  return (
   test

    
  );
 }
// a0888e1f7342420a

export default App;
