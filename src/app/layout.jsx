import Header from '@/components/header'
import React from 'react'
import "./globals.css"
import Providers from './providers'
import Tabs from '@/components/tabs'
import Head from './head'

const Layout = ({children}) => {
  return (
   <html lang='en'>
    <Head/>
    <body className='px-5 text-white'>
      
       <Providers>
        <Header/>
        <Tabs/>
        {children}
        </Providers>
    </body>
   </html>
  )
}

export default Layout
