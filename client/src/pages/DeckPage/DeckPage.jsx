
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DeckApi from '../../api/DeckApi';

function DeckPage() {
  const { deckId } = useParams(); // Получаем deckId из URL
  const navigate = useNavigate(); 
  const [deck, setDeck] = useState(null); /
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  // Загрузка колоды и её карт
  useEffect(() => {
    const fetchDeck = async () => {
      try {
        const deck = await DeckApi.getDeckById(deckId); // Запрос к API
        setDeck(deck);
      } catch (error) {
        setError('Ошибка загрузки колоды');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDeck();
  }, [deckId]);

  // Переход на страницу с картами колоды
  const handlePlayDeck = () => {
    navigate(`/deck/${deckId}/card`); 
  };

  
  if (loading) {
    return <p>Загрузка...</p>;
  }

  
  if (error) {
    return <p>{error}</p>;
  }

  
  return (
    <div>
      <h1>{deck.title}</h1>
      <p>{deck.description}</p>

      <h2>Темы игр (Карты колоды):</h2>
      <ul>
        {deck.Cards.map((card) => (
          <li key={card.id}>
            <strong>Вопрос:</strong> {card.question} <br />
            <strong>Ответ:</strong> {card.answer}
          </li>
        ))}
      </ul>

      <button onClick={handlePlayDeck}>Играть с этой колодой</button>
    </div>
  );
}

export default DeckPage;