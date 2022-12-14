import Message from "./Message";
import { Box, Stack } from "@chakra-ui/react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { addMessage, fetchChat } from "../../../../redux/slices/messangerSlice";

const MessageContainer = ({ userId, shelterId }) => {
  const user = useSelector((state) => state.user.user, shallowEqual);
  const bottomRef = useRef(null);

  const chat = useSelector(
    (state) => state.messenger.chats[`${shelterId}${userId}`],
    shallowEqual
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (chat === undefined) {
      dispatch(
        fetchChat({
          userId,
          shelterId,
          limit: 40,
          offset: 0,
        })
      );
    }
  }, [ userId, shelterId ]);

  useEffect(() => {
    bottomRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  useEffect(() => {
    bottomRef?.current?.scrollIntoView({ behavior: "auto" });
  }, []);


  if (chat !== undefined) {
    return (
      <Stack>
        {chat?.map((message) => (
          <Box
            key={message.id}
            display="flex"
            justifyContent={message.modifiedBy === user.role ? "end" : "start"}
          >
            <Message message={message} />
          </Box>
        ))}
        <div ref={bottomRef}></div>
      </Stack>
    );
  }
};

export default MessageContainer;
