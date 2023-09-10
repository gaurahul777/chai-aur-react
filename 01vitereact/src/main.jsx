// import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import React from "react";
function MyApp() {
  return (
    <h1>
      hello from chaiiiiiiii custom app at the hain to js he naa react to
      directly as a function ki trh likh sakte h
    </h1>
  );
}
//yeh element humne khud k hisab se bnya h isliye nhi chla ab hum react k acc bnana seekhengye
// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "click me to visit google",
// };

const anotherElement = (
  <a href="https://google.com" target="_blank">
    
    visit google
  </a>
);

const anotherUser='chai aur react sir jii'

//yha hum react k acc element bnayengye jo ki predefined hain
const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click me to go google bro",
  anotherUser
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  // <MyApp />
  //  MyApp() // yeh chlega thk
  //  <ReactElement/> //yeh object h aese pass nhi hota
  //  ReactElement() //yeh object h aese pass nhi hota
  //  ReactElement //object aese pass hoga lekin chlega nhi react render func not identified this aur yeh bol sakte h ki iska syntax thk nhi h
  // anotherElement//its work fine
  reactElement // now it is 2nd time work fine bro
  // <App />
  // </React.StrictMode>,
);
