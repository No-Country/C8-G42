import React from 'react';
import Image from "next/image";
import { Card, CardHeader, CardBody, CardFooter, Stack, Divider, ButtonGroup, Heading, Button, Text } from '@chakra-ui/react';


const PetCard = ({ pet }) => {
    return (
        <>
            <Card maxW='sm'>
                <CardBody>
                    <Image
                        src={`${pet.image}?random=${pet.id}`}
                        alt=''
                        width={400} height={200}
                        borderradius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{pet.name}, tamaño: {pet.size}</Heading>
                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eius accusantium repudiandae possimus voluptatem dignissimos, ipsam, repellat quam distinctio quos ipsum fugit, laudantium iste reprehenderit magni omnis sed porro tempora?
                            oluptatibus.
                        </Text>
                        <Text color='blue.600' fontSize='1xl'>
                            Ver más...
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                            Adóptame
                        </Button>
                        <Button variant='ghost' colorScheme='blue'>
                            ❤
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card></>

    );
};

export default PetCard;