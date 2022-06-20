import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import {
  normalNotification,
  removeNormalNotification,
} from "../reducers/notificationReducer";
import anecdoteService from "../services/anecdotes";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const handleNewAnecdote = async (e) => {
    e.preventDefault();

    const anecdote = e.target.inputNewAnecdote.value;
    const newAnecdote = await anecdoteService.createAnecdote(anecdote);
    dispatch(createAnecdote(newAnecdote));

    dispatch(normalNotification(`Created -  ${anecdote}`));
    setTimeout(() => {
      dispatch(removeNormalNotification(null));
    }, 5000);

    e.target.inputNewAnecdote.value = "";
  };

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={handleNewAnecdote}>
        <div>
          <input name="inputNewAnecdote" />
        </div>
        <button>create</button>
      </form>
    </>
  );
};
export default AnecdoteForm;
