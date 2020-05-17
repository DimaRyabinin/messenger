import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 10px 20px 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #11171D;
  border-radius: 10px;
  box-shadow: 0px 0px 7px 7px rgba(0, 0, 0, 0.25);

  width: 100%;
  max-width: 400px;
`;

const LoginBlock: React.FC = ({children}) => {
  return (
    <Wrapper>{children}</Wrapper>
  )
}

export default LoginBlock;