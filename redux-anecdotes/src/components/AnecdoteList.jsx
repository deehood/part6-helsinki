import { useDispatch, useSelector } from "react-redux";
import {
  incrementVote,
  getOrderedAnecdotes,
} from "../reducers/anecdoteReducer";

const AnecdoteList = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => state);

  const handleVote = (id) => {
    console.log("vote", id);
    dispatch(incrementVote(id));
    dispatch(getOrderedAnecdotes(anecdotes));
  };

  return (
    <>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </>
  );
};
export default AnecdoteList;
