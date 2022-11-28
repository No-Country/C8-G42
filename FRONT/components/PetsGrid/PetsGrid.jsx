import React, { useEffect } from 'react';
import SinglePet from '../SinglePet/SinglePet';
import { Wrap, WrapItem, Center } from '@chakra-ui/react';
import PetCard from '../PetCard/PetCard';


const PetsGrid = ({ pets }) => {
    console.log("pets:", pets);

    return (
        <>
            <div>Listado de Mascotas para adopción:</div>
            <Wrap>
                {
                    pets?.map(pet => {
                        return (
                            <WrapItem>
                                {/* <Center w='280px' h='380px' bg='green.200'>                                     */}
                                    <PetCard key={pet.id} pet={pet} />
                                {/* </Center> */}
                            </WrapItem>
                        );
                    })
                }
            </Wrap>
        </>
    );
};

export default PetsGrid;