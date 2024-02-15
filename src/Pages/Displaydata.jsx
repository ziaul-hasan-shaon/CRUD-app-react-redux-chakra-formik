/* eslint-disable no-unused-vars */
import { Box, Button, Card, CardBody, CardFooter, CardHeader, HStack, Heading, Image, SimpleGrid, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from '../app/features/userSlice'
import { Link } from 'react-router-dom'
import AddModal from './AddModal'
import EditData from './EditData'

function DisplayData() {
    const users = useSelector(state => state.userReducer.users)
    // console.log(users)

    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteUser(id))
        // console.log('delete button clicked')
    }

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <div>
            <Heading my={10} textAlign='center' fontSize='36px'>All datas are displayed here</Heading>
            <SimpleGrid py={5} px={8} spacing={10} templateColumns='repeat(4, 1fr)'>
                {users.map((user) => {
                    const { id, name, email, password, confirm, address, tagline } = user
                    return <Card key={id} bg='purple.300'>
                        <CardHeader textAlign='center'>
                            <Heading size='md'> {name}</Heading>
                        </CardHeader>
                        <CardBody>
                            <Box display='flex' justifyContent='center'>
                                <Image src='https://i.ibb.co/XW6hJs6/male.png'></Image>
                            </Box>
                            <Box my={5}>
                                <HStack my={2}>
                                    <Text fontSize='18px' fontWeight={600}>Email:</Text>
                                    <Text fontSize='16px'>{email}</Text>
                                </HStack>
                                <HStack my={2}>
                                    <Text fontSize='18px' fontWeight={600}>Address:</Text>
                                    <Text fontSize='16px'>{address}</Text>
                                </HStack>
                                <HStack my={2}>
                                    <Text fontSize='18px' fontWeight={600}>Tagline:</Text>
                                    <Text fontSize='16px'>{tagline}</Text>
                                </HStack>
                            </Box>
                        </CardBody>
                        <CardFooter display='flex' justifyContent="space-between">
                            <Link>
                                <Button onClick={onOpen} bg='antiquewhite'>Edit Data</Button>
                            </Link>
                            <Button onClick={() => handleDelete(id)} bg='red.500'>Delete user</Button>
                        </CardFooter>
                        {/* <AddModal ></AddModal> */}
                        <EditData isOpen={isOpen} onClose={onClose} state={user}></EditData>
                    </Card>
                })}
            </SimpleGrid>

        </div>
    )
}

export default DisplayData
