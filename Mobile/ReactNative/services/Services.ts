
const scheme = 'http';
const ip = '10.0.2.2' // We do not use localhost but the ip of the emulator
const port = '8090'
const url = `${scheme}://${ip}:${port}`;

export async function getTasks(params: string) {
    return fetch(
      `${url}/api/collections/task/records?filter=(project='${params}')`
    ).then(response => response.json()).then(data => data?.items);
}

export async function getProjects() {
    return fetch(
      `${url}/api/collections/project/records?page=1&perPage=30`,
    ).then(response => response.json()).then(data => data?.items);
}

export async function deleteTask(id: string) {
    return fetch(
      `${url}/api/collections/task/records/${id}`,{
        method: 'DELETE',
    });
  }  
  
export async function updateTask(task: any) {
    return fetch(
      `${url}/api/collections/task/records/${task.id}`,{
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
    }).then(response =>  response.json());
}  

export async function createTask(name: any,projectId:any) {
    return fetch(
      `${url}/api/collections/task/records/`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name, project:projectId }),
    }).then(response => {
        return response.json();
    });
}