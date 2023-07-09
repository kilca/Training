import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProjects } from "../../services/Services";

type Project = {
  id: string;
  name: string;
};

const ProjectPage = ()=>{

  useEffect(() => {
    getProjects().then((data) => {
      setProjects(data);
    });
  }, []);

  const [projects, setProjects] = useState<Project[]>();

  return (
      <>
        <h1 className='text-5xl mb-8'>Todo-List App</h1>
        <h2 className='text-2xl mb-8'>Projects</h2>
        <div className='flex-row lg:flex'>
          {projects?.map((project:Project) => {
            return <Link key={project.id} className="ml-2 p-2 bg-blue-600 text-white rounded-lg"
            to={`/project/${project.id}`}>{project?.name}</Link>
          })}
        </div>
      </>
  )
}
export default ProjectPage;
