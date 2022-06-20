import { useDispatch, useSelector } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import {
  normalNotification,
  removeNormalNotification,
} from "../reducers/notificationReducer";
import anecdoteService from "../services/anecdotes";

const AnecdoteForm = () => {
  const dispatch = useDispatch();
  const anecdotesObjectList = useSelector((state) => state.anecdotes);

  const handleNewAnecdote = async (e) => {
    e.preventDefault();

    const anecdote = e.target.inputNewAnecdote.value;

    await dispatch(createAnecdote(anecdote));

    console.log(anecdote);
    const anecdoteObject = await anecdotesObjectList.find(
      (x) => x.content === anecdote
    );
    console.log(anecdotesObjectList);
    console.log(anecdoteObject);
    await anecdoteService.createAnecdote(anecdoteObject);

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
