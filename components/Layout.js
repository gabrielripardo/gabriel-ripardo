import Link from 'next/link';
import Aside from "./Aside"
import ArrowIcon from '../components/ArrowIcon';

export default function Layout({children}){
    return(
        <div className="content">
          <div className="borderGeneral"></div>      
          <Aside/>
          <main className="main">
            {children}
        </main>
      </div>    
    )
}