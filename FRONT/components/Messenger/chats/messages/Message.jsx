import { Text } from "@chakra-ui/react";

const Message = (message) => {
  return (
    <>
      <Text
        borderRadius="md"
        padding="2"
        bg="green.500"
        maxW="85%"
        fontSize="md"
        display="flex"
      >
        {message.message.text}
      </Text>
    </>
  );
};

export default Message;
