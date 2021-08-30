import { MessageContainer, MessageText } from "./styles";

export const Message = ({ message }) => (
  <MessageContainer>
    <MessageText>{message}</MessageText>
  </MessageContainer>
)