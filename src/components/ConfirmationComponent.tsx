import * as React from 'react';
import styled from 'styled-components';
import { ExclamationCircleTwoTone } from '@ant-design/icons';
import LoginBlock from './LoginBlock';



const Title = styled.h1`
  margin: 0;
  margin-top: 30px;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 400;
  color: #2E8A5E;
  font-family: 'Nunito', sans-serif;
`;

const SubTitle = styled.h2`
  margin: 5px 0px 20px 0px;

  font-size: 15px;
  font-weight: 100;
  color: #2E8A5E;
  font-family: 'Nunito', sans-serif;
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;


const ConfirmationComponent: React.FC = () => {
  return (
    <Section>
      <LoginBlock>
        <ExclamationCircleTwoTone twoToneColor="#2DAF71" style={{fontSize: '75px', marginTop: '10px'}} />
        <Title>we sent a confirmation email to you</Title>
        <SubTitle>please, confirmation your email</SubTitle>
      </LoginBlock>
    </Section>
  )
}

export default ConfirmationComponent;