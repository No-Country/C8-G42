import React from 'react';
import Image from "next/image";
import juanito from './juanito.jpeg'
import { Card, CardHeader, CardBody, CardFooter, Stack, Divider, ButtonGroup, Heading, Button, Text, Flex } from '@chakra-ui/react';


const PetCard = ({ pet }) => {
    return (
            <Card maxW='sm'>
                <CardBody>
                    <Image
                        src={`${juanito}`}
                        alt=''
                        width={400} height={200}
                        borderRadius='lg'
                    />
                    <CardFooter>
                    <Flex>
                        <Heading size='md'>{pet.nombre}</Heading>
                        
                    </Flex>
                    </CardFooter>
                </CardBody>
            </Card>

    );
};

export default PetCard;