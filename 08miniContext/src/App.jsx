import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"

function App() {

  return (
//<UserContext.Provider value={}> yeh bhi thk hain

    <UserContextProvider>
      {/* yha component late h aur dekhte h kaise kam ho rha hain */}
      <h1>react with chai</h1>
      <Login />
      <Profile/>
    </UserContextProvider>
  )
}

export default App
