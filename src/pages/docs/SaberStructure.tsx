import { PageTitle } from '../../components/PageTitle'
import { Section } from '../../components/Section'

const SaberStructure = () => {
  return (
    <div>
      <PageTitle>Saber Structure</PageTitle>

      <Section title='Overview'>
        <p className='text-gray-600 dark:text-gray-400 mb-4'>
          Understanding the core components and architecture of your X-Saber IV
        </p>
      </Section>

      <Section title='Core Components'>
        <p>
          The X-Saber IV features a modular design philosophy, allowing for complete customization while maintaining
          structural integrity. Each component is precision-engineered for optimal performance and longevity.
        </p>
      </Section>

      <Section title='Hilt Assembly'>
        <div className='space-y-4'>
          <h4 className='font-semibold'>Primary Components:</h4>
          <ul className='list-disc ml-5 space-y-2'>
            <li>Emitter Matrix: Houses the blade projection system</li>
            <li>Activation Module: Contains the control switches and sensors</li>
            <li>Power Coupling: Manages energy distribution from the power cell</li>
            <li>Crystal Chamber: Holds and focuses the Kyber crystal</li>
            <li>Grip Section: Ergonomic handle with customizable materials</li>
            <li>Pommel Cap: Seals the power cell compartment</li>
          </ul>
        </div>
      </Section>

      <Section title='Internal Systems'>
        <div className='space-y-4'>
          <p>The internal architecture consists of three main subsystems:</p>
          <div className='grid gap-4'>
            <div className='p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg'>
              <h4 className='font-semibold text-purple-700 dark:text-purple-300'>Energy System</h4>
              <p className='mt-2 text-sm'>Power cell, energy cycling matrix, and blade length adjustment mechanism</p>
            </div>
            <div className='p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg'>
              <h4 className='font-semibold text-blue-700 dark:text-blue-300'>Control System</h4>
              <p className='mt-2 text-sm'>Main processor, gyroscopic stabilizers, and haptic feedback controllers</p>
            </div>
            <div className='p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg'>
              <h4 className='font-semibold text-emerald-700 dark:text-emerald-300'>Focus System</h4>
              <p className='mt-2 text-sm'>Kyber crystal mounting, focusing lens array, and blade modulation circuits</p>
            </div>
          </div>
        </div>
      </Section>

      <Section title='Design Philosophy'>
        <p>
          Every X-Saber IV is built with the principles of balance, efficiency, and personalization. The modular design
          allows users to swap components based on their combat style and preferences while maintaining the highest
          safety standards.
        </p>
      </Section>
    </div>
  )
}

export default SaberStructure
