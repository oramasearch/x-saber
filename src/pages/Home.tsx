import { ChatRoot } from '@orama/ui/components/ChatRoot'
import backgroundVideoMP4 from '../assets/2297636-1080p.mp4'
import backgroundVideoWebM from '../assets/2297636-1080p.webm'
import lightsaber from '../assets/lightsaber.png'
import { Button } from '../components/Button'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { SearchWithSuggestions } from '../components/SearchWithSuggestions'
import { collectionManager } from '../OramaClient'

function Home() {
  return (
    <div className='relative flex h-dvh w-full flex-grow flex-col overflow-auto'>
      <div className='fixed top-0 right-0 left-0 z-11'>
        <Navbar />
      </div>
      {/* Content */}
      <div className='mt-[107px] flex flex-grow items-center justify-center p-10 md:mt-0'>
        <div className='z-2 flex max-w-[1200px] flex-grow'>
          <div className='flex flex-col gap-4'>
            <div className='text-muted-foreground text-xl font-medium'>X-Saber IV</div>
            <div className='text-foreground text-shadow-glow text-6xl leading-none font-bold'>
              <div>Power. Precision.</div>
              <div>Pure Energy.</div>
            </div>
            <div className='text-muted-foreground mt-1 text-xl font-medium'>
              Explore the updated specifications of the newest model
            </div>
            <div className='relative mt-10 flex flex-col items-start gap-3'>
              <Button to='/docs'>See documentation</Button>
              <ChatRoot client={collectionManager}>
                <SearchWithSuggestions className='' />
              </ChatRoot>
            </div>
          </div>
        </div>
      </div>

      {/* Background with lightsaber */}
      <div className='pointer-events-none z-1'>
        {/* Background Video */}
        <video
          className='fixed inset-0 h-full w-full object-cover opacity-40'
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
          className='fixed inset-0'
          style={{
            background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 33.25%, #000 95.35%)'
          }}
        />

        {/* Lightsaber */}
        <div
          className='fixed top-0 right-[20%] h-[150%] w-auto min-w-[300px] shrink-0 translate-y-[-10%] rotate-[9.1deg] overflow-visible rounded-b-4xl mix-blend-plus-lighter'
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
          className='fixed inset-0 mix-blend-plus-lighter'
          style={{
            background: 'radial-gradient(80% 80% at 50.04% 50%, rgba(155, 53, 234, 0.2) 0%, rgba(0, 0, 0, 0.20) 100%)'
          }}
        />
      </div>

      <div className='z-10 w-full'>
        <Footer />
      </div>
    </div>
  )
}

export default Home
