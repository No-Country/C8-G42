import Message from "./Message";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useEffect } from "react";
import { fetchChats } from "../../../../redux/slices/messangerSlice";
import socket from "../../../../utils/socket";
import { Box, Stack } from "@chakra-ui/react";

const MessageContainer = ({ shelter }) => {
  const user = useSelector((state) => state.user.user, shallowEqual);
  const chat = useSelector((state) => state.messenger[shelter.id], shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.id) {
      if (chat === undefined ) {
        dispatch(
          fetchChats({
            userId: socket.id,
            shelterId: shelter.id,
            limit: 40,
            offset: 0,
          })
        );
      }
    }
  }, []);
  if(chat !== undefined){
    return (
      <Stack>
        {chat?.map((message) => (
          <Box key={message.id} display="flex" justifyContent={message.modifiedBy === user.role ? "end" : "start"} >
            <Message message={message} />
          </Box>
        ))}
      </Stack>
    );
  }
};

export default MessageContainer;
