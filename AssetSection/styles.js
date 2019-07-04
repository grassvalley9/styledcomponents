import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  background: blue;
  font-size: 16px;
  border-radius: 3px;
  color: palevioletred;
    margin-left: auto;
    margin-right: auto;
    display: block;
 
  padding: 10px;
  transition: 0.5s all ease-out;

  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;