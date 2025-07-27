import backgroundVideoMP4 from '../assets/2297636-1080p.mp4'
import backgroundVideoWebM from '../assets/2297636-1080p.webm'
import lightsaber from '../assets/lightsaber.png'
import logo from '../assets/logo.svg'

function Home() {
  return (
    <div className='relative flex flex-col h-screen overflow-hidden'>
      {/* Background with lightsaber */}
      <div className='pointer-events-none'>
        {/* Background Video */}
        <video
          className='absolute inset-0 w-full h-full object-cover opacity-40'
          autoPlay
          muted
          loop
          playsInline>
          <source
            src={backgroundVideoWebM}
            type='video/webm'
          />
          <source
            src={backgroundVideoMP4}
            type='video/mp4'
          />
        </video>

        {/* Background Gradient */}
        <div
          className='absolute inset-0'
          style={{
            background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 33.25%, #000 95.35%)'
          }}></div>

        {/* Lightsaber */}
        <div
          className='absolute top-0 right-[15%] h-[150%] w-auto translate-y-[-10%] min-w-[300px] rotate-[9.1deg] shrink-0 mix-blend-plus-lighter overflow-visible rounded-b-4xl'
          style={{
            background: `url(${lightsaber})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            WebkitMaskImage: 'radial-gradient(ellipse 60% 80% at center, black 40%, transparent 80%)',
            maskImage: 'radial-gradient(ellipse 60% 80% at center, black 40%, transparent 80%)'
          }}
        />

        {/* Lightsaber Gradient */}
        <div
          className='absolute inset-0 mix-blend-plus-lighter'
          style={{
            background: 'radial-gradient(80% 80% at 50.04% 50%, rgba(155, 53, 234, 0.2) 0%, rgba(0, 0, 0, 0.20) 100%)'
          }}
        />
      </div>

      {/* Page */}
      <div className='flex flex-col h-screen z-10'>
        {/* Header */}
        <div className='flex items-center p-2 border-y border-gray-800 bg-[rgba(10,10,10,0.80)] backdrop-blur-xl'>
          <div className='flex px-6 items-center'>
            <img
              src={logo}
              alt='logo'
              className='w-10 h-10'
            />
            <span
              className='-m-1'
              style={{ fontFamily: 'var(--font-family-michroma)' }}>
              -Saber
            </span>
          </div>

          {/* Items */}
          <div className='flex gap-4 text-xs items-center'>
            <div>Docs</div>
            <div>Blog</div>
            <div>FAQ</div>
          </div>

          {/* Search */}
          <div className='flex flex-grow justify-end items-center'>
            <button
              type='button'
              className='p-2'>
              May curiosity be with you
            </button>
          </div>
        </div>

        {/* Content */}
        <div className='flex flex-grow items-center p-10'>
          <div className='flex flex-col gap-4'>
            <div className='text-xl font-medium text-muted-foreground'>X-Saber IV</div>
            <div className='text-6xl leading-none font-bold text-foreground text-shadow-glow'>
              <div>Power. Precision.</div>
              <div>Pure Energy.</div>
            </div>
            <div className='text-xl font-medium text-muted-foreground mt-1'>
              Explore the updated specifications of the newest model
            </div>
            <div className='flex flex-col items-start gap-1 mt-10'>
              <button type='button'>See documentation</button>
              <button type='button'>What is required to build it?</button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className='flex items-center border-t border-gray-200/15 p-6 text-sm'>
          <div className='flex gap-6 px-6 items-center'>
            <div>Privacy Policy</div>
            <div>Terms of Service</div>
            <div>Cookies Settings</div>
          </div>
          <div className='flex flex-grow justify-end'>XSaber™ 2025</div>
        </div>
      </div>
    </div>
  )
}

export default Home
