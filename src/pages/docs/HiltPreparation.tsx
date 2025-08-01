import { AlertCircle, CheckCircle, Shield, Wrench } from 'lucide-react'
import { PageTitle } from '../../components/PageTitle'
import { Section } from '../../components/Section'

const HiltPreparation = () => {
  return (
    <div>
      <PageTitle>Hilt Preparation</PageTitle>

      <Section title='Pre-Assembly Checklist'>
        <p className='mb-4'>
          Before beginning assembly, ensure your workspace and components are properly prepared. This preparation phase
          is crucial for a successful build.
        </p>
        <div className='grid gap-4'>
          <div className='p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg'>
            <h4 className='font-semibold flex items-center gap-2 mb-3'>
              <Wrench className='size-4 text-blue-500' />
              Required Tools
            </h4>
            <ul className='space-y-2 text-sm'>
              <li className='flex items-start gap-2'>
                <CheckCircle className='size-4 text-green-500 mt-0.5' />
                <span>Precision screwdriver set (included)</span>
              </li>
              <li className='flex items-start gap-2'>
                <CheckCircle className='size-4 text-green-500 mt-0.5' />
                <span>Anti-static wrist strap</span>
              </li>
              <li className='flex items-start gap-2'>
                <CheckCircle className='size-4 text-green-500 mt-0.5' />
                <span>Soft cloth or microfiber towel</span>
              </li>
              <li className='flex items-start gap-2'>
                <CheckCircle className='size-4 text-green-500 mt-0.5' />
                <span>Clean, flat work surface</span>
              </li>
              <li className='flex items-start gap-2'>
                <CheckCircle className='size-4 text-green-500 mt-0.5' />
                <span>Good lighting (minimum 500 lux)</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title='Workspace Setup'>
        <div className='space-y-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg'>
              <h4 className='font-semibold mb-2'>Environmental Requirements</h4>
              <ul className='space-y-1 text-sm'>
                <li>• Temperature: 18-25°C (64-77°F)</li>
                <li>• Humidity: 30-50% RH</li>
                <li>• Dust-free environment</li>
                <li>• No magnetic fields nearby</li>
              </ul>
            </div>
            <div className='p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg'>
              <h4 className='font-semibold mb-2'>Safety Precautions</h4>
              <ul className='space-y-1 text-sm'>
                <li>• Ground yourself before handling</li>
                <li>• Keep liquids away</li>
                <li>• No open flames</li>
                <li>• Secure small parts</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section title='Hilt Inspection'>
        <ol className='list-decimal ml-5 space-y-3'>
          <li>
            <span className='font-medium'>Visual Inspection:</span>
            <p className='text-sm text-gray-600 dark:text-gray-400 mt-1'>
              Check for any visible damage, scratches, or manufacturing defects on the hilt exterior.
            </p>
          </li>
          <li>
            <span className='font-medium'>Thread Check:</span>
            <p className='text-sm text-gray-600 dark:text-gray-400 mt-1'>
              Verify all threaded sections turn smoothly without binding or cross-threading.
            </p>
          </li>
          <li>
            <span className='font-medium'>Port Inspection:</span>
            <p className='text-sm text-gray-600 dark:text-gray-400 mt-1'>
              Ensure charging port and control interfaces are clean and unobstructed.
            </p>
          </li>
          <li>
            <span className='font-medium'>Internal Check:</span>
            <p className='text-sm text-gray-600 dark:text-gray-400 mt-1'>
              Look inside the hilt for any foreign objects or loose components.
            </p>
          </li>
        </ol>
      </Section>

      <Section title='Component Staging'>
        <div className='p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg'>
          <Shield className='size-5 text-purple-600 dark:text-purple-400 mb-2' />
          <h4 className='font-semibold mb-3'>Organization Tips</h4>
          <ul className='space-y-2 text-sm'>
            <li>• Lay out all components in assembly order</li>
            <li>• Use the provided component tray to prevent rolling</li>
            <li>• Keep screws in their labeled compartments</li>
            <li>• Have the assembly manual open to the relevant section</li>
            <li>• Take photos before disassembly for reference</li>
          </ul>
        </div>
      </Section>

      <Section title='Pre-Assembly Preparation'>
        <div className='grid gap-4'>
          <div className='p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg'>
            <AlertCircle className='size-5 text-amber-600 dark:text-amber-400 mb-2' />
            <h4 className='font-semibold'>Final Steps Before Assembly</h4>
            <ol className='mt-3 list-decimal ml-5 space-y-2 text-sm'>
              <li>Clean all mating surfaces with provided alcohol wipes</li>
              <li>Apply thread-locker to screws as indicated in manual</li>
              <li>Charge the power cell to 50% (optimal for storage)</li>
              <li>Test fit all components without forcing</li>
              <li>Review the assembly video tutorial once more</li>
            </ol>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default HiltPreparation
