import { useEffect } from "react";
import { connect } from "react-redux";
import {
  incrementVote,
  getOrderedAnecdotes,
  loadInitialAnecdotes,
} from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteList = (props) => {
  const initial = props.loadInitialAnecdotes;
  useEffect(() => {
    initial();
  }, [initial]);

  const handleVote = (id) => {
    props.incrementVote(id);

    props.setNotification(
      `you voted - ${props.anecdotes.find((x) => x.id === id).content}`,
      2
    );
  };

  return (
    <>
      {props.anecdotes
        .filter((anecdote) => anecdote.content.includes(props.filter))
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

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter,
  };
};

const mapDispatchToProps = {
  loadInitialAnecdotes,
  incrementVote,
  getOrderedAnecdotes,
  setNotification,
};

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList);
