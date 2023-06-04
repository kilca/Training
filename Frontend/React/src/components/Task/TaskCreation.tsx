import { useState } from "react";
import { createTask } from "../../services/Services";

interface TaskCreationProps {
    refreshTask: ()=>void;
    projectId: string;
}
const TaskCreation = ({ refreshTask, projectId }: TaskCreationProps)=>{

    const [name,setName] = useState<string>('');

    const handleInputChange = (event: any) => {
      setName(event.target.value);
    };

    const callCreate = ()=>{
        createTask(name,projectId).finally(()=>{
            refreshTask();
        });
    }

    return (
        <div>
            <input
                className='text-black ml-2 border border-gray-300 rounded-lg p-2'
                value={name}
                type="text"
                onChange={handleInputChange}
            />
            <button
                className='ml-2 p-2 bg-blue-600 text-white rounded-lg'
                onClick={callCreate}
            >(+)</button>
        </div>
    )
}

export default TaskCreation;