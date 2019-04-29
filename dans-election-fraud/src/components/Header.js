import React from 'react';
import styled from 'styled-components';

const HeaderStyles = styled.div`
  text-align: center;
  color: palevioletred;
  font-size: 60px;
  border: solid 3px purple;
  border-radius: 5px;
  color: darkblue;
  margin: 1em;
  padding: 0.25em 1em;
  background-color: white;
`;

function Header() {
  return (
    <div>
      <HeaderStyles>Australian Election Fraud Federal 2019</HeaderStyles>  
    </div>        
  )    
}


export default Header;
