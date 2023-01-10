import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from './Components/ChatFeed';
const App = () => {
  return (
    <div>
      <ChatEngine 
      height="100vh" 
      projectID="7e318785-e181-4213-9911-1b6b0ab0df12"
      userName="Abass"
     userSecret="123"
     renderChatFeed = {(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
     />
    </div>
  );
};

export default App;
