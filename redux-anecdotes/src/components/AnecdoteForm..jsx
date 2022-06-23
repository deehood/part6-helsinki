import { connect } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteForm = (props) => {
  const handleNewAnecdote = async (e) => {
    e.preventDefault();
    const anecdote = e.target.inputAnecdote.value;

    props.createAnecdote(anecdote);
    props.setNotification(`Created - ${anecdote}`, 2);

    e.target.inputAnecdote.value = "";
  };

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={handleNewAnecdote}>
        <div>
          <input name="inputAnecdote" />
        </div>
        <button>create</button>
      </form>
    </>
  );
};

const mapDispatchToProps = { createAnecdote, setNotification };
export default connect(null, mapDispatchToProps)(AnecdoteForm);
