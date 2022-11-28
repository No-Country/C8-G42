import React, { useEffect } from "react";
import SinglePet from "../SinglePet/SinglePet";
import { Wrap, WrapItem, Center } from "@chakra-ui/react";
import PetCard from "../PetCard/PetCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchPets } from "../../redux/slices/petsSlice";

const PetsGrid = () => {
  const pets = useSelector((state) => state.pets.pets);
  const isLoading = useSelector((state) => state.ui.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPets({ limit: 20, offset: 0 }));
  }, []);

  return (
    <>
      <div>Listado de Mascotas para adopción:</div>
      {isLoading ? (
        <>Loading</>
      ) : (
        <Wrap>
          {pets?.data?.pets?.map((pet) => {
            return (
              <WrapItem key={pet.id}>
                {/* <Center w='280px' h='380px' bg='green.200'>                                     */}
                <PetCard pet={pet} />
                {/* </Center> */}
              </WrapItem>
            );
          })}
        </Wrap>
      )}
    </>
  );
};

export default PetsGrid;
