import mantis_img from './assets/mantis_ssg.png'
import odas_img from './assets/odas_img.png'
import political_img from './assets/political_img.png'

import { IProject } from '../types'

export const projects: IProject[] = [
  {
    title: 'Mantis - SSG',
    img: mantis_img,
    url: 'https://mantis-ssg.vercel.app/',
    github_url: 'https://github.com/AlwarMra/mantis',
    tech: ['NodeJS', 'npm'],
  },
  {
    title: 'Odas Necias',
    img: odas_img,
    url: 'https://alwarmra.github.io/odas-necias/',
    github_url: 'https://github.com/AlwarMra/odas-necias',
    tech: ['React'],
  },
  {
    title: 'Political Compass',
    img: political_img,
    url: 'https://political-compass-tawny.vercel.app/',
    github_url: 'https://github.com/AlwarMra/political-compass',
    tech: ['Vue', 'Typescript'],
  },
]
