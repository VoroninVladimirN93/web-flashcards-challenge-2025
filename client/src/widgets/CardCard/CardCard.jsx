// import styles from "./CardCard.module.css";
// import React, { useEffect, useState } from "react";
// import Button from "../../shared/ui/Btn/Button";
import { useNavigate, useParams } from "react-router-dom";

// export default function CardCard() {
//     static async getAllQuest() {
//         const response = await fetch('http://localhost:3000/api/tasks');
//         const questArr = await response.json();
//         return questArr;
//     }

//     const [currentQuestion, setShowcurrentQuestion] = useState(0);

//     return (
//         <>
//         <Button text="Ответить" color="blue" onClick={} />
//         </>
//     )

// }

import React, { useState, useEffect } from "react";
import axios from "../../shared/ui/lib/axiosInstance"; // Для запросов к серверу
// import axios from 'axios'
// import { axiosInstance } from "../../shared/ui/lib/axiosInstance";

const CardCard = ({ id }) => {
  // Состояния
  const [cards, setCards] = useState([]); // Массив карточек
  const [currentCardIndex, setCurrentCardIndex] = useState(0); // Индекс текущей карточки
  const [selectedOption, setSelectedOption] = useState(null); // Выбранный вариант ответа
  const [score, setScore] = useState(0); // Счет
  const [isAnswered, setIsAnswered] = useState(false); // Флаг, отвечен ли вопрос
console.log(cards);

  // Получение данных с сервера
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const { data } = await axios.get(`deck/${id}/card`); // Запрос к серверу
        setCards(data.data); // Сохраняем данные в состояние
      } catch (error) {
        console.error("Ошибка при загрузке карточек:", error);
      }
    };

    fetchCards();
  }, []);

  // Обработчик выбора варианта ответа
  const handleOptionSelect = (option) => {
    if (!isAnswered) {
      setSelectedOption(option);
    }
    console.log('option', option);
  };

  // Обработчик нажатия на кнопку "Ответить"
  const handleAnswer = () => {
    if (selectedOption !== null) {
      const currentCard = cards[currentCardIndex];
      const isCorrect = selectedOption === currentCard.right_answer;

      // Обновляем счет, если ответ правильный
      if (isCorrect) {
        setScore((prevScore) => prevScore + +currentCard.points);
      }

      setIsAnswered(true); // Помечаем вопрос как отвеченный

      // Переход к следующей карточке через 3 секунды
      setTimeout(() => {
        setCurrentCardIndex((prevIndex) => prevIndex + 1);
        setSelectedOption(null);
        setIsAnswered(false);
      }, 3000);
    }
  };

  // Если карточки загружаются
  if (cards.length === 0) {
    return <div>Загрузка карточек...</div>;
  }

  // Если все карточки пройдены
  if (currentCardIndex >= cards.length) {
    return (
      <div>
        <h2>Игра завершена!</h2>
        <p>Ваш счет: {score} баллов</p>
      </div>
    );
  }

  // Текущая карточка

  const currentCard = cards[currentCardIndex];

  return (
    <div>
      <h2>Вопрос: {currentCard?.question}</h2>
      <img src={currentCard.img_path} style = {{height: '300px'}} ></img>
      <div>
        {["option1", "option2", "option3", "option4"].map((option, index) => (
          <div
            key={index}
            onClick={() => handleOptionSelect(currentCard?.[option])}
            style={{
              cursor: isAnswered ? "default" : "pointer",
              backgroundColor:
                isAnswered &&
                currentCard?.[option] === currentCard?.right_answer
                  ? "green"
                  : isAnswered && selectedOption === currentCard?.[option]
                  ? "red"
                  : "transparent",
              padding: "10px",
              margin: "5px",
              border: "1px solid #ccc",
            }}
          >
            {currentCard?.[option]}
          </div>
        ))}
      </div>
      
      <button
        onClick={handleAnswer}
        disabled={isAnswered || selectedOption === null}
      >
        Ответить
      </button>
      <p>Текущий счет: {score} баллов</p>
    </div>
  );
};

export default CardCard;
