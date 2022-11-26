'use client'

import Image from 'next/image'
import bgimage from './assets/bgimage.png'
import catImage from './assets/cat.png'
import { Center, Flex, Input, Button, Text, Link, InputGroup, InputRightElement } from '@chakra-ui/react'
import { useState } from 'react'
import ReactLoading from 'react-loading'

function LoginPage() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [show, setShow] = useState(false)

  const handleShowPass = () => setShow(!show)
  const handleEmailChange = (e) => setEmail(e.target.value)
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
        body: JSON.stringify({ email, password }),
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
          <Image src={bgimage} className="cover" priority alt="heading" />
        </Center>
        <Center>
          <Flex gap={14} p={6} justifyContent="center" alignItems="center" pos="relative" direction="column">
            <Text fontSize='3xl'>Ingresar</Text >
            {loading ? 
              <ReactLoading type="spin" color="#AEC3B0"/>
              :
              <>
                <Flex pos="absolute" top="47px" left="220px">
                  <Image src={catImage} priority width="100" alt="heading" />
                </Flex>
                <form>
                  <Flex direction="column" gap={3} bgColor="#AEC3B0" p={7} pb={3} borderRadius={6}>
                    <Flex direction="column">
                      <Text fontSize='xl'>Email</Text>
                      <Input onChange={handleEmailChange} placeholder="example@gmail.com" type="email" variant='outline' bgColor="white" border="none" borderRadius={4} p={6}></Input>
                    </Flex>
                    <Flex direction="column">
                      <Text fontSize='xl'>Contraseña</Text>
                      <InputGroup size='md' >
                        <Input onChange={handlePasswordChange} type={show ? 'text' : 'password'} placeholder="Contraseña" variant='outline' bgColor="white" border="none" borderRadius={4} p={6}/>
                        <InputRightElement width='4.5rem'>
                          <Button h='1.75rem' size='sm' onClick={handleShowPass}>
                            {show ? 'Hide' : 'Show'}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    </Flex>
                    <Button onClick={handleSubmit} colorScheme="teal" alignSelf="center"  w="50%" color="white" bgColor="#283D3B" h={30} borderRadius={6} border={0}>Enviar</Button>
                    <Text m={0} alignSelf="center" fontSize='13px'>Aun no tienes cuenta? <Link  href="/register" textDecoration="underline">Regístrate aquí</Link></Text>
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

export default LoginPage;