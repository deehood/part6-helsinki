import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};
const createAnecdote = async (anecdote) => {
  const newAnecdote = asObject(anecdote);
  const response = await axios.post(baseUrl, newAnecdote);
  return response.data;
};

const setNewVotes = async (id, votes) => {
  const response = await axios.patch(`${baseUrl}/${id}`, { votes: votes });
  return response.data;
};

const anecdoteService = { getAll, createAnecdote, setNewVotes };

export default anecdoteService;
