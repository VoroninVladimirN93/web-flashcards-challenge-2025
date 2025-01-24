import React from 'react';

function CardPage(props) {

    const mockCards = [
        // Карточки для Deck 1 (deck_id = 1)
        {
          id: 1,
          question: "What is the capital of France?",
          option1: "Berlin",
          option2: "Madrid",
          option3: "Paris",
          option4: "Rome",
          right_answer: "Paris",
          points: 10,
          img_path: "/images/paris.jpg",
          deck_id: 1, // Ссылка на Deck 1
        },
        {
          id: 2,
          question: "Which planet is known as the Red Planet?",
          option1: "Earth",
          option2: "Mars",
          option3: "Jupiter",
          option4: "Saturn",
          right_answer: "Mars",
          points: 15,
          img_path: "/images/mars.jpg",
          deck_id: 1, // Ссылка на Deck 1
        },
        {
          id: 3,
          question: "Who wrote 'Romeo and Juliet'?",
          option1: "William Shakespeare",
          option2: "Charles Dickens",
          option3: "Mark Twain",
          option4: "Jane Austen",
          right_answer: "William Shakespeare",
          points: 20,
          img_path: "/images/shakespeare.jpg",
          deck_id: 1, // Ссылка на Deck 1
        },
        {
          id: 4,
          question: "What is the largest ocean on Earth?",
          option1: "Atlantic Ocean",
          option2: "Indian Ocean",
          option3: "Arctic Ocean",
          option4: "Pacific Ocean",
          right_answer: "Pacific Ocean",
          points: 25,
          img_path: "/images/pacific.jpg",
          deck_id: 1, // Ссылка на Deck 1
        },
        {
          id: 5,
          question: "What is the chemical symbol for water?",
          option1: "H2O",
          option2: "CO2",
          option3: "NaCl",
          option4: "O2",
          right_answer: "H2O",
          points: 30,
          img_path: "/images/water.jpg",
          deck_id: 1, // Ссылка на Deck 1
        },
      
        // Карточки для Deck 2 (deck_id = 2)
        {
          id: 6,
          question: "What is the smallest prime number?",
          option1: "1",
          option2: "2",
          option3: "3",
          option4: "5",
          right_answer: "2",
          points: 10,
          img_path: "/images/prime.jpg",
          deck_id: 2, // Ссылка на Deck 2
        },
        {
          id: 7,
          question: "Which element has the atomic number 1?",
          option1: "Helium",
          option2: "Hydrogen",
          option3: "Oxygen",
          option4: "Carbon",
          right_answer: "Hydrogen",
          points: 15,
          img_path: "/images/hydrogen.jpg",
          deck_id: 2, // Ссылка на Deck 2
        },
        {
          id: 8,
          question: "What is the square root of 64?",
          option1: "4",
          option2: "6",
          option3: "8",
          option4: "10",
          right_answer: "8",
          points: 20,
          img_path: "/images/square_root.jpg",
          deck_id: 2, // Ссылка на Deck 2
        },
        {
          id: 9,
          question: "Who painted the Mona Lisa?",
          option1: "Vincent van Gogh",
          option2: "Pablo Picasso",
          option3: "Leonardo da Vinci",
          option4: "Claude Monet",
          right_answer: "Leonardo da Vinci",
          points: 25,
          img_path: "/images/mona_lisa.jpg",
          deck_id: 2, // Ссылка на Deck 2
        },
        {
          id: 10,
          question: "What is the speed of light?",
          option1: "300,000 km/s",
          option2: "150,000 km/s",
          option3: "450,000 km/s",
          option4: "600,000 km/s",
          right_answer: "300,000 km/s",
          points: 30,
          img_path: "/images/light.jpg",
          deck_id: 2, // Ссылка на Deck 2
        },
      ];


    return (
        <div>
            
        </div>
    );
}

export default CardPage;