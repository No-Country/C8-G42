import Message from "./Message";
import { Box, Stack } from "@chakra-ui/react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchChat } from "../../../../redux/slices/messangerSlice";

const MessageContainer = ({ shelter }) => {
  const user = useSelector((state) => state.user.user, shallowEqual);

  const chat = useSelector(
    (state) => state.messenger[shelter.id],
    shallowEqual
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (user?.id) {
      if (chat === undefined) {
        dispatch(
          fetchChat({
            userId: user.id,
            shelterId: shelter.id,
            limit: 40,
            offset: 0,
          })
        );
      }
    }
  }, [shelter, chat, dispatch, user.id]);

  if (chat !== undefined) {
    return (
      <Stack >
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
