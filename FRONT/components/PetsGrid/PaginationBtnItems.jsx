import { background, Circle, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const PaginationBtnItems = ({ changePage, actualPage, number }) => {
  return (
    <Circle
      as="button"
      onClick={() => changePage(number)}
      size="40px"
      bgColor={useColorModeValue(
        actualPage === number ? "#a2a4a6" : "gray.200",
        actualPage === number ? "#283954" : "#111721"
      )}
    >
      {number}
    </Circle>
  );
};

export default PaginationBtnItems;
