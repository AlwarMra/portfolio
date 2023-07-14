import {
  CSSIcon,
  FirebaseIcon,
  GitIcon,
  HtmlIcon,
  JQueryIcon,
  JavascriptIcon,
  NextIcon,
  NodeIcon,
  NpmIcon,
  ReactIcon,
  ShopifyIcon,
  TailwindIcon,
  TypescriptIcon,
} from './Icons'

const Skills = () => {
  const icons = [
    HtmlIcon,
    CSSIcon,
    JavascriptIcon,
    TypescriptIcon,
    ReactIcon,
    NextIcon,
    NodeIcon,
    FirebaseIcon,
    GitIcon,
    JQueryIcon,
    NpmIcon,
    TailwindIcon,
    ShopifyIcon,
  ]
  return (
    <div className='flex flex-wrap gap-2 mt-3 p-2 rounded-md bg-slate-200 dark:bg-slate-600 '>
      {icons.map((Icon, i) => (
        <span className='block w-8 h-8 hover:scale-110 duration-150'>
          <Icon key={i} />
        </span>
      ))}
    </div>
  )
}

export default Skills
