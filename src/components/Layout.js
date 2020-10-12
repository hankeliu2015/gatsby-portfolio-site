import React from "react"
// import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSideBar = () => {
    console.log('toggleSidebar is activated')
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Navbar toggleSideBar = {toggleSideBar} />
      <Sidebar isOpen={isOpen} toggleSideBar={toggleSideBar} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
