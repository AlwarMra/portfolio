import img from '../assets/bird.png'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='w-full bg-white overflow-hidden selection:bg-slate-800 selection:text-white lg:p-8 lg:h-screen'>
      <div className='h-full min-h bg-transparent rounded-3xl p-8 overflow-visible border-slate-300 backdrop-blur-lg lg:border'>
        <div className='w-full h-full min-h-full m-0 overflow-auto'>
          <div className='lg:grid grid-cols-custom gap-y-4 place-items-start'>
            {children}
            <img
              src={img}
              loading='lazy'
              className='h-[38vh] fixed bottom-0 opacity-60'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Layout
