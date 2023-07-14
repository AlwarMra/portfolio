import { Link } from 'wouter'

const NotFound = () => {
  return (
    <>
      <div className='w-full relative lg:px-6 lg:border-l lg:border-slate-300 min-h-[87vh]'>
        <h2 className='font-bold text-2xl mb-8'>????</h2>
        <p>
          La página a la que intentas acceder no existe. Volvamos a la{' '}
          <Link href='/' className='font-semibold hover:opacity-70'>
            home.
          </Link>
        </p>
      </div>
    </>
  )
}

export default NotFound
