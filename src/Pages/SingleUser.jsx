/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Box, Button, Card, CardBody, CardFooter, CardHeader, HStack, Heading, Image, SimpleGrid, Text, useDisclosure } from '@chakra-ui/react'
import EditData from './EditData'

function SingleUser({user, handleDelete}) {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const { id, name, email, password, confirm, address, tagline } = user

    return (
        <Card key={id} bg='purple.300'>
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
                <Button onClick={onOpen} bg='antiquewhite'>Edit Data</Button>
                <Button onClick={() => handleDelete(id)} bg='red.500'>Delete user</Button>
            </CardFooter>
            {/* <AddModal ></AddModal> */}
            <EditData isOpen={isOpen} onClose={onClose} id={id}></EditData>
        </Card>
    )
}

export default SingleUser
