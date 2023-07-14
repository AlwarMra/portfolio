import ProjectCard from 'src/components/ProjectCard'
import { projects } from 'src/data/projects'

const Home = () => {
  return (
    <>
      <div className='w-full relative lg:px-6 lg:border-l lg:border-slate-300'>
        <h2 className='font-bold text-2xl mb-8'>Projects</h2>
        {projects.map(proj => (
          <ProjectCard project={proj} />
        ))}
      </div>
    </>
  )
}

export default Home
