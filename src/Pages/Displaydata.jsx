/* eslint-disable no-unused-vars */
import { Box, Button, Card, CardBody, CardFooter, CardHeader, HStack, Heading, Image, SimpleGrid, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from '../app/features/userSlice'
import { Link } from 'react-router-dom'
import AddModal from './AddModal'
import EditData from './EditData'
import SingleUser from './SingleUser'

function DisplayData() {
    const users = useSelector(state => state.userReducer.users)
    // console.log(users)

    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteUser(id))
        // console.log('delete button clicked')
    }

    return (
        <div>
            <Heading my={10} textAlign='center' fontSize='36px'>All datas are displayed here</Heading>
            <SimpleGrid py={5} px={8} spacing={10} templateColumns='repeat(4, 1fr)'>
                {users.map((user) => {
                    return <SingleUser key={user.id} user={user} handleDelete={handleDelete}></SingleUser>
                })}
            </SimpleGrid>

        </div>
    )
}

export default DisplayData
