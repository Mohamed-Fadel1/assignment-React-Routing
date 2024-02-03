import React from 'react'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import LayOut from './components/LayOut/LayOut'
import Home from './components/Home/Home'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import NotFound from './components/NotFound/NotFound'


export default function App() {
  let routes = createBrowserRouter ([
    { path : "" , element : <LayOut/> , children : [
      { index : true , element : <Home/>  } ,
      { path : "about" , element : <About/>  } ,
      { path : "portfolio" , element : <Portfolio/>  } ,
      { path : "contact" , element : <Contact/>  } ,
      { path : "*" , element : <NotFound/>  } ,
      
    ]  }
  ])
  return (
    <>
   <RouterProvider router = { routes } >  </RouterProvider>
    </>
  )
}
