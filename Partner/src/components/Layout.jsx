import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import {Outlet} from "react-router-dom"

export default function Layout({children}) {
  return (
    <div className="flex flex-col w-full h-screen bg-[#fafbfc] overflow-hidden">
      <Navbar />
      
      <div className="flex-1 flex h-full overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          {/* <Outlet /> */}
          {children}
        </main>
      </div>
      
    </div>
  );
}