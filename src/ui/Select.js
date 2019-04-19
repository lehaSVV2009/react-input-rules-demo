import styled from "styled-components";

const Select = styled.select`
  font-size: 1rem;
  height: 3rem;
  background-color: ${props => props.theme.colors.white};
  border: 2px solid ${props => props.theme.colors.gray};
  outline: 0;
  width: 100%;
`;

export default Select;
