"use client";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import Image from 'next/image';
import React from "react";

const MyRequests = ({ requests }) => {
  return <TableContainer marginTop="20" >
  <Table colorScheme="blackAlpha" variant="simple" size='sm'>
    <Thead>
      <Tr>
        <Th>Image</Th>
        <Th>Name</Th>
        <Th>State</Th>
      </Tr>
    </Thead>
    <Tbody>
    {requests.map((request) =>
      <Tr>
        <Td><Image src={request.image} width={36} height={28} /></Td>
        <Td> {request.name} </Td>
        <Td> {request.Request?.status} </Td>
      </Tr>
    )}
    </Tbody>
  </Table>
</TableContainer>
};

export default MyRequests;
