import React, { useState } from 'react';

function CopyButton({ textToCopy, isDarkMode }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setTimeout(() => alert('Текст скопирован!'), 500);;
      })
      .catch(err => {
        console.error('Ошибка при копировании: ', err);
      });
  };

  return (
    <button
      onClick={handleCopy}
      className={`px-2 py-1 ml-2 text-xs rounded ${
        isDarkMode
          ? 'bg-blue-600 hover:bg-blue-700 text-white'
          : 'bg-blue-100 hover:bg-blue-200 text-blue-800'
      }`}
    >
      {textToCopy}
    </button>
  );
}

export default CopyButton;