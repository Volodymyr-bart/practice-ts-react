import { IItem } from "../types/todos";

interface IProps {
  todos: IItem[];
}
const TodoList: React.FC<IProps> = (props) => {
  return (
    <ul>
      {props.todos.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export default TodoList;
