/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { updatUser } from '../app/features/userSlice'
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react'


function EditData({ isOpen, onClose, state }) {

    // const location = useLocation()
    // console.log(location)


    const [editUser, setEditUser] = useState(state)

    // const user = useSelector(state => state.userReducer.users.map(user => user))
    console.log(editUser)
    const { name, email, password, confirm, address, tagline } = editUser
    console.log(name)

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleUpdate = (e) => {
        e.preventDefault()
        dispatch(updatUser(editUser))
        navigate('/display', { replace: true })
    }

    return (
        <div>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent maxW='500px' mx='auto' bg='purple.500' borderRadius='lg' p={5}>
                    <ModalHeader color='antiquewhite'>Edit Your Data here</ModalHeader>
                    <ModalCloseButton bg='red' p={4} borderRadius='lg' color='white' />
                    <form className='form' onSubmit={handleUpdate}>
                        <ModalBody>
                            <div className='form-field'>
                                <label htmlFor="name">User Name</label>
                                <input type="text" name="name" id="name" placeholder='write your name' value={name} onChange={(e) => setEditUser({ ...editUser, name: e.target.value })} />
                            </div>
                            <div className='form-field'>
                                <label htmlFor="email">User Email</label>
                                <input type="text" name="email" id="email" placeholder='write your email' value={email} onChange={(e) => setEditUser({ ...editUser, email: e.target.value })} />
                            </div>
                            <div className='form-field'>
                                <label htmlFor="password">User password</label>
                                <input type="password" name="password" id="password" placeholder='write your password' value={password} onChange={(e) => setEditUser({ ...editUser, password: e.target.value })} />
                            </div>
                            <div className='form-field'>
                                <label htmlFor="confirmpassword">Confirm password</label>
                                <input type="password" name="confirmpassword" id="confirmpassword" placeholder='please confirm your password' value={confirm} onChange={(e) => setEditUser({ ...editUser, confirm: e.target.value })} />
                            </div>
                            <div className='form-field'>
                                <label htmlFor="address">User Address</label>
                                <input type="text" name="address" id="address" placeholder='write your address' value={address} onChange={(e) => setEditUser({ ...editUser, address: e.target.value })} />
                            </div>
                            <div className='form-field'>
                                <label htmlFor="address">User Tagline</label>
                                <input type="text" name="tagline" id="tagline" placeholder='write your tagline' value={tagline} onChange={(e) => setEditUser({ ...editUser, tagline: e.target.value })} />
                            </div>

                        </ModalBody>
                        <ModalFooter display='flex' justifyContent='space-between'>
                            <Button type='submit' onClick={onClose} my={2} bg='antiquewhite' fontSize='18px'>Update user</Button>
                            <Button colorScheme='red' mr={3} onClick={onClose}>
                                Close
                            </Button>
                            {/* <Button variant='ghost'>Secondary Action</Button> */}
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>

        </div>
    )
}

export default EditData
