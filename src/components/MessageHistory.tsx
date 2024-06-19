import Message from './Message';
import Response from './Response'
import Typing from './Typing'

type MessageHistoryProps = {
	id: string,
	from: {name: string},
	type: string,
	time: string,
	text?: string
}

const MessageHistory = ({id, from, type, time, text}: MessageHistoryProps) => {
	const messageText = text || "";
	return (
		<ul>
  			{type === 'message' && <Message text={messageText} from={from} time={time} />}
			{type === 'response' && <Response text={messageText} from={from} time={time} />}
			{type === 'typing' && <Typing />}
		</ul>
	)
}

export default MessageHistory