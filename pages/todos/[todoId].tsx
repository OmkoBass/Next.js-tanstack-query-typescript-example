import Head from "next/head";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { getTodo } from "@/services/TodoService";
import Loader from "@/components/Loader";

export default function SingleTodo() {
  const router = useRouter();
  const todoId = router.query.todoId as string;

  const { isError, isLoading, data, error } = useQuery({
    queryKey: ["todos", todoId],
    queryFn: () => getTodo(todoId),
    enabled: !!todoId,
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
        <title>Funstack Todo {todoId}</title>
        <meta
          name="description"
          content="The most fun frontend stack ready for production"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{data.title}</h1>
    </div>
  );
}
