import Header from '@/components/header'
import React from 'react'
import "./globals.css"
import Providers from './providers'

const Layout = ({children}) => {
  return (
   <html lang='en'>
    <body>
       <Providers>
        <Header/>
        {children}
        </Providers>
    </body>
   </html>
  )
}

export default Layout
