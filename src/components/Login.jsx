'use client';

import React, { useState } from 'react';

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [ipError, setIpError] = useState('');

  const VALID_USERNAME = process.env.REACT_APP_VALID_USERNAME;
  const VALID_PASSWORD = process.env.REACT_APP_VALID_PASSWORD;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate IP check
    const userIp = '192.168.1.1'; // Replace with actual IP check logic
    const allowedIp = '192.168.1.1'; // Replace with actual allowed IP

    if (userIp !== allowedIp) {
      setIpError('Доступ запрещен из вашей сети');
      setIsLoading(false);
      return;
    }

    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      // Сохраняем информацию о входе в localStorage
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', username);
      onLoginSuccess();
    } else {
      setError('Неверное имя пользователя или пароль');
    }
    setIsLoading(false);
  };



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-2 text-center">Вход в систему</h1>
        <p className="text-center text-gray-600 text-sm mb-6">Контактные номера магазинов</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Имя пользователя
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Пароль
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
