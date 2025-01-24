// import axios from "axios";


// export const axiosInstance = axios.create({
//   // baseURL: 'http://localhost:3000/api', // Базовый URL сервера
//   baseURL: `${import.meta.env.VITE_API}api`, //? - все запросы летят на /api
//   headers: {
//     'Content-Type': 'application/json', // По умолчанию используем JSON
//   },
//   withCredentials: true, //? - все запросы включают куки
// });



// let accessToken = "";

// export function setAccessToken(token) {
//   accessToken = token;
// }

// axiosInstance.interceptors.request.use((config) => {
//   if (!config.headers.authorization) {
//     config.headers.authorization = `Bearer ${accessToken}`;
//   }
//   return config;
// });

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const prevRequest = error.config;
//     if (error.response.status === 403 && !prevRequest.sent) {
//       const response = await axiosInstance.get("/auth/refreshTokens");
//       setAccessToken(response.data.accessToken);
//       prevRequest.sent = true;
//       prevRequest.headers.authorization = `Bearer ${accessToken}`;
//       return axiosInstance(prevRequest);
//     }
//     return Promise.reject(error);
//   }
// );

// // Перехватчик запросов
// axiosInstance.interceptors.request.use((config) => {
//   // Если тело запроса является FormData, устанавливаем Content-Type в multipart/form-data
//   if (config.data instanceof FormData) {
//     config.headers['Content-Type'] = 'multipart/form-data';
//   }
//   return config;
// });



import axios from 'axios';

// Создаем экземпляр axios с настройками
const instance = axios.create({
  baseURL: `${import.meta.env.VITE_API}api`, // Базовый URL вашего API
  headers: {
    'Content-Type': 'application/json', // Указываем тип содержимого
  },
});

// Интерцептор для запросов (можно добавить токен авторизации)
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Пример получения токена из localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Добавляем токен в заголовок
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Интерцептор для ответов (можно обрабатывать ошибки)
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      // Обработка ошибок HTTP (например, 401, 404, 500)
      console.error('Ошибка ответа:', error.response.status, error.response.data);
    } else if (error.request) {
      // Ошибка запроса (например, нет ответа от сервера)
      console.error('Ошибка запроса:', error.request);
    } else {
      // Другие ошибки
      console.error('Ошибка:', error.message);
    }
    return Promise.reject(error);
  }
);

export default instance;