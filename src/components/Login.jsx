'use client';

import React, { useState, useEffect } from 'react';

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [ipError, setIpError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const ALLOWED_IP = process.env.REACT_APP_ALLOWED_IP;
  const VALID_USERNAME = process.env.REACT_APP_VALID_USERNAME;
  const VALID_PASSWORD = process.env.REACT_APP_VALID_PASSWORD;


  useEffect(() => {
  checkIP();
}, [checkIP]);


  const checkIP = async () => {
    try {
      // Пытаемся получить IP пользователя
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      const userIP = data.ip;
      
      console.log('[v0] User IP:', userIP, 'Allowed IP:', ALLOWED_IP);

      if (userIP !== ALLOWED_IP) {
        setIpError(`Доступ запрещен. Этот сайт доступен только с офиса. Ваш IP: ${userIP}`);
      }
    } catch (err) {
      console.error('[v0] Error checking IP:', err);
      setIpError('Ошибка при проверке IP адреса');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      // Сохраняем информацию о входе в localStorage
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', username);
      onLoginSuccess();
    } else {
      setError('Неверное имя пользователя или пароль');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="mb-4">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
          <p className="text-gray-600">Проверка доступа...</p>
        </div>
      </div>
    );
  }

  if (ipError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-red-50 to-red-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96 border-2 border-red-300">
          <div className="text-center mb-4">
            <div className="text-5xl mb-4">🚫</div>
            <h1 className="text-2xl font-bold text-red-600 mb-2">Доступ запрещен</h1>
            <p className="text-gray-700">{ipError}</p>
          </div>
          <div className="text-sm text-gray-500 mt-4 text-center">
            Пожалуйста, откройте эту страницу только с сети офиса.
          </div>
        </div>
      </div>
    );
  }

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
