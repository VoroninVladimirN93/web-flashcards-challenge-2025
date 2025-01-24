const getDeckById = async (deckId) => {
    try {
      const response = await fetch(`/api/deck/`);
      if (!response.ok) {
        throw new Error('Ошибка загрузки колоды');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  
  export default {
    getDeckById,
  };