import Head from "next/head";
import clientPromise from "../lib/mongodb";
import { InferGetServerSidePropsType } from "next";
import { ObjectId } from "mongodb";
import ShowListOfTasks from "../../frontend/src/components/ShowListOfTasks";
import App from "../../frontend/src/App";
import Header from "../../frontend/src/components/Header";

export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db("TaskifyMe");

    await clientPromise;
    const tasksList = await db
      .collection("tasks")
      .find()
      // .sort({ metacritic: -1 })
      .limit(10)
      .toArray();

    const tasks = JSON.parse(JSON.stringify(tasksList));
    console.log(tasksList);

    return {
      props: { tasks },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}

export default function Home({
  tasks,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const addTask = async (property: { _id: ObjectId }) => {
    const data = await fetch(
      `http://localhost:3000/api/addTask?property_id=${property._id}&guest=Mariusz`
    );
    const res = await data.json();
    console.log(res);
  };

  return (
    <>
      <Head>
        <title>TaskifyMe</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <Header />
      <ul>
        {tasks.map((task: any) => (
          <div key={task._id.toString()}>
            <ShowListOfTasks task={task} addTask={addTask} />
          </div>
        ))}
      </ul>
    </>
  );
}
