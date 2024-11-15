//import { useState } from 'react'
import {BrowserRouter, Route, Route, Routes} from 'react-router-dom'
import Home from './components/home/home';
import MyBlogs from './components/my-blogs/MyBlogs';

import './App.css'


function App() {

    return (
    <BrowserRouter>
        {/*NavBar*/}

        <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/my-blogs' element = {<MyBlogs/>}/>

        
        
        
        </Routes>
     </BrowserRouter>
    )
}

export default App
