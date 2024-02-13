import styled from "styled-components/native";

export const StyledInput = styled.TextInput<{ isFocus: boolean }>`
  width: 100%;
  height: 63px;
  background-color: red;
  border-radius: 15px;
  background-color: #f2f3f7;
  font-size: 16px;
  color: #3f414e;
  margin-top: 20px;
  padding: 0 20px;
  border: ${({ isFocus }) => (isFocus ? "2px solid #F5C371" : "")};
`;
