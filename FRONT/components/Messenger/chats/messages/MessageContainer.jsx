import Message from "./Message";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchChats } from "../../../../redux/slices/messangerSlice";
import socket from "../../../../utils/socket";
import { Box, Stack } from "@chakra-ui/react";

const MessageContainer = ({ shelter }) => {
  // const IAm =
  const chat = useSelector((state) => state.messenger.chats);
  const dispatch = useDispatch();
  useEffect(() => {
    if (socket.id && chat.length < 1) {
      dispatch(
        fetchChats({
          userId: socket.id,
          shelterId: shelter.id,
          limit: 40,
          offset: 0,
        })
      );
    }
    console.log({ chat });
    console.log(chat);
  });
  return (
    <Stack>
      {chat.map((message) => (
        <Box key={message.id}  >
          <Message message={message} />
        </Box>
      ))}
    </Stack>
  );
  // if (!loading && chat.length > 0) {
  // }
};

export default MessageContainer;
