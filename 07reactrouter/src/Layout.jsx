import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const layout = () => {
  return (
      <>
          <Header />
          <Outlet/>
          <Footer/>
      </>
  )
}

export default layout

//yeh sara kaam aap app.jsx me bhi ker sakte ho