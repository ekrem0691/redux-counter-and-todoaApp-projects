import React from 'react';
import okLogo from '../../assets/ok.png';
import deleteLogo from '../../assets/delete.png';
import { useDispatch ,useSelector} from 'react-redux';
import { toggleTodo,deleteTodo } from '../../redux/actions/todoActions';



const TodoItem = ({ completed, text, id }) => {

  

  const {todoList} = useSelector((state) => state.todoRed);
  const dispatch = useDispatch()

  console.log(todoList);

  const handleToggle = (e) => {
    dispatch(toggleTodo(id))
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id))
  };

  const styled = {
    textDecoration: completed ? 'line-through' : 'none',
    backgroundColor: completed ? '#A9A9A9' : 'orange',
    borderRadius: '5px',
  };

  return (
    <div style={styled} className="todo-list">
      <h2 className="todoText">{text}</h2>
      <div>
        <span>
          <img
            src={okLogo}
            className="ok-logo"
            alt="ok logo"
            onClick={handleToggle}
          />
        </span>
        <span>
          <img
            src={deleteLogo}
            className="delete-logo"
            alt="delete logo"
            onClick={handleDelete}
          />
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
