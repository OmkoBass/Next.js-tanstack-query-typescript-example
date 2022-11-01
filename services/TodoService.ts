import axios from "axios";
import { Todo } from "@/types/index";

export async function getTodo(id: string): Promise<Todo> {
  const response = await axios.get<Todo>(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );

  return response.data;
}

export async function getAllTodos(): Promise<Todo[]> {
  const response = await axios.get<Todo[]>(
    "https://jsonplaceholder.typicode.com/todos"
  );

  return response.data;
}
