import * as React from 'react';
import styled from 'styled-components';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { CheckOutlined } from '@ant-design/icons';

const checkOne = require('../../assets/images/checkOne.svg');
const checkTwo = require('../../assets/images/checkTwo.svg');



const MessageWrap = styled.span`
  display: inline-block;

  max-width: 380px;

  background-color: #205E97;
  border-radius: 20px;
`;

const MessageText = styled.span`
  margin: 0;

  padding: 10px 30px 10px 15px;
  display: inline-block;

  font-size: 16px;
  font-family: 'Nunito', sans-serif;
  color: #dddddd;
  font-weight: 300;
`;


const Date = styled.div`
  margin-top: 5px;
  margin: 5px 0px 0px 0px;

  font-size: 14px;
  font-family: 'Nunito', sans-serif;
  color: rgba(221, 221, 221, 0.4);
  font-weight: 300;
  text-align: left;
`;

const Wrapper = styled.div`
  margin-right: 30px;

  display: inline-block;
  max-width: 380px;
`;

const Wrap = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Block = styled.div`

`;




// type IconStyles = {
//   checkOne?: any;
//   src?: any;
// }

// let Icon = styled.img.attrs({
//   src: checkOne
// })<IconStyles>`
//   margin-left: 10px;
// `;

// let Icon = styled.img.attrs({
//   src: {checkOne}
// })`
//     margin-left: 10px;
//   `;

interface MessageProps {
  text: string;
  date: any;
  isMy: boolean;
}

const Message: React.FC<MessageProps> = ({text, date, isMy}) => {
  // if (isMy !== true) { Icon = styled.span``; }

  return (
    <Wrapper>

      <Wrap>
        <MessageWrap>
          <MessageText>{text}</MessageText>
        </MessageWrap>
        <CheckOutlined style={{color: '#149DD8', marginLeft: '10px'}} />
      </Wrap>

      <Date>{formatDistanceToNow(date, {addSuffix: true})}</Date>
    </Wrapper> 
  )
}

export default Message;