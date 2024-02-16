/* eslint-disable no-unused-vars */
import { Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

function Time() {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        setInterval(() => setTime(new Date()), 1000)
    },[])
    return (
        <Heading fontSize='28px' color='antiquewhite' my={4}>{time.toLocaleTimeString()}</Heading>
    )
}

export default Time
