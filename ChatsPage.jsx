import {MultiChatSocket,MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'


const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
      'b5ea7493-5e73-451d-a620-3fd846746d66',
      props.user.username,
      props.user.secret
      );
  return(
      <div style={{height: '100vh'}}>
          <MultiChatSocket{...chatProps}/>
          <MultiChatWindow{...chatProps} style={{height: '100%'}}/>
      </div>
  )
}

export default ChatsPage