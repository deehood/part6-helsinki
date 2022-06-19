import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import {
  normalNotification,
  removeNormalNotification,
} from "../reducers/notificationReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const handleNewAnecdote = (e) => {
    e.preventDefault();

    const anecdote = e.target.inputNewAnecdote.value;

    dispatch(createAnecdote(anecdote));
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
