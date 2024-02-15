/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import {Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text} from '@chakra-ui/react'

const AddModal =({isOpen, onClose}) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, velit incidunt sint assumenda ab vitae nam earum perspiciatis pariatur distinctio.</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
}

export default AddModal
