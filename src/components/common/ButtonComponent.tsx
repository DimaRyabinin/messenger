import * as React from 'react';
import styled, { keyframes } from 'styled-components';


type TStyledView = {
  background: string;
  backgroundHover: string;
  colorChange: string;
  width: string;
  height: string;
  margin: string;
  shadow: string;
};

const ShadowButton = keyframes`
  0% {
    box-shadow: none;
  }
  50% {
    box-shadow: 0 0 7px 5px #42A984;
  }
  100% {
    box-shadow: none;
  }
`;

const ShadowText = keyframes`
  0% {
    text-shadow: none;
  }
  50% {
    text-shadow: 1px 1px 16px #BB7070, -1px -1px 16px #BB7070;
  }
  100% {
    text-shadow: none;
  }
`;

const Button = styled.button<TStyledView>`
  &.onClick {
    animation: ${props => (props.shadow === 'ShadowButton') ? ShadowButton : ShadowText}  0.3s linear 1;
  }
  margin-top: ${props => props.margin};
  width: ${props => props.width};
  max-width: 300px;
  height: ${props => props.height};

  background: ${props => props.background};
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  border: none;

  color: #DDDDDD;
  text-align: center;
  font-family: 'Nunito', sans-serif;
  font-size: 25px;
  font-weight: 400;

  transition-duration: 0.3s;
  &:hover {
    background: ${props => props.backgroundHover};
    color: ${props => props.colorChange}
  }
`;

const handleClick = event => {
  const element = event.target
  event.target.classList.add('onClick');
  setTimeout(function() {
    element.classList.remove('onClick');
  }, 500)
};


interface ButtonProps {
  width?: string;
  height?: string;
  margin?: string;

  content: string;
  background: string;
  backgroundHover: string;
  colorChange?: string;
  shadow: string
}

const ButtonComponent: React.FC<ButtonProps> = (props) => (
  <Button
    background={props.background}
    backgroundHover={props.backgroundHover}
    colorChange={props.colorChange}
    width={props.width}
    height={props.height}
    margin={props.margin}
    shadow={props.shadow}

    onClick={(event) => handleClick(event)}
  >
    {props.content}
  </Button>
)

export default ButtonComponent;