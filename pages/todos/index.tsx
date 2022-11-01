import Head from "next/head";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getAllTodos } from "@/services/index";
import { Todo } from "@/types/index";
import Loader from "components/Loader";

export default function Todos() {
  const { isError, isLoading, data, error } = useQuery({
    queryKey: ["todos"],
    queryFn: getAllTodos,
  });

  if (isError) {
    return (
      <div>
        <h1>Well...That's unexpected</h1>
        <pre>{JSON.stringify(error)}</pre>
      </div>
    );
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <Head>
        <title>Funstack Todos</title>
        <meta
          name="description"
          content="The most fun frontend stack ready for production"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Todos</h1>
      {data.map((todo: Todo) => (
        <div>
          <Link href={`http://localhost:3000/todos/${todo.id}`}>
            <h1>{todo.id}</h1>

            <p key={todo.id}>{todo.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
