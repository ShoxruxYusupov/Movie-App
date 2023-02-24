import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Layout from './pages/Layout'
import MoviePage from './pages/MoviePage'
import SearchPage from './pages/SearchPage'
import SerialPage from './pages/SerialPage'
import SingleContentPage from './pages/SingleContentPage'
import TrendPage from './pages/TrendPage'

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<HomePage />}/>
                    <Route path='trends/pages/:pageid' element={<TrendPage />}/>
                    <Route path='movies/pages/:pagen' element={<MoviePage />}/>
                    <Route path=':type/:id' element={<SingleContentPage />}/>
                    <Route path='tv/pages/:pagetv' element={<SerialPage />}/>
                    <Route path='search' element={<SearchPage />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App