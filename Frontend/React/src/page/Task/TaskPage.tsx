import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import TaskCreation from "../../components/Task/TaskCreation";
import Task from "../../components/Task/Task";
import { getTasks } from "../../services/Services";

const TaskPage = () => {

  let { id } = useParams();

  const [tasks, setTasks] = useState<any[]>([]);
  const [update, setUpdate] = useState<boolean>(true);

  useEffect(() => {
    if (id && update) {
      getTasks(id).then((data) => {
        setTasks(data);
      }).catch((error) => {
        console.log(error);
      }).finally(() => {
        setUpdate(false);
      });
    }
  }, [id, update]);

  return (
    <>
        <span className="lg:flex flex-row">
          <Link className="max-h-9 mr-2 p-2 bg-blue-600 text-white rounded-lg"
            to='../'>Go back</Link>
          <h1 className='text-5xl mb-8'>Todo-List App</h1>
        </span>
        <h2 className='text-3xl mb-8'>My list</h2>
        <div className=''>
          <TaskCreation
            refreshTask={() => { setUpdate(true) }}
            projectId={id!}
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
      </>
  )
}

export default TaskPage;
