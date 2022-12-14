import "./chat.css"
import ChatOnline from "./ChatOnline/ChatOnline"
import Conversation from "./Conversation/Conversation"
import Message from "./Message/Message"

export default function Chat() {
  
  
    return (
    <>
    <div className="chat">
        <div className="chatMenu">
            <div className="chatMenuWrapper">
                <input placeholder="Buscar" className="chatMenuInput"/>
                <Conversation/>
                <Conversation/>
                <Conversation/>
                <Conversation/>
            </div>
        </div>
        <div className="chatBox">
            <div className="chatBoxWrapper">
                <div className="chatBoxTop">
                    <Message/>
                    <Message own={true}/>
                    <Message/>
                    <Message/>
                    <Message own={true}/>
                    <Message/>
                    <Message/>
                    <Message own={true}/>
                    <Message/>
                    <Message/>
                    <Message own={true}/>
                    <Message/>
                    <Message/>
                    <Message own={true}/>
                    <Message/>
                </div>
                <div className="chatBoxBottom">
                    <textarea className="chatMessageInput" placeholder="Escribe algo..." ></textarea>
                    <button className="chatSubmitButton">Enviar</button>
                </div>
            </div>
        </div>
        <div className="chatOnline">
        <div className="chatOnlineWrapper">
            <ChatOnline/>
        </div>
        </div>
    </div>
    </>
  )
}
