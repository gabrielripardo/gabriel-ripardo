import { useState } from 'react';
import Link from 'next/link';
import Aside from "./Aside"
import ArrowIcon from '../components/ArrowIcon';

export default function Layout({ children }) {
  const [style, setStyle] = useState('sidebar');
  const [open, setOpen] = useState(false);

  const handleClickMenu = () => {
    setOpen(!open);
    changeClass();
  }

  const changeClass = () => {
    console.log('# open: ', open)
    if (open) {
      setStyle('sidebar menu');
    } else {
      setStyle('sidebar');
    }

  }
  return (
    <div className="content">
      <div className="borderGeneral"></div>
      <Aside styleClasses={style} />
      <main className="main">
        {children}
      </main>
      <aside className="menu-options">
        <button onClick={handleClickMenu}>
          Abrir Menu
        </button>
      </aside>
    </div>
  )
}