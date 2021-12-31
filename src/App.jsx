import React, { Fragment } from 'react'
import { Navbar, Loader, Welcome, Footer, Transactions, Services } from './components/index';

const App = () => {
  return (
    <Fragment>
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Navbar/>
          <Welcome/>
        </div>
        <Services/>
        <Transactions/>
        <Footer/>
      </div>
    </Fragment>
  )
}

export default App
