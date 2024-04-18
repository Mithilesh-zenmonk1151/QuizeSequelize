import React from 'react'
import Sidebar from '../componenet/sidebar/Sidebar'
import Navbar from '../componenet/navbar/Navbar'

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div>
        <Sidebar/>
        <Navbar/>
        <div>{children}</div>
      
    </div>
  )
}

export default layout
