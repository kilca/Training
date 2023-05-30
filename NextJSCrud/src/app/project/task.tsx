import { useState } from "react";

function deleteTask(id: string,refreshTask : ()=>void) {
  const response = fetch(
    `http://127.0.0.1:8090/api/collections/task/records/${id}`,{
      method: 'DELETE',
  }).then(response => {
    refreshTask();
  });
  return response;
}  

function updateTask(task: any,refreshTask : ()=>void) {
  const response = fetch(
    `http://127.0.0.1:8090/api/collections/task/records/${task.id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
  }).then(response => {
    console.log("**update");
  });
  return response;
}  

interface TaskProps {
  id:string;
  name:string;
  done:boolean;
  refreshTask: ()=>void;
}
export default function Task( task : TaskProps) {
  const { id, name, done, refreshTask } = task;

  const [isEditing, setIsEditing] = useState(false);
  const [inputName, setInputName] = useState(name ?? '');
  const [inputDone, setInputDone] = useState<boolean>(done ?? false);

  const handleSpanClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (event: any) => {
    setInputName(event.target.value);
  };

  const handleCheckboxChange = (event: any) => {
    updateTask({id:id,name:inputName,done:!inputDone},refreshTask);
    setInputDone((prev)=>!prev);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
    updateTask({id:id,name:inputName,done:inputDone},refreshTask);
  };

  return (
    <div className='flex-row lg:flex items-center mb-2'>
      <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600" onChange={handleCheckboxChange} checked={inputDone} />
      {isEditing ? (
        <input
          type='text'
          className='form-input ml-2 text-gray-700'
          value={inputName}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          autoFocus
        />
      ) : (
        <span className='ml-2 text-white-700' onClick={handleSpanClick}>
          {inputName}
        </span>
      )}
      <button 
        className="ml-2 p-2 bg-red-600 text-white rounded-lg ml-auto"
        onClick={()=>{deleteTask(id,refreshTask)}}  
      >(-)</button>
    </div>
  )
}