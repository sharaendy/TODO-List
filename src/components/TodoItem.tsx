import { ITodo } from '../types/data';

interface ITodoItem extends ITodo {
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
  const { id, title, complete, removeTodo, toggleTodo } = props;
  return (
    <div>
      <input type="checkbox" onChange={() => toggleTodo(id)} defaultChecked={complete} />
      {title}
      <button 
        onClick={() => removeTodo(id)} 
        style={{
          background: 'transparet',
          marginLeft: '5px',
          border: 'none',
          outline: 'none',
          color: 'red',
      }}>X</button>
    </div>
  )
}

export { TodoItem };
