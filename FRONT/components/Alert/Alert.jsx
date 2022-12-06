import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { setMessage, setState } from "../../redux/slices/uiSlice";

const MyAlert = () => {
  const state = useSelector((state) => state.ui.state, shallowEqual);
  const message = useSelector((state) => state.ui.message, shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    setTimeout(() => {
      dispatch(setState(null));
      dispatch(setMessage(""))
    }, 10000)
  }, [state, message])

  if(state) {
  return (
    <Alert
      status={state}
      top="16"
      variant='solid'
      position="fixed"
      
    >
      <AlertIcon />
      <AlertTitle> {state} </AlertTitle>
      <AlertDescription> {message} </AlertDescription>
    </Alert>
  );
  }
};

export default MyAlert;
