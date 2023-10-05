import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.JSX'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
// import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from './components/About/About'
import User from './components/User/User'
import Github, { githubInfoLoader } from './components/Github/Github'
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,//yeh wala kam app .jsx me ker ke yha render kere sakte the
//     children: [
//       {
//         path: "",
//         element:<Home/>
//       },
//       {
//         path: "about",
//         element:<About/>
//       },
//       {
//         path: "contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={ <Home/>} />
      <Route path='about' element={ <About/>} />
      <Route path='contact' element={ <Contact/>} />
      <Route path='user/:userid' element={ <User/>} />
      <Route
        loader={githubInfoLoader}
        path='github'
        element={<Github />} />
</Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
