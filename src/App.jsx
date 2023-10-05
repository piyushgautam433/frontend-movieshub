import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Signup from './pages/Signup'
import Login from './pages/Login'
import Movies from './pages/Movies'
import Player from './pages/Player'
import Films from './pages/Films'
import TVShows from './pages/TVShows'
import UserListedMovies from './pages/UserLiked'



export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route exact path = "/login" element ={<Login/>} />
    <Route exact path = "/signup" element ={<Signup/>} />
    <Route exact path = "/player" element ={<Player/>} />
    <Route exact path = "/" element ={<Movies/>} />
    <Route exact path = "/mylist" element ={<UserListedMovies/>} />
    <Route exact path = "/tv" element ={<Films/>} />
    <Route exact path = "/movies" element ={<TVShows/>} />
  </Routes>
  </BrowserRouter>
}
