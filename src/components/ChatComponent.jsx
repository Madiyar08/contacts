import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaComments } from 'react-icons/fa';

export default function ChatComponent({ isDarkMode }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [userName, setUserName] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Здесь можно добавить логику для загрузки предыдущих сообщений
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    const messageData = {
      user: userName,
      message: newMessage,
      timestamp: new Date().toISOString(),
    };

    try {
      await axios.post('http://your-api-url/send-message', messageData);
      setMessages([...messages, messageData]);
      setNewMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`fixed bottom-4 right-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
      {!isOpen && (
        <button
          onClick={toggleChat}
          className={`p-4 rounded-full ${
            isDarkMode ? 'bg-gray-800 text-white' : 'bg-blue-500 text-white'
          } shadow-lg flex items-center justify-center`}
        >
          <FaComments className="w-6 h-6" />
        </button>
      )}
      {isOpen && (
        <div className={`w-80 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg rounded-lg overflow-hidden`}>
          <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-blue-500'} text-white p-4 flex justify-between items-center`}>
            <h3 className="text-lg font-semibold">Чат поддержки</h3>
            <button onClick={toggleChat} className="text-white">
              ✕
            </button>
          </div>
          <div className={`h-80 overflow-y-auto p-4 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
            {messages.map((msg, index) => (
              <div key={index} className="mb-2">
                <span className="font-bold">{msg.user}: </span>
                <span>{msg.message}</span>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className={`p-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Ваше имя"
              className={`w-full p-2 mb-2 border rounded ${
                isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-black border-gray-300'
              }`}
              required
            />
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Введите сообщение..."
              className={`w-full p-2 mb-2 border rounded ${
                isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-black border-gray-300'
              }`}
              required
            />
            <button
              type="submit"
              className={`w-full p-2 rounded ${
                isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'
              } text-white`}
            >
              Отправить
            </button>
          </form>
        </div>
      )}
    </div>
  );
}