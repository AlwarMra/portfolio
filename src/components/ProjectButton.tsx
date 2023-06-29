import { GithubIcon, WatchIcon } from './Icons'

type IProjectButton = {
  link: string
  type: 'View' | 'Code'
}

const ProjectButton = ({ link, type }: IProjectButton) => {
  return (
    <a href={link} target='_blank'>
      <div className='group flex items-center border rounded-md px-4 py-2 text-xs bg-white border-slate-300 transition duration-300  cursor-pointer group-hover:border-slate-600'>
        <div className='w-5 h-5 mr-3'>
          {type === 'Code' ? <GithubIcon /> : <WatchIcon />}
        </div>
        <span className='dark:text-slate-800'>{type}</span>
      </div>
    </a>
  )
}

export default ProjectButton
