import styled from "styled-components";

const FormControlLabel = styled.div`
  background: ${props => props.theme.colors.lightGray};
  color: ${props => props.theme.colors.red};
  border: none;
  padding: 0.75rem 1.125rem;
`;

export default FormControlLabel;
