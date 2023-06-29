import { useContext } from 'react'
import StoreContext from '../StoreContext'
import SkillPill from './SkillPill'
import ProjectButton from './ProjectButton'
import { IProject } from '../types'

const Project = ({ project }: { project: IProject }) => {
  const { theme, THEME } = useContext(StoreContext)
  return (
    <div className='mt-1 mb-10'>
      <div
        className='inline-block w-full rounded-b-xl'
        style={{
          backgroundImage:
            theme === THEME.DARK
              ? 'linear-gradient(rgba(255, 255, 255, 0.04) 25%, rgba(255, 255, 255, 0.87))'
              : 'linear-gradient(rgba(255,255,255,0) 26%,rgba(0,0,0,.06))',
        }}
      >
        <a
          href={project.url}
          target='_blank'
          className='h-full block relative group'
        >
          <div className='relative pb-[45%]'>
            <img
              src={project.img}
              alt={project.title + ' web screenshot'}
              loading='lazy'
              className='inline-block absolute w-full h-full object-cover object-top border border-b-[6px] rounded-xl transition duration-300  bg-white border-slate-300 group-hover:border-slate-400 shadow-md dark:group-hover:border-slate-500'
            />
          </div>
          <div className='absolute bottom-5 left-5 flex gap-3'>
            {project.tech.map(t => (
              <SkillPill skill={t} />
            ))}
          </div>
        </a>
        <div className='flex justify-between items-center my-5 px-8'>
          <div className='max-w-[70%] self-center transition durantion-300 text-2xl dark:text-slate-800'>
            {project.title}
          </div>
          <div className='flex flex-wrap justify-end gap-2'>
            <ProjectButton link={project.github_url} type='Code' />
            <ProjectButton link={project.url} type='View' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
