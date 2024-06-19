import React from 'react';
import logo from './logo.svg';
import './App.css';
import messages from './components/messages.json'
import MessageHistory from './components/MessageHistory';

const App:React.FC = () => {
  return (
    <div className="clearfix container">
    <div className="chat">
      <div className="chat-history">
        {messages.map((obj) => (
          <MessageHistory key={obj.id} {...obj}/>
        ))}
      </div>
    </div>  
  </div>
  );
}

export default App;
