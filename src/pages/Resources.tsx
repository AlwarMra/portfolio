import { resources as data } from 'src/data/resources'

const Resources = () => {
  return (
    <div className='w-full relative lg:px-6 lg:border-l lg:border-slate-300'>
      <h2 className='font-bold text-2xl mb-8'>Resources</h2>
      <div className='grid grid-cols-2 gap-4'>
        {data.map(elem => (
          <div>
            <h3 className='font-bold mb-2'>{elem.title}</h3>
            {elem.resources.map(res => (
              <a
                href={res.url}
                target='_blank'
                className='block text-sm mb-1 hover:opacity-80'
              >
                - {res.name}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Resources
