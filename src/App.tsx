import { useContext } from 'react'
import Layout from './components/Layout'
import Menu from './components/Menu'
import StoreContext from './StoreContext'

function App() {
  const { theme } = useContext(StoreContext)

  return (
    <div className={`${theme}`}>
      <Layout>
        <div className='w-full pr-6 top-0 sticky'>
          <Menu />
          <div className='mb-6'>
            <h1 className='font-bold text-base'>Alwar Müra</h1>
            <p className='text-xs'>Web developer</p>M
          </div>
          <p className='text-sm lg:text-[1.1vw] pb-8 border-b border-slate-300'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, vitae
            eum. Ducimus dolore doloribus reiciendis corporis aliquid provident
            molestias facere, sequi accusamus porro consequuntur magnam
            inventore fuga autem cum excepturi.
          </p>
        </div>

        <div className='w-full relative lg:px-6 lg:border-l lg:border-slate-300'>
          righ <div>dffdgfdg</div>
        </div>
      </Layout>
    </div>
  )
}

export default App
