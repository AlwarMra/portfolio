import { useContext } from 'react'
import { Route, Switch } from 'wouter'
import { projects } from 'src/data/projects'
import StoreContext from 'src/StoreContext'
//Pages
import Home from 'src/components/Home'
import Resources from 'src/components/Resources'
//Components
import Layout from 'src/components/Layout'
import Menu from 'src/components/Menu'
import NotFound from './components/NotFound'

function App() {
  const { theme } = useContext(StoreContext)

  projects

  return (
    <div className={`${theme}`}>
      <Layout>
        <div className='w-full top-0 sticky mb-8 lg:pr-6 lg:mb-0'>
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
        <Switch>
          <Route path='/' component={Home} />
          <Route path='/resources' component={Resources} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </div>
  )
}

export default App
