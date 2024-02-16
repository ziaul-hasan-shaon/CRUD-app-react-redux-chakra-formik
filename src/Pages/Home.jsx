/* eslint-disable no-unused-vars */
import { Box, Button, Heading, Text } from '@chakra-ui/react'
import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <Box>
            <Box maxW='400px' mx='auto' mt='50px' textAlign='center' py={8} px={5} bg='purple.400' boxShadow='xl' borderRadius='lg'>
                <Heading fontSize='28px' color='antiquewhite' my={4}>{moment().format('dddd')}</Heading>
                <Heading fontSize='28px' color='antiquewhite' my={4}>{moment().format('MMMM Do YYYY')}</Heading>
                <Heading fontSize='28px' color='antiquewhite' my={4}>{moment().format('LTS')}</Heading>
            </Box>
            <Box maxW='600px' mx='auto' my='60px' textAlign='center'>
                <Heading fontSize={40} fontWeight="bold" color='purple.400' my={10}>Welcome to Users CRUD App</Heading>
                <Text fontSize={24} fontWeight={500} my={5}>In this app You can add delete and edit user</Text>
                <Text fontSize={16}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem fugit, error dolore eos nesciunt iure sed assumenda atque facere quisquam labore, at tempora delectus facilis soluta officiis nisi cupiditate obcaecati eum possimus, quia nobis? Quasi optio dicta dolor perspiciatis quos minus odit. Veniam ad repellendus architecto neque placeat est mollitia?</Text>
                <Box my={10} display='flex' gap={10} justifyContent='center'>
                    <Link to='/display'>
                        <Button py={5} px={8} bg='purple.400' color='white' borderRadius='lg'>Explore</Button>
                    </Link>
                    <Link to='/addData'>
                        <Button py={5} px={8} bg='purple.400' color='white' borderRadius='lg'>Add User</Button>
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}

export default Home
