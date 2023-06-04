import { showObject } from '@/utils';
import Link from 'next/link';
/*
//it's an example of how to use getServerSideProps if we use pages router structure
import { GetServerSideProps, InferGetServerSidePropsType } from 'next/types';
export const getServerSideProps: GetServerSideProps<{projects: Project[]}> = async () =>{
  const response = await fetch(
    'https://the-trivia-api.com/v2/questions',
    { cache: "no-cache" }
  );
  const data = await response.json();
  const projects = data[0];
  console.log("**projects",projects);
  return {
    props: {
      projects,
    }
  };
}
*/

async function getProjects() {
  const response = await fetch(
    'http://127.0.0.1:8090/api/collections/project/records?page=1&perPage=30',
    { cache: "no-cache" }
  )
  const data = await response.json();
  return data?.items as Project[];
}

type Project = {
  id: string;
  name: string;
};


//export default function Home({projects}: InferGetServerSidePropsType<typeof getServerSideProps>){

export default async function Home(){
  const projects = await getProjects();
  return (
    <main className="flex min-h-screen  items-center justify-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-center align-center font-mono text-sm flex-col lg:flex">
        <h1 className='text-5xl mb-8'>Todo-List App</h1>
        <h2 className='text-2xl mb-8'>Projects</h2>
        <div className='flex-row lg:flex'>
          {projects?.map((project:any) => {
            return <Link key={project.id} className="ml-2 p-2 bg-blue-600 text-white rounded-lg"
              href={`/project/${project.id}`}>{project?.name}</Link>
          })}
        </div>
      </div>
    </main>
  )
}

