import React from 'react';
import Header from './components/Header';
import WeChatFraud from './components/WeChatFraud';
import SafeSchoolsLink from './components/SafeSchoolsLink';

const App = () => (
  <div className="App">
    <Header />
    <WeChatFraud />
    <SafeSchoolsLink />
  </div>
);

export default App;
