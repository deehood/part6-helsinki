import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from "../services/anecdotes";

// const anecdotesAtStart = [
//   "If it hurts, do it more often",
//   "Adding manpower to a late software project makes it later!",
//   "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
//   "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
//   "Premature optimization is the root of all evil.",
//   "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
// ];

// const initialState = anecdotesAtStart.map(asObject);

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    setAnecdotes(state, action) {
      return action.payload;
    },
    appendAnecdote(state, action) {
      state.push(action.payload);
    },

    setNewVote(state, action) {
      state.find((anecdote) => anecdote.id === action.payload).votes++;
    },

    getOrderedAnecdotes(state, action) {
      state.sort((a, b) => b.votes - a.votes);
    },
  },
});

export const loadInitialAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdotes(anecdotes));
    dispatch(getOrderedAnecdotes(anecdotes));
  };
};

export const createAnecdote = (anecdoteText) => {
  return async (dispatch) => {
    const anecdote = await anecdoteService.createAnecdote(anecdoteText);
    dispatch(appendAnecdote(anecdote));
  };
};

export const incrementVote = (id) => {
  return async (dispatch, getState) => {
    const oldVotes = getState().anecdotes.find(
      (anecdote) => anecdote.id === id
    ).votes;

    await anecdoteService.setNewVotes(id, oldVotes + 1);
    dispatch(setNewVote(id));
  };
};

export const { setAnecdotes, appendAnecdote, setNewVote, getOrderedAnecdotes } =
  anecdoteSlice.actions;

export default anecdoteSlice.reducer;
