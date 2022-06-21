import { useState } from 'react';
import Link from 'next/link';
import Aside from "./Aside"
import ArrowIcon from '../components/ArrowIcon';
export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  const handleClickMenu = () => {
    console.log('# open: ', open)
    setOpen(!open);
  }

  return (
    <div className="content">
      <div className="borderGeneral"></div>
      <Aside open={open} />
      <main className="main">
        {children}
      </main>
      <aside className="menu-options">
        {/* <MenuIcon /> */}
        <button onClick={handleClickMenu}>
          Abrir Menu
        </button>
      </aside>
    </div>
  )
}