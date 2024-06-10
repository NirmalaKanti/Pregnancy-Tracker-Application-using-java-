//App.js

import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const steps = [
	{
		id: '0',
		message: 'Hey Geek!',

		// This calls the next id
		// i.e. id 1 in this case
		trigger: '1',
	}, {
		id: '1',

		// This message appears in
		// the bot chat bubble
		message: 'Please write your username',
		trigger: '2'
	}, {
		id: '2',

		// Here we want the user
		// to enter input
		user: true,
		trigger: '3',
	}, {
		id: '3',
		message: " Hi {previousValue}, how can I help you?",
		trigger: 4
	}, {
		id: '4',
		options: [

			// When we need to show a number of
			// options to choose we create alist
			// like this
			{ value: 1, label: 'View Courses' },
			{ value: 2, label: 'Read Articles' },

		],
		end: true
	}
];

// Creating our own theme
const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#EF6C00',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#EF6C00',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };
  

// Set some properties of the bot
const config = {
	botAvatar: "https://cdn2.iconfinder.com/data/icons/artificial-intelligence-173/128/chatbot-AI-chat_bubble-chat-robotics-robot-communication-256.png",
	floating: true,
};

function Chatbot() {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<ChatBot

					// This appears as the header
					// text for the chat bot
					headerTitle="ChatBot"
					steps={steps}
					{...config}

				/>
			</ThemeProvider>
		</div>
	);
}

export default Chatbot;
