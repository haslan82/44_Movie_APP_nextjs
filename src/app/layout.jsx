import Header from '@/components/header'
import React from 'react'
import "./globals.css"
import Providers from './providers'
import Tabs from '@/components/tabs'

const Layout = ({children}) => {
  return (
   <html lang='en'>
    <body>
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
