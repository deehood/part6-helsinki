import { useSelector, useDispatch } from "react-redux";
import {
  incrementVote,
  createNewAnecdote,
  getOrderedAnecdotes,
} from "./reducers/anecdoteReducer";

const App = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => state);

  const handleVote = (id) => {
    console.log("vote", id);
    dispatch(incrementVote(id));
    dispatch(getOrderedAnecdotes(anecdotes));
  };

  const handleNewAnecdote = (e) => {
    e.preventDefault();
    console.log(e);
    const anecdote = e.target.inputNewAnecdote.value;

    dispatch(createNewAnecdote(anecdote));
  };
  return (
    <div>
      <h2>Anecdotes</h2>

      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}

      <h2>create new</h2>
      <form onSubmit={handleNewAnecdote}>
        <div>
          <input name="inputNewAnecdote" />
        </div>
        <button>create</button>
      </form>
    </div>
  );
};

export default App;
