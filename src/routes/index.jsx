/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Error from '../Pages/Error'
import DisplayData from '../Pages/Displaydata'
import AddData from '../Pages/AddData'
import EditData from '../Pages/EditData'
import Navbar from '../Layout/Navbar'

function Index() {
    return (
        <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/display' element={<DisplayData></DisplayData>}></Route>
                <Route path='/addData' element={<AddData></AddData>}></Route>
                <Route path='/editData' element={<EditData></EditData>}></Route>
                <Route path='*' element={<Error></Error>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Index


