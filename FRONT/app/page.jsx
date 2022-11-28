'use client'
import { Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import SinglePet from '../components/SinglePet/SinglePet'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../redux/slices/usersSlice'
import { fetchPets } from '../redux/slices/petsSlice'

const page = () => {
  const user = useSelector((state) => state.users.users, shallowEqual);
  const pets = useSelector((state) => state.pets.pets, shallowEqual);
  const loading = useSelector((state) => state.ui.loading);

  console.log({loading})

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUsers({limit: 10, offset: 5}));
    dispatch(fetchPets({limit: 20, offset: 0}))
  }, [])
  console.log({user, pets})

  return (
    <Flex w="100%" mt="60px" pos="relative">
        Principal 
        <SinglePet/>
    </Flex>
  )
}

export default page
