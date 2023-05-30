'use client'
import Link from "next/link";
import Task from "../task";
import { useEffect, useState } from "react";
import TaskCreation from "../taskcreation";



export default async function TaskPage(paramopt: any) {

  const { params } = paramopt || {};

  const [tasks, setTasks] = useState<any[]>([]);
  const [update, setUpdate] = useState<boolean>(true);

  async function getTasks(params: string) {
    fetch(
      `http://127.0.0.1:8090/api/collections/task/records?filter=(project='${params}')`
    ).then(response => response.json()).then(data => setTasks(data?.items as any[]));
  }

  useEffect(() => {
    if (update) {
      getTasks(params?.id);
      setUpdate(false);
    }
  }, [params?.id, update]);

  return (
    <main className="flex min-h-screen  items-center justify-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-center align-center font-mono text-sm flex-col lg:flex">
        <span className="lg:flex flex-row">
          <Link className="max-h-9 mr-2 p-2 bg-blue-600 text-white rounded-lg"
            href='../'>Go back</Link>
          <h1 className='text-5xl mb-8'>Todo-List App</h1>
        </span>
        <h2 className='text-3xl mb-8'>My list</h2>
        <div className=''>
          <TaskCreation
            refreshTask={() => { setUpdate(true) }}
            projectId={params?.id}
          ></TaskCreation>
          <hr className="mt-2 mb-2" />
          {tasks?.map((task) => {
            return <Task key={task.id}
              id={task.id}
              done={task.done}
              name={task.name}
              refreshTask={
                () => { setUpdate(true) }} 
              />
          })}
        </div>
      </div>
    </main>
  )
}
