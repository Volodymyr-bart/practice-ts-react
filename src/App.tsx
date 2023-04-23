import { FC, useState } from "react";
import { UserInfo } from "./user";
import TodoList from "./components/TodoList";
import { IItem } from "./types/todos";
import { title } from "process";
import AddTodo from "./components/AddTodo";
const user: UserInfo = {
  id: "",
  name: "",
  birthday: "",
  age: 32,
};
console.log(user);

type CustomType = {
  name: string;
  sex?: "man" | "woman";
};

const person: CustomType = {
  name: "Don",
};

person.sex = "man";

const App: FC = () => {
  const [todos, setTodos] = useState<IItem[]>([]);
  function addTodoHandler(todo: IItem) {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: Math.random().toString(),
          title: todo.title,
        },
      ];
    });
  }
  // const [todos, setTodos] = useState<{ id: number; title: string }[]>([]);
  // function add(number1: number, number2: number): number {
  //   return number1 + number2;
  // }
  // function print(): void {
  //   let some: any;
  //   some = {};

  //   let num: number;

  //   num = some;
  //   console.log("num", num);
  // }

  // function generateError(message: string, status: number): never {
  //   throw { message, status };
  // }

  // generateError("An error", 500);
  // print();

  // console.log(add(5, 6));

  // let callback: (num: number) => void;

  // callback = (num) => {
  //   console.log(num);
  // };

  // callback(5);

  function calc(
    param1: number,
    param2: number,
    callback: (num1: number, num2: number) => number
  ): void {
    console.log("Result:", callback(param1, param2));
  }

  calc(1, 1, (num1, num2) => num1 + num2);
  calc(10, 5, (num1, num2) => num1 - num2);

  return (
    <div className="App">
      <header className="App-header">This is my app</header>
      <main>
        <AddTodo onAddTodo={addTodoHandler} />
        <TodoList todos={todos} />
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default App;
