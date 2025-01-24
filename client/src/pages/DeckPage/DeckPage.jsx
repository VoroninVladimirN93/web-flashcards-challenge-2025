import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../../shared/ui/lib/axiosInstance';

function DeckPage() {
  const { deckId } = useParams(); // Получаем deckId из URL
  const navigate = useNavigate();
  const [deck, setDeck] = useState([]); // Состояние для хранения колод
  const [loading, setLoading] = useState(true); // Состояние загрузки
  const [error, setError] = useState(null); // Состояние ошибки

  // Загрузка колод
  useEffect(() => {
    const fetchDeck = async () => {
      try {
        const { data } = await axios.get(`deck`); // Запрос к API
        setDeck(data.data); // Устанавливаем данные в состояние
      } catch (error) {
        setError('Ошибка загрузки колоды');
        console.error(error);
      } finally {
        setLoading(false); // Завершаем загрузку
      }
    };

    fetchDeck();
  }, []);

  // Переход на страницу с картами колоды
  const handlePlayDeck = (id) => {
    navigate(`/deck/${id}/card`); // Переход на страницу с картами
  };

  // Отображение загрузки
  if (loading) {
    return <p>Загрузка...</p>;
  }

  // Отображение ошибки
  if (error) {
    return <p>{error}</p>;
  }

  // Отображение данных
  return (
    <div>
      <h1>Колоды</h1>
      <h2>Список колод:</h2>
      <ul>
        {deck.map((item) => (
          <li key={item.id}>
            <div>
              <h3>{item.title}</h3> {/* Название колоды */}
              {item.img_path && (
                <img
                  src={item.img_path}
                  alt={item.title}
                  style={{ width: '200px', height: 'auto' }}
                />
              )}
              <button onClick={() => handlePlayDeck(item.id)}>
                Играть с этой колодой
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DeckPage;