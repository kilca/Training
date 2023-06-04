import { useState } from "react";

function createTask(name: any,projectId:any, refreshTask: ()=>void) {
    const response = fetch(
      `http://127.0.0.1:8090/api/collections/task/records/`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name, project:projectId }),
    }).then(response => {
        refreshTask();
        response.json();
    });
    return response;
}

interface TaskCreationProps {
    refreshTask: ()=>void;
    projectId: string;
}
export default function TaskCreation({ refreshTask, projectId }: TaskCreationProps) {

    const [name,setName] = useState<string>('');

    const handleInputChange = (event: any) => {
      setName(event.target.value);
    };

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
                onClick={() => { createTask(name,projectId, refreshTask) }}
            >(+)</button>
        </div>
    )
}