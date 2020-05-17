import * as React from 'react';
import styled from 'styled-components';



const Input = styled.input`
  margin-bottom: 20px;
  padding-bottom: 5px;
  width: 100%;
  max-width: 300px;

  background: transparent;

  outline: none;
  border: none;

  color: #dddddd;
  font-family: 'Nunito', sans-serif;
  font-size: 18px;
  font-weight: normal;
  border-bottom: 1px solid #dddddd;
  transition-duration: 0.3s;
  &:focus {
    border-bottom: 1px solid #359774;
  };
  &::-webkit-input-placeholder       {opacity: 1; transition: opacity 0.3s ease;}
  &:focus::-webkit-input-placeholder {opacity: 0; transition: opacity 0.3s ease;}
`;

interface InputProps {
  content: string;
}

const InputComponent: React.FC<InputProps> = props => <Input placeholder={props.content}/>

export default InputComponent;