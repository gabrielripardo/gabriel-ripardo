import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import Image from 'next/image'
// import {gabrielface} from '../assets/images/gabrielface. jpeg';

export default function Index({ posts, globalData }) {
  return (
    <>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      {/* <Header name={globalData.name} /> */}
      <div className="content">
          <div className="borderGeneral"></div>      
          <aside className="sidebar">
            <section className="perfil">
              <a href={"#"} >
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
                    <a href={"#"}>Home</a>
                  </li>
                  <li>
                    <a href={"#"}>Sobre mim</a>
                  </li>
                  <li>
                    <a href={"#"}>Música</a>
                  </li>
                </ul> 
              </nav>
            </section>
          </aside>
          <main className="main">
          <ul className="w-full">
            {posts.map((post) => (
              <li
                key={post.filePath}
                className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0"
              >
                <a
                  as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                  href={`/posts/[slug]`}
                >
                  <a className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4">
                    {post.data.date && (
                      <p className="uppercase mb-3 font-bold opacity-60">
                        {post.data.date}
                      </p>
                    )}
                    <h2 className="text-2xl md:text-3xl">{post.data.title}</h2>
                    {post.data.description && (
                      <p className="mt-3 text-lg opacity-60">
                        {post.data.description}
                      </p>
                    )}
                    <ArrowIcon className="mt-4" />
                  </a>
                </a>
              </li>
            ))}
          </ul>
        </main>
      </div>    
    </>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
