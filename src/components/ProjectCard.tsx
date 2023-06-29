import img from '../assets/banner_img_1.jpg'
import { useContext } from 'react'
import StoreContext from '../StoreContext'
import SkillPill from './SkillPill'
import ProjectButton from './ProjectButton'

const Project = () => {
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
          href='https://www.google.es'
          target='_blank'
          className='h-full block relative group'
        >
          <div className='relative pb-[45%]'>
            <img
              src={img}
              alt=''
              className='inline-block absolute w-full h-full object-cover border border-b-[6px] rounded-xl transition duration-300  bg-white border-slate-300 group-hover:border-slate-400 shadow-md dark:group-hover:border-slate-500'
            />
          </div>
          <div className='absolute bottom-5 left-5 flex gap-3'>
            <SkillPill skill='React' />
            <SkillPill skill='Javascript' />
            <SkillPill skill='GIT' />
            <SkillPill skill='TESTING SF RS' />
          </div>
        </a>
        <div className='flex justify-between items-center my-5 px-8'>
          <div className='max-w-[70%] self-center transition durantion-300 text-2xl dark:text-slate-800'>
            Super title
          </div>
          <div className='flex flex-wrap justify-end gap-2'>
            <ProjectButton link='https://www.goggle.es' type='Code' />
            <ProjectButton link='https://www.goggle.es' type='View' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
