import * as React from 'react';
import styled from 'styled-components';
import ButtonComponent from './common/ButtonComponent';
import LoginBlock from './LoginBlock';
import InputComponent from './common/InputComponent';
import Link from './common/Link';



const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 30px;
  font-weight: 300;
  color: #DDDDDD;
  font-family: 'Nunito', sans-serif;
`;

const SubTitle = styled.h5`
  margin: 5px 0px 20px 0px;

  font-size: 15px;
  font-weight: 300;
  color: rgba(221, 221, 221, 0.3);
  font-family: 'Nunito', sans-serif;
`;


const Authorization: React.FC = () => {
  return (
    <Section>
        <LoginBlock>
          <Title>sign in</Title>
          <SubTitle>please, sign in to your account</SubTitle>

          <InputComponent content='email' />
          <InputComponent content='password' />

          <ButtonComponent content='sign in' background='#359774' backgroundHover='#42A984' width='100%' height='49px' shadow='ShadowButton' />
          <Link content='login in' link='/registration' />
        </LoginBlock>
    </Section>
  )
}

export default Authorization;