import Image from 'next/image'
import { SideBar } from '../styles/global';

export default function Aside({ open }) {
  return (
    <aside>
      <SideBar mobile={open}>
        <section className="perfil">
          <a href={"/"} >
            <Image className="perfilImage" src='/assets/images/gabrielface.jpeg' alt="me" width="75" height="75" />
          </a>
          <h1 className="perfilTitles">
            Gabriel Ripardo
            <small>
              Front-end Developer
            </small>
          </h1>
          <p className="perfilDescription">
            Escrevo sobre recursos de
            linguagens de programação,
            hacks que facilitam a vida,
            javascript e música.
          </p>
        </section>
        <section >
          <nav>
            <ul className="networks">
              <li className="linkedin">
                <a href="https://www.linkedin.com/in/gabriel-sena-317a8412a/">
                  <Image src="/assets/icons/linkedin.svg" alt="linkedin logo" width="25" height="25" />
                </a>
              </li>
              <li className="github">
                <a href="https://github.com/gabrielripardo">
                  <Image src="/assets/icons/github.svg" alt="linkedin logo" width="25" height="25" />
                </a>
              </li>
            </ul>
          </nav>
          <nav>
            <ul className="pagesLink">
              <li>
                <a href={"/"}>Home</a>
              </li>
              <li>
                <a href={"/about"}>Sobre mim</a>
              </li>
              <li>
                <a href={"#"}>Música</a>
              </li>
            </ul>
          </nav>
        </section>
      </SideBar>
    </aside>
  )
}