import React from 'react';
import styled from 'styled-components';

const LinkStyles = styled.div`
  text-align: left;
  color: palevioletred;
  font-size: 20px;
  color: #444666;
  margin: 2em;
  text-decoration: underline; 
`;

const H4Styles = styled.div`
  text-align: left;
  color: palevioletred;
  font-size: 20px;
  color: #444666;
  margin: 2em; 
  `

class SafeSchoolsLink extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);    
  }
  
  handleClick(event) {
    event.preventDefault();
    const mouseClick = event.nativeEvent.which;
    if (mouseClick === 1) {
      // Left mouse click - open in modal...
      window.location.replace('https://www.theage.com.au/federal-election-2019/safe-schools-scare-campaign-targets-chinese-australian-voters-20190427-p51hrk.html?fbclid=IwAR1s60Csw_T4QASUtuoYqxMTYPV1mdCLu8lIDS2O6a9JY5lv0CZaFtyOPRs')
    } else if (mouseClick === 3) {
      // Right mouse click - open in new tab...
      window.open('https://www.theage.com.au/federal-election-2019/safe-schools-scare-campaign-targets-chinese-australian-voters-20190427-p51hrk.html?fbclid=IwAR1s60Csw_T4QASUtuoYqxMTYPV1mdCLu8lIDS2O6a9JY5lv0CZaFtyOPRs');    
    }      
  }   
   
  render() {
    return (
       <div> 
      <LinkStyles>
        <a onClick={this.handleClick} onContextMenu={this.handleClick}>
        Safe Schools scare campaign targets Chinese-Australian voters
        </a>
        </LinkStyles>
        <H4Styles>A scare campaign falsely claiming Labor plans to 
            introduce school programs teaching students how to have 
            gay sex is being circulated on Chinese social media, in 
            the latest sign of "fake news" infiltrating the federal 
            election. The unauthorised post targeting voters on the popular 
            Chinese-language app WeChat uses well-worn myths about the 
            anti-bullying resource Safe Schools to urge people not to vote 
            for Bill Shorten.</H4Styles>
        </div>

    );    
  }
  }


export default SafeSchoolsLink;
