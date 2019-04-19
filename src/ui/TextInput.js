import styled from "styled-components";

const TextInput = styled.input`
  font-size: 1rem;
  border: 2px solid ${props => props.theme.colors[props.error ? "red" : "gray"]};
  border-radius: 0.375rem;
  outline: 0;
  padding: 0rem 0.7rem;
  height: 3rem;
  width: 100%;
`;

export default TextInput;
