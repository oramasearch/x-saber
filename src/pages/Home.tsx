import backgroundVideoMP4 from '../assets/2297636-1080p.mp4'
import backgroundVideoWebM from '../assets/2297636-1080p.webm'
import lightsaber from '../assets/lightsaber.png'
import { Button } from '../components/Button'
import { Search } from '../components/Search'

function Home() {
  return (
    <div className='relative flex flex-col flex-grow w-full overflow-hidden p-10'>
      {/* Content */}
      <div className='flex items-center justify-center flex-grow'>
        <div className='flex flex-grow max-w-[1200px] z-10'>
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
              <Button to='/#'>See documentation</Button>
              <button type='button'>What is required to build it?</button>
              <Search />
            </div>
          </div>
        </div>
      </div>

      {/* Background with lightsaber */}
      <div className='pointer-events-none z-1'>
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
          className='absolute top-0 right-[20%] h-[150%] w-auto translate-y-[-10%] min-w-[300px] rotate-[9.1deg] shrink-0 mix-blend-plus-lighter overflow-visible rounded-b-4xl'
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
    </div>
  )
}

export default Home
