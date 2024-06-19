type MessageProps = {
	text: string;
	from: {
		name: string
	};
	time: string;
  }

const Message = ({text, from, time}: MessageProps) => {
	return (
		<li>
    <div className="message-data">
      <span className="message-data-time">{time}</span> &nbsp; &nbsp;
      <span className="message-data-name">{from.name}</span>
      <i className="fa fa-circle me"></i>
    </div>
	<div className="message my-message">
      {text}
    </div>
  </li>

	)
}
export default Message