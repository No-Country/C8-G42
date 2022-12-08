import { Flex, Button, useDisclosure, Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchShelterPets } from '../../redux/slices/petSlice'
import CardPet from './CardPet'
import NewPet from './NewPet'

const PetsAdoption = () => { 
  const user = useSelector((state) => state.user.user)
  const shelterPets= useSelector((state)=> state.pet.shelterPets)
  
  const dispatch= useDispatch()
  useEffect(() => {
    if(user?.id){
    dispatch(fetchShelterPets({id:user.id, limit: 10, offset:0 })) 
    }
  }, [])
  
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
   <Flex mt="90px" direction="column">
   <Button ml="5px" bg="#AEC3B0" width="200px" onClick={onOpen}>Agregar Mascota</Button>
   <NewPet isOpen={isOpen} onClose={onClose}/>
   {/* <CardPet pets={shelterPets}/> */}
   </Flex>
  )
}


export default PetsAdoption;
