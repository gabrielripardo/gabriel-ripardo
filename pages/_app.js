import '../styles/globals.css';
import '../pages/main.scss';
import 'prismjs/themes/prism-tomorrow.css';

import { useRouter } from 'next/router'
import { useEffect } from 'react'
import * as gtag from '../lib/gtag'
import Analytics from '../components/Analytics'

function MyApp({ Component, pageProps }) {

  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <span className="theme-bejamas" />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
