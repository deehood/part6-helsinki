import { useDispatch, useSelector } from "react-redux";
import {
  incrementVote,
  getOrderedAnecdotes,
} from "../reducers/anecdoteReducer";
import {
  normalNotification,
  removeNormalNotification,
} from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.filter);
  console.log(filter);

  const anecdotes = useSelector((state) => state.anecdotes);

  const handleVote = (id) => {
    console.log("vote", id);
    dispatch(incrementVote(id));
    dispatch(getOrderedAnecdotes(anecdotes));

    dispatch(
      normalNotification(
        `Voted for -  ${anecdotes.find((x) => x.id === id).content}`
      )
    );
    setTimeout(() => {
      dispatch(removeNormalNotification(null));
    }, 5000);
  };
  return (
    <>
      {anecdotes
        .filter((anecdote) => anecdote.content.includes(filter))
        .map((anecdote) => (
          <div
            style={{
              border: "solid",
              padding: 5,
              marginBottom: 5,
              borderWidth: 1,
            }}
            key={anecdote.id}
          >
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
