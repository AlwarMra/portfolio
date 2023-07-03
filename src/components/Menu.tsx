import { useContext } from 'react'
import StoreContext from 'src/StoreContext'
import { Link } from 'wouter'
import { DarkIcon, DayIcon } from './Icons'

const Menu = () => {
  const { theme, toggleTheme, THEME } = useContext(StoreContext)
  return (
    <div className='flex w-full flex-1 mx-auto items-center justify-between text-xs min-h-[2.5rem] mb-10 max-lg:border-b max-lg:border-slate-300'>
      <Link
        href='/'
        className='hover:blur-[1px] inline-block pr-4 lg:border-r lg:border-slate-300'
      >
        Alwar Müra
      </Link>
      <div>
        <span
          onClick={toggleTheme}
          className={
            'cursor-pointer inline-block p-1 hover:rounded ' +
            (theme === THEME.DARK ? 'hover:bg-slate-700' : 'hover:bg-slate-200')
          }
        >
          {theme === THEME.DARK ? <DarkIcon /> : <DayIcon />}
        </span>
      </div>
    </div>
  )
}

export default Menu
