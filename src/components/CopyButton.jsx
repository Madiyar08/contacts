import React, { useState } from 'react';

const CopyButton = ({ textToCopy }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1000); // Reset "Copied" message after 2 seconds
      })
      .catch(err => console.error('Failed to copy text: ', err));
  };

  return (
    <div className="mt-4">
      <button
        onClick={handleCopyClick}
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 rounded ${copied ? 'bg-green-500' : ''}`}
      >
        {copied ? 'Copied!' : `${textToCopy}`}
      </button>
    </div>
  );
};

export default CopyButton;
