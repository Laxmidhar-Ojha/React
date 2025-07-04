import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import User from './components/User/User'
import GitHub, { fetchGitData } from './components/GitHub/GitHub'

function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
          <Route path="" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="gitHub" loader={fetchGitData} element={<GitHub/>}/>
          <Route path="user/:id" element={<User/>}/>

      </Route>
    )
  )
  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
