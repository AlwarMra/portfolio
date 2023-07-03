import { useContext } from 'react'
import Layout from './components/Layout'
import Menu from './components/Menu'
import StoreContext from './StoreContext'
import ProjectCard from './components/ProjectCard'
import { projects } from './data/projects'
import { Route } from 'wouter'
import Home from 'src/Home'

function App() {
  const { theme } = useContext(StoreContext)

  projects

  return (
    <div className={`${theme}`}>
      <Layout>
        <Route path='/' component={Home} />
      </Layout>
    </div>
  )
}

export default App
