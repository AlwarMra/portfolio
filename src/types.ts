export type IProject = {
  title: string
  img: string
  url: string
  github_url: string
  tech: string[]
}

export type IResource = {
  name: string
  url: string
}

export type IListResource = {
  title: string
  resources: IResource[]
}
