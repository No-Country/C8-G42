'use client';
import { Flex } from '@chakra-ui/react';
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
          // console.log('la respuesta que se recibio fue', response);
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

  return (
    <Flex w="100%" mt="60px" pos="relative" direction="column">
      {/* Principal  */}      
      {pets && <PetsGrid pets={pets} />}
    </Flex>
  );
};

export default page;
