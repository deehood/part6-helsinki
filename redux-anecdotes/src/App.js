import { useSelector, useDispatch } from "react-redux";
import AnecdoteForm from "./components/AnecdoteForm.";
import { incrementVote, getOrderedAnecdotes } from "./reducers/anecdoteReducer";

const App = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => state);

  const handleVote = (id) => {
    console.log("vote", id);
    dispatch(incrementVote(id));
    dispatch(getOrderedAnecdotes(anecdotes));
  };

  return (
    <>
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

      <AnecdoteForm />
    </>
  );
};

export default App;
