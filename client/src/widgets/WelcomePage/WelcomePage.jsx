import React, { useState, useEffect, useRef } from 'react';

function WelcomePage(props) {
  const [inputValue, setInputValue] = useState(''); // Состояние для хранения значения текстового поля
  const inputRef = useRef(null); // Референс для автофокуса

  // При монтировании компонента загружаем значение из localStorage
  useEffect(() => {
    const savedValue = localStorage.getItem('name');
    if (savedValue) {
      setInputValue(savedValue);
    }
    inputRef.current.focus(); // Автофокус на текстовое поле
  }, []);

  // Обработчик изменения значения в текстовом поле
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    localStorage.setItem('area', value); // Сохраняем значение в localStorage
  };

  // Обработчик очистки текстового поля
  const handleClear = () => {
    setInputValue('');
    localStorage.removeItem('name');
  };

  return (
    <div style={styles.container}>
      <textarea
        ref={inputRef}
        style={styles.textarea}
        placeholder="Напишите сообщение здесь"
        value={inputValue}
        onChange={handleInputChange}
      />
      <br />
      <button style={styles.button} onClick={handleClear}>
        Очистить
      </button>
    </div>
  );
}

// Стили для компонента
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  textarea: {
    width: '200px',
    height: '60px',
    borderRadius: '25px', // Скругление краёв на 50%
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    outline: 'none',
    resize: 'none', // Отключаем изменение размера
  },
  button: {
    marginTop: '10px',
    padding: '10px 20px',
    borderRadius: '25px', // Скругление краёв на 50%
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default WelcomePage;