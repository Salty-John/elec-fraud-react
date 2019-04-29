import React from 'react';
import styled from 'styled-components';

const WeChatFraudStyles = styled.div`
  text-align: left;
  color: palevioletred;
  font-size: 40px;
  color: #444666;
  margin: 1em; 
`;

const H4Styles = styled.div`
  text-align: left;
  color: palevioletred;
  font-size: 20px;
  color: #444666;
  margin: 2em; 
`

function WeChatFraud() {
  return (
    <div>
      <WeChatFraudStyles>WeChat Electoral Fraud directed at Chinese Voters</WeChatFraudStyles>
      <H4Styles>Homophobic misinformation fraud against Labor on WeChat. Glady Liu did this 
        same tactic in 2016 and got away with it. This in fact influenced the Chinese 
        vote and won them a seat and she is trying to win herself a seat the same way.</H4Styles>   
    </div>        
  )    
}

export default WeChatFraud;
