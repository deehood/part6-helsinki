import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};
const createAnecdote = async (anecdote) => {
  const newAnecdote = asObject(anecdote);
  const response = await axios.post(baseUrl, newAnecdote);
  return response.data;
};

const anecdoteService = { getAll, createAnecdote };

export default anecdoteService;
