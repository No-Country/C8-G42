'use client'
import { Flex, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'; 
import PetsGrid from '../components/PetsGrid/PetsGrid';
// import SinglePet from '../components/SinglePet/SinglePet';
import { fetchPets } from '../utils/api';

const page = () => {
const [pets, setPets] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {

    const getPets = async () => {
      setIsLoading(true);
      await fetchPets(
        (response) => {
          setPets(response.data.data.pets);
          setIsLoading(false);
        },
        (error) => {
          console.error('Error fetching Pets:', error);
          setIsLoading(false);
        }
      );
    };

    getPets();
  }, []);
 
  if (isLoading) {
    return (
      <Flex w="100%" h="100vh" justify="center" align="center">
        <Text color='blue.600' fontSize='3xl'>
          LOADING...
        </Text>
      </Flex>
    );
  }  

  return (
    <Flex w="100%" mt="60px" pos="relative" direction="column">
      <PetsGrid /* pets={pets} */ /> 
    </Flex>
  );
};

export default page;

