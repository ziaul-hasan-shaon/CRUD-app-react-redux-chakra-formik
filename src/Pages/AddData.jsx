/* eslint-disable no-unused-vars */
import { Button, Container, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUser } from '../app/features/userSlice'
import { replace } from 'formik'
import './AddData.css'

function AddData() {

    const [user, setUser] = useState({ name: '', email: '', address: '', password: '', confirm: '', tagline: '' })

    const numberOfUsers = useSelector(state => state.userReducer.users.length)
    // console.log(numberOfUsers)

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const id = numberOfUsers + 1;
        const name = user.name;
        const email = user.email;
        const address = user.address;
        const password = user.password;
        const confirm = user.confirm;
        const tagline = user.tagline;
        const newuser = { id, name, email, address, password, confirm, tagline }
        dispatch(addUser(newuser))
        navigate('/display', { replace: true })
    }
    return (

        <Container maxW='800px' mx='auto' bg='purple.500' p={20} borderRadius='lg' my={20} boxShadow='lg'>
            <Heading my={4} textAlign='center' color='antiquewhite'>Add your data here...</Heading>

            <form className='form' onSubmit={handleSubmit}>
                <div className='form-field'>
                    <label htmlFor="name">User Name</label>
                    <input type="text" name="name" id="name" placeholder='write your name' value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
                </div>
                <div className='form-field'>
                    <label htmlFor="email">User Email</label>
                    <input type="text" name="email" id="email" placeholder='write your email' value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                </div>
                <div className='form-field'>
                    <label htmlFor="password">User password</label>
                    <input type="password" name="password" id="password" placeholder='write your password' value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                </div>
                <div className='form-field'>
                    <label htmlFor="confirmpassword">Confirm password</label>
                    <input type="password" name="confirmpassword" id="confirmpassword" placeholder='please confirm your password' value={user.confirm} onChange={(e) => setUser({ ...user, confirm: e.target.value })} />
                </div>
                <div className='form-field'>
                    <label htmlFor="address">User Address</label>
                    <input type="text" name="address" id="address" placeholder='write your address' value={user.address} onChange={(e) => setUser({ ...user, address: e.target.value })} />
                </div>
                <div className='form-field'>
                    <label htmlFor="address">User Tagline</label>
                    <input type="text" name="tagline" id="tagline" placeholder='write your tagline' value={user.tagline} onChange={(e) => setUser({ ...user, tagline: e.target.value })} />
                </div>
                <Button type='submit' my={5} bg='antiquewhite' fontSize='18px' w='20%'>Add user</Button>
            </form>
        </Container>

    )
}

export default AddData
