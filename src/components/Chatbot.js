// App.js

import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

// Define a dictionary of questions and answers
const qaDictionary = {
  'What is gestation period?': 'The gestation period for humans is about 9 months.',
  'Is it safe to eat sushi during pregnancy?': 'It is generally recommended to avoid sushi with raw fish during pregnancy due to the risk of foodborne illnesses.',
  'How much weight should I gain during pregnancy?': 'Weight gain during pregnancy varies, but typically ranges from 25-35 pounds for women with a normal BMI.',
  'Can I exercise during pregnancy?': 'Yes, moderate exercise is generally safe and beneficial during pregnancy. However, you should consult with your healthcare provider for personalized advice.',
  'What foods should I avoid during pregnancy?': 'During pregnancy, avoid foods such as raw fish, undercooked meat, unpasteurized dairy, and deli meats to reduce the risk of foodborne illnesses.',
  'What are common symptoms of pregnancy?': 'Common symptoms of pregnancy include nausea, fatigue, frequent urination, and breast tenderness.',
  'Is it safe to travel during pregnancy?': 'Travel is generally safe during pregnancy, but it\'s best to consult with your healthcare provider, especially if you have any complications.',
  'Can I drink coffee during pregnancy?': 'It is recommended to limit caffeine intake during pregnancy to about 200 mg per day, which is roughly one 12-ounce cup of coffee.',
  'What are prenatal vitamins?': 'Prenatal vitamins are supplements that contain essential vitamins and minerals to support a healthy pregnancy. They typically include folic acid, iron, calcium, and DHA.',
  'When should I start taking prenatal vitamins?': 'It is recommended to start taking prenatal vitamins before conception and continue throughout pregnancy and breastfeeding.',
  'What is morning sickness?': 'Morning sickness refers to nausea and vomiting that many women experience during the first trimester of pregnancy. Despite its name, it can occur at any time of day.',
  'How often should I see my doctor during pregnancy?': 'Prenatal visits are typically scheduled every 4 weeks during the first 28 weeks, every 2 weeks until 36 weeks, and then weekly until delivery.',
  'What is a prenatal ultrasound?': 'A prenatal ultrasound is an imaging test that uses sound waves to create pictures of a baby in the womb. It helps monitor the baby\'s development and detect any potential issues.',
};

// Define the steps for the chatbot
const steps = [
  {
    id: '0',
    message: 'Hey Geek!',
    trigger: '1',
  },
  {
    id: '1',
    message: 'Please write your username',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: "Hi {previousValue}, how can I help you?",
    trigger: '4',
  },
  {
    id: '4',
    options: [
      { value: 'viewCourses', label: 'View Courses', trigger: 'viewCourses' },
      { value: 'readArticles', label: 'Read Articles', trigger: 'readArticles' },
      { value: 'askQuestion', label: 'Ask a Question', trigger: 'askQuestion' },
    ],
  },
  {
    id: 'viewCourses',
    message: 'Here are some courses you can check out: [List of courses]',
    end: true,
  },
  {
    id: 'readArticles',
    message: 'Here are some articles you might find interesting: [List of articles]',
    end: true,
  },
  {
    id: 'askQuestion',
    message: 'What question do you have?',
    trigger: 'userQuestion',
  },
  {
    id: 'userQuestion',
    user: true,
    trigger: 'handleQuestion',
  },
  {
    id: 'handleQuestion',
    message: ({ previousValue }) => {
      // Get the answer from the dictionary
      const answer = qaDictionary[previousValue] || 'Sorry, I do not understand your question.';
      return answer;
    },
    trigger: 'askAnotherQuestion',
  },
  {
    id: 'askAnotherQuestion',
    message: 'Do you have any other questions?',
    trigger: 'handleAnotherQuestion',
  },
  {
    id: 'handleAnotherQuestion',
    options: [
      { value: 'yes', label: 'Yes', trigger: 'askQuestion' },
      { value: 'no', label: 'No', trigger: 'endMessage' },
    ],
  },
  {
    id: 'endMessage',
    message: 'Thank you! Have a great day!',
    end: true,
  },
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
          headerTitle="ChatBot"
          steps={steps}
          {...config}
        />
      </ThemeProvider>
    </div>
  );
}

export default Chatbot;
