import React from 'react';
import Image from "next/image";
import { Card, CardHeader, CardBody, CardFooter, Stack, Divider, ButtonGroup, Heading, Button, Text, Flex } from '@chakra-ui/react';


const PetCard = ({ pet }) => {
    return (
            <Card>
                <CardBody>
                    <Image
                        src=""
                        alt=''
                        w="100%"
                        borderRadius='lg'
                    />
                    <CardFooter>
                    <Flex>
                        <Heading size='md'>Nombre</Heading>  
                    </Flex>
                    </CardFooter>
                </CardBody>
            </Card>

    );
};

export default PetCard;