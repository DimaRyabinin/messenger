import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';


type TStyledView = {
  link: string
};

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

const LinkTo = styled(NavLink)`
  &.onClick {
    animation: ${ShadowText} 0.3s linear 1;
  }
  margin-top: 20px;

  border-radius: 5px;
  cursor: pointer;
  outline: none;
  border: none;

  color: #DDDDDD;
  text-align: center;
  font-family: 'Nunito', sans-serif;
  font-size: 25px;
  font-weight: 400;
  text-decoration: none;

  transition-duration: 0.3s;
  &:hover {
    color: #BB7070
  }
`;

const handleClick = event => {
  const element = event.target
  event.target.classList.add('onClick');
  setTimeout(function() {
    element.classList.remove('onClick');
  }, 500)
};

interface LinkProps {
  content: string;
  link: string;
}


const Link: React.FC<LinkProps> = props => (
  <LinkTo onClick={(event) => handleClick(event)} to={props.link}>{props.content}</LinkTo>
)

export default Link;