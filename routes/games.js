// Файл routes/games.js

const gamesRouter = require("express").Router();
const { checkAuth } = require("../middlewares/auth.js");

const { findAllGames, 
        checkIsGameExists,
        checkIfCategoriesAvaliable,
        findGameById, 
        createGame,
        checkIfUsersAreSafe,
        updateGame, 
        deleteGame,
        checkEmptyFields,
        checkIsVoteRequest 
      } = require("../middlewares/games.js");
const { sendAllGames, 
        sendGameById,
        sendGameCreated, 
        sendGameUpdated, 
        sendGameDeleted 
      } = require("../controllers/games.js");

gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.post(
  "/games",
  findAllGames,
  checkIsGameExists,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth,
  createGame,
  sendGameCreated
);
gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.put(
  "/games/:id",
  findGameById,
  checkIsVoteRequest,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth,
  updateGame,
  sendGameUpdated
); 

gamesRouter.delete(
    "/games/:id", // Слушаем запросы по эндпоинту
    checkAuth,
    deleteGame,
    sendGameDeleted // Тут будут функция удаления элементов из MongoDB и ответ клиенту
  ); 

  // Файл routes/games.js

// Пока запишем порядок действий псевдокодом 


module.exports = gamesRouter; 