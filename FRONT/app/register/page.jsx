'use client'

import Image from 'next/image'
import bgimage from './assets/bgimage.png'
import dogImage from './assets/dog.png'
import { Center, Flex, Input, Button, Text, InputGroup, InputRightElement } from '@chakra-ui/react'
import { useState } from 'react'
import ReactLoading from 'react-loading'

function Page() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [show, setShow] = useState(false)

  const handleClick = () => setShow(!show)
  const handleEmailChange = (e) => setEmail(e.target.value)
  const handleNameChange = (e) => setName(e.target.value)
  const handlePasswordChange = (e) => setPassword(e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name, password }),
      })
      if (res.status === 200) {
        window.location.href = ''
      } else {
        setError('Invalid email or password')
      }
    } catch (err) {
      setError('Invalid email or password')
    }
    setLoading(false)
  }

  return (
    <div>
      <Flex direction="column">
        <Center bg='#EFF6E0' height="200px" overflow="hidden">
          <Image src={bgimage} className="cover" priority width="700" alt="heading" />
        </Center>
        <Center>
          <Flex gap={14} p={6} justifyContent="center" alignItems="center" pos="relative" direction="column">
            <Text fontSize='3xl'>Registrarse</Text >
            {loading ? 
              <ReactLoading type="spin" color="#AEC3B0"/>
              :
              <>
                <Flex position="absolute" left="230" top="16">
                  <Image src={dogImage} priority width="80" alt="heading" />
                </Flex>
                <form>
                  <Flex direction="column" gap={3} bgColor="#AEC3B0" p={7} borderRadius={6}>
                    <Flex direction="column">
                      <Text fontSize='xl'>Email</Text>
                      <Input onChange={handleEmailChange} placeholder="example@gmail.com" type="email" variant='outline' bgColor="white" border="none" borderRadius={4} p={6}></Input>
                    </Flex>
                    <Flex direction="column">
                      <Text fontSize='xl'>Nombre de usuario</Text>
                      <Input onChange={handleNameChange} placeholder="Nombre" type="name" variant='outline' bgColor="white" border="none" borderRadius={4} p={6}></Input>
                    </Flex>
                    <Flex direction="column">
                      <Text fontSize='xl'>Contraseña</Text>
                      <InputGroup size='md' >
                        <Input onChange={handlePasswordChange} type={show ? 'text' : 'password'} placeholder="Contraseña" variant='outline' bgColor="white" border="none" borderRadius={4} p={6} />
                        <InputRightElement width='4.5rem'>
                          <Button h='1.75rem' size='sm' onClick={handleClick}>
                            {show ? 'Hide' : 'Show'}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    </Flex>
                    <Button onClick={handleSubmit} colorScheme="teal" alignSelf="center" size="lg" w="50%" color="white" bgColor="#283D3B" h={30} borderRadius={6} border={0}>Enviar</Button>
                  </Flex>
                </form>
              </>
            }
          </Flex>
        </Center>
      </Flex>
    </div>
  );
}

export default Page;