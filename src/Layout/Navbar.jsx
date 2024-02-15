/* eslint-disable no-unused-vars */
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Container, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <Container maxW="100%" bg="purple.400" p={5}>
            <Breadcrumb spacing='20px' display="flex" justifyContent="center" separator={<ChevronRightIcon h={12} w={12} color='white' />}>
                <BreadcrumbItem>
                    <Link to='/'>
                        <Text fontSize="20px" fontWeight={500} color="white">Home</Text>
                    </Link>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <Link to='/display'>
                        <Text fontSize="20px" fontWeight={500} color="white">All Users</Text>
                    </Link>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <Link to='/addData'>
                        <Text fontSize="20px" fontWeight={500} color="white">Add User</Text>
                    </Link>
                </BreadcrumbItem>
            </Breadcrumb>
        </Container>
    )
}

export default Navbar
