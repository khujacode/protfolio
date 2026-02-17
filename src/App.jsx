import React, { Suspense } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { About_me, Layout, Main, Nothing, Projects, Send_me } from './Routes/Routes'
import Loader from './Routes/Loader/Loader'

const router =createBrowserRouter ([
  {
    path: "/",
    element: <Suspense> <Layout/> </Suspense>,
    children: [
      {
        index:true,
        element: <Suspense fallback={ <div className='flex justify-center items-center h-[100vh] bg-[white] rounded-[30px]'> <Loader/> </div> }> <Main/> </Suspense>
      },
    

      {
        path: "about_me",
        element: <Suspense fallback={ <div className='flex justify-center items-center h-[100vh] bg-[white] rounded-[30px]'> <Loader/> </div> }> <About_me/> </Suspense>
      },
      {
        path: "projects",
        element: <Suspense fallback={ <div className='flex justify-center items-center h-[100vh] bg-[white] rounded-[30px]'> <Loader/> </div> }> <Projects/> </Suspense>
      },
      {
        path: "send_me",
        element: <Suspense fallback={ <div className='flex justify-center items-center h-[100vh] bg-[white] rounded-[30px]'> <Loader/> </div> }> <Send_me/> </Suspense>
      },

     

      {
        path: "*",
        element: <Suspense fallback={ <div className='flex justify-center items-center h-[100vh] bg-[white] rounded-[30px]'> <Loader/> </div> }> <Nothing/> </Suspense>
      }
    ]
  }
]) 

const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
