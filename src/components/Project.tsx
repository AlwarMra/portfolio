import { Link } from 'wouter'

import img from '../assets/banner_img_1.jpg'
import { WatchIcon } from './Icons'
import { useContext } from 'react'
import StoreContext from '../StoreContext'
import SkillPill from './SkillPill'

const Project = () => {
  const { theme, THEME } = useContext(StoreContext)
  return (
    <div className='group mt-1 mb-10'>
      <Link
        href='/'
        className='inline-block w-full rounded-b-xl'
        style={{
          backgroundImage:
            theme === THEME.DARK
              ? 'linear-gradient(rgba(255, 255, 255, 0.04) 25%, rgba(255, 255, 255, 0.70))'
              : 'linear-gradient(rgba(255,255,255,0) 26%,rgba(0,0,0,.06))',
        }}
      >
        <div className='h-full relative'>
          <img
            src={img}
            alt=''
            className='inline-block border border-b-[6px] rounded-xl transition duration-300  bg-white border-slate-300 group-hover:border-slate-400 shadow-md dark:group-hover:border-slate-500'
          />
          <div className='absolute bottom-5 left-5 flex gap-3'>
            <SkillPill skill='React' />
            <SkillPill skill='Javascript' />
            <SkillPill skill='GIT' />
            <SkillPill skill='TESTING SF RS' />
          </div>
        </div>
        <div className='flex justify-between items-center my-5 px-8'>
          <div className='max-w-[70%] self-center transition durantion-300 text-2xl group-hover:opacity-70 dark:text-slate-800'>
            Super title
          </div>
          <div className=''>
            <div className='flex items-center border rounded-md px-4 py-2 text-xs bg-white border-slate-300 transition duration-300  group-hover:border-slate-600'>
              <div className='w-5 h-5 mr-3'>
                <WatchIcon />
              </div>
              <span className='dark:text-slate-800'>View</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Project
