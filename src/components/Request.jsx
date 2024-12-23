import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHome, faLock, faBriefcase, faStar, 
    faCommentAlt, faEllipsisH, faGift, 
    faExchangeAlt, faEye, faCopy, faSignInAlt,
    faPlus, faTrash, faSave, faEdit, 
    faLanguage, faCheck, faTimes 
} from '@fortawesome/free-solid-svg-icons';
import { faFolder } from '@fortawesome/free-solid-svg-icons/faFolder';

const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'admin123';

export default function Request() {
    const [categories, setCategories] = useState([]);
    const [currentView, setCurrentView] = useState('categories');
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const [toast, setToast] = useState({ show: false, message: '' });
    const [isAdmin, setIsAdmin] = useState(false);
    const [newCategory, setNewCategory] = useState({ title: '', icon: '' });
    const [newContent, setNewContent] = useState({ uzbek: '', russian: '' });
    const [editingCategory, setEditingCategory] = useState(null);

    useEffect(() => {
        loadCategories();
    }, []);

    const loadCategories = () => {
        const savedCategories = localStorage.getItem('categories');
        if (savedCategories) {
            setCategories(JSON.parse(savedCategories));
        } else {
            // Демо данные, если локальное хранилище пусто
            const initialCategories = [
                {
                    id: '1',
                    title: 'Вакансии',
                    icon: faBriefcase,
                    contents: [
                        {
                            id: '1',
                            uzbek: `Bizda mavjud bo'sh ish o'rinlari`,
                            russian: 'Доступные вакансии в нашей компании'
                        }
                    ]
                },
                {
                    id: '2',
                    title: 'Обмен товара',
                    icon: faExchangeAlt,
                    contents: [
                        {
                            id: '2',
                            uzbek: 'Mahsulotni almashtirish tartibi',
                            russian: 'Порядок обмена товара'
                        }
                    ]
                }
            ];
            localStorage.setItem('categories', JSON.stringify(initialCategories));
            setCategories(initialCategories);
        }
    };

    const saveToLocalStorage = (updatedCategories) => {
        localStorage.setItem('categories', JSON.stringify(updatedCategories));
        setCategories(updatedCategories);
    };

    const showToast = (message) => {
        setToast({ show: true, message });
        setTimeout(() => setToast({ show: false, message: '' }), 3000);
    };

    const handleLogin = () => {
        if (loginData.username === ADMIN_USERNAME && loginData.password === ADMIN_PASSWORD) {
            setShowLoginModal(false);
            setCurrentView('admin');
            setIsAdmin(true);
            showToast('Успешный вход в систему');
        } else {
            showToast('Неверный логин или пароль');
        }
    };

    const handleCopyText = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            showToast('Текст скопирован в буфер обмена');
        });
    };

    const handleAddCategory = () => {
        if (!newCategory.title.trim()) return;
        
        const updatedCategories = [...categories, {
            id: Date.now().toString(),
            title: newCategory.title,
            icon: newCategory.icon || faFolder,
            contents: []
        }];
        
        saveToLocalStorage(updatedCategories);
        setNewCategory({ title: '', icon: '' });
        showToast('Категория успешно добавлена');
    };

    const handleDeleteCategory = (categoryId) => {
        if (window.confirm('Вы уверены, что хотите удалить эту категорию?')) {
            const updatedCategories = categories.filter(c => c.id !== categoryId);
            saveToLocalStorage(updatedCategories);
            showToast('Категория успешно удалена');
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
        showToast('Контент успешно добавлен');
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
        showToast('Контент успешно удален');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 py-5">
                    <h1 className="text-2xl font-medium flex items-center gap-2 mb-4">
                        <FontAwesomeIcon icon={faHome} className="text-green-600" />
                        Система управления заявками
                    </h1>
                    <div className="flex gap-3">
                        <button
                            onClick={() => {
                                setCurrentView('categories');
                                loadCategories();
                            }}
                            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                        >
                            <FontAwesomeIcon icon={faHome} />
                            Главная
                        </button>
                        <button
                            onClick={() => setShowLoginModal(true)}
                            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                        >
                            <FontAwesomeIcon icon={faLock} />
                            Админ панель
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 py-8">
                {currentView === 'categories' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map(category => (
                            <div
                                key={category.id}
                                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                            >
                                <FontAwesomeIcon
                                    icon={category.icon}
                                    className="text-4xl text-green-600 mb-4"
                                />
                                <h3 className="text-xl font-medium mb-4">{category.title}</h3>
                                <button
                                    onClick={() => {
                                        setSelectedCategory(category.id);
                                        setCurrentView('category');
                                    }}
                                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                                >
                                    <FontAwesomeIcon icon={faEye} />
                                    Просмотреть
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {currentView === 'category' && selectedCategory && (
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-medium mb-6">
                            {categories.find(c => c.id === selectedCategory)?.title}
                        </h2>
                        {categories.find(c => c.id === selectedCategory)?.contents.map((content, index) => (
                            <div key={index} className="mb-6 p-4 bg-gray-50 rounded-md">
                                <div className="mb-4">
                                    <h3 className="font-medium text-lg mb-2">Узбекский текст:</h3>
                                    <p>{content.uzbek}</p>
                                </div>
                                <div>
                                    <h3 className="font-medium text-lg mb-2">Русский текст:</h3>
                                    <p>{content.russian}</p>
                                    <button
                                        onClick={() => handleCopyText(content.russian)}
                                        className="mt-2 flex items-center gap-2 px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
                                    >
                                        <FontAwesomeIcon icon={faCopy} />
                                        Копировать
                                    </button>
                                </div>
                            </div>
                        ))}
                        <button
                            onClick={() => setCurrentView('categories')}
                            className="mt-4 flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
                        >
                            <FontAwesomeIcon icon={faHome} />
                            Вернуться к категориям
                        </button>
                    </div>
                )}

                {currentView === 'admin' && (
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
                )}

                {/* Login Modal */}
                {showLoginModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white rounded-lg p-6 w-full max-w-md">
                            <h2 className="text-xl font-medium mb-4 flex items-center gap-2">
                                <FontAwesomeIcon icon={faLock} />
                                Вход в админ панель
                            </h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Логин
                                    </label>
                                    <input
                                        type="text"
                                        value={loginData.username}
                                        onChange={(e) => setLoginData({
                                            ...loginData,
                                            username: e.target.value
                                        })}
                                        className="w-full px-3 py-2 border rounded-md"
                                        placeholder="Введите логин"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Пароль
                                    </label>
                                    <input
                                        type="password"
                                        value={loginData.password}
                                        onChange={(e) => setLoginData({
                                            ...loginData,
                                            password: e.target.value
                                        })}
                                        className="w-full px-3 py-2 border rounded-md"
                                        placeholder="Введите пароль"
                                    />
                                </div>
                                <div className="flex justify-end gap-3">
                                    <button
                                        onClick={() => setShowLoginModal(false)}
                                        className="px-4 py-2 text-gray-600 hover:text-gray-800"
                                    >
                                        Отмена
                                    </button>
                                    <button
                                        onClick={handleLogin}
                                        className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                                    >
                                        <FontAwesomeIcon icon={faSignInAlt} />
                                        Войти
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Toast Notification */}
                {toast.show && (
                    <div className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-md shadow-lg animate-fade-in">
                        {toast.message}
                    </div>
                )}
            </main>
        </div>
    );
}