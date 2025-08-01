import { Camera, FileText, HelpCircle, Wand2 } from 'lucide-react'
import Card from '../../components/Card'
import { PageTitle } from '../../components/PageTitle'
import { Section } from '../../components/Section'

const Overview = () => {
  return (
    <div>
      <PageTitle>Getting Started</PageTitle>

      <Section title='Overview'>
        <p className='pb-4'>Welcome to X-Saber IV — the next generation in customizable saber technology.</p>
        <p className='pb-4'>
          X-Saber IV combines modular engineering, digital customization, and open-source firmware.
        </p>
        <p className='pb-4'>
          Whether you're a maker, cosplayer, collector, or aspiring Jedi, this documentation will help you build,
          personalize, and master your saber.
        </p>
      </Section>

      <Section title='Documentation Sections'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* Quick Start Card */}
          <Card
            icon={<Camera className='size-6 text-emerald-500' />}
            title='Quick Start Guide'
            description='From unboxing to first ignition in 5 minutes. Complete activation process and safety procedures.'
            to='/docs/quick-start'
          />

          {/* Tech Specs Card */}
          <Card
            icon={<FileText className='size-6 text-amber-500' />}
            title='Technical Specifications'
            description='Hardware components, crystal technology, power systems, and certification standards.'
            to='/docs/tech-specs'
          />

          {/* Advanced Config Card */}
          <Card
            icon={<Wand2 className='size-6 text-pink-500' />}
            title='Advanced Configuration'
            description='Combat modes, blade customization, Force tuning, and programming interfaces.'
          />

          {/* Combat Training Card */}
          <Card
            icon={<HelpCircle className='size-6 text-purple-500' />}
            title='Combat Training'
            description='Master all seven classical lightsaber forms with tutorials and performance analytics.'
          />
        </div>
      </Section>

      <Section title='What you’ll find in this documentation'>
        <ul className='list-disc ml-5'>
          <li>The core features of X-Saber IV</li>
          <li>What’s new in model IV vs previous generations</li>
          <li>Key safety and setup info</li>
          <li>A quick start checklist</li>
        </ul>
      </Section>

      <Section
        title='Why X-Saber IV?'
        hideDivider>
        <ul className='list-disc ml-5'>
          <li>Modular Design: Swap out hilt, emitter, and more</li>
          <li>Adaptive Kyber Core: Change blade color physically or digitally</li>
          <li>Programmable: Expand features via SaberOS API</li>
          <li>3D-Printable: Download and print official parts</li>
          <li>Duel-Ready Build: Engineered for both play and display</li>
        </ul>
      </Section>
    </div>
  )
}

export default Overview
