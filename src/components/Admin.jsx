import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlus, faTrash, faSave, faEdit, 
  faLanguage, faCheck, faTimes 
} from '@fortawesome/free-solid-svg-icons';

export default function Admin() {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState({ title: '', icon: '' });
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [newContent, setNewContent] = useState({ uzbek: '', russian: '' });
  const [editingCategory, setEditingCategory] = useState(null);

  useEffect(() => {
    const savedCategories = localStorage.getItem('categories');
    if (savedCategories) {
      setCategories(JSON.parse(savedCategories));
    }
  }, []);

  const saveToLocalStorage = (updatedCategories) => {
    localStorage.setItem('categories', JSON.stringify(updatedCategories));
    setCategories(updatedCategories);
  };

  const handleAddCategory = () => {
    if (!newCategory.title.trim()) return;
    
    const updatedCategories = [...categories, {
      id: Date.now().toString(),
      title: newCategory.title,
      icon: newCategory.icon || 'faFolder',
      contents: []
    }];
    
    saveToLocalStorage(updatedCategories);
    setNewCategory({ title: '', icon: '' });
  };

  const handleDeleteCategory = (categoryId) => {
    if (window.confirm('Вы уверены, что хотите удалить эту категорию?')) {
      const updatedCategories = categories.filter(c => c.id !== categoryId);
      saveToLocalStorage(updatedCategories);
    }
  };

  const handleAddContent = () => {
    if (!selectedCategory || !newContent.uzbek.trim() || !newContent.russian.trim()) return;

    const updatedCategories = categories.map(category => {
      if (category.id === selectedCategory) {
        return {
          ...category,
          contents: [...category.contents, {
            id: Date.now().toString(),
            uzbek: newContent.uzbek,
            russian: newContent.russian
          }]
        };
      }
      return category;
    });

    saveToLocalStorage(updatedCategories);
    setNewContent({ uzbek: '', russian: '' });
  };

  const handleDeleteContent = (categoryId, contentId) => {
    const updatedCategories = categories.map(category => {
      if (category.id === categoryId) {
        return {
          ...category,
          contents: category.contents.filter(content => content.id !== contentId)
        };
      }
      return category;
    });

    saveToLocalStorage(updatedCategories);
  };

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      {/* Добавление новой категории */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <FontAwesomeIcon icon={faPlus} className="text-green-600" />
          Добавить новую категорию
        </h2>
        <div className="flex gap-4">
          <input
            type="text"
            value={newCategory.title}
            onChange={(e) => setNewCategory({ ...newCategory, title: e.target.value })}
            placeholder="Название категории"
            className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={handleAddCategory}
            className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faPlus} />
            Добавить
          </button>
        </div>
      </div>

      {/* Добавление нового контента */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <FontAwesomeIcon icon={faLanguage} className="text-blue-600" />
          Добавить новый контент
        </h2>
        <div className="space-y-4">
          <select
            value={selectedCategory || ''}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Выберите категорию</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.title}
              </option>
            ))}
          </select>
          <textarea
            value={newContent.uzbek}
            onChange={(e) => setNewContent({ ...newContent, uzbek: e.target.value })}
            placeholder="Текст на узбекском"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
          />
          <textarea
            value={newContent.russian}
            onChange={(e) => setNewContent({ ...newContent, russian: e.target.value })}
            placeholder="Текст на русском"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
          />
          <button
            onClick={handleAddContent}
            className="w-full px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2 justify-center"
          >
            <FontAwesomeIcon icon={faPlus} />
            Добавить контент
          </button>
        </div>
      </div>

      {/* Управление существующими категориями */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <FontAwesomeIcon icon={faEdit} className="text-purple-600" />
          Управление категориями
        </h2>
        <div className="space-y-6">
          {categories.map(category => (
            <div key={category.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">{category.title}</h3>
                <button
                  onClick={() => handleDeleteCategory(category.id)}
                  className="px-3 py-1 text-red-600 hover:text-red-700 transition-colors"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
              <div className="space-y-4">
                {category.contents.map(content => (
                  <div key={content.id} className="bg-gray-50 p-4 rounded-md">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <p className="text-sm text-gray-600 mb-2">Узбекский:</p>
                        <p className="mb-2">{content.uzbek}</p>
                        <p className="text-sm text-gray-600 mb-2">Русский:</p>
                        <p>{content.russian}</p>
                      </div>
                      <button
                        onClick={() => handleDeleteContent(category.id, content.id)}
                        className="px-2 py-1 text-red-600 hover:text-red-700 transition-colors"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}