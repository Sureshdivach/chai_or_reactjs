import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Layout } from './Layout'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Home } from './components/Home/Home'
import { About } from './components/About/About'
import { Contact } from './components/Contact/Contact'
import { User } from './components/User/User'
import { GitHub, GithubInfoLoader } from './components/GitHub/GitHub'
// import App from './App.jsx'
// const router =createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout/>,
//     children:[
//       {
//         path:"",        
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])
const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
    <Route path="" element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path='user/:userId' element={<User/>}/>
    <Route
    loader={GithubInfoLoader}
     path='GitHub' 
     element={<GitHub/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router ={router}/>
  </StrictMode>,
)
