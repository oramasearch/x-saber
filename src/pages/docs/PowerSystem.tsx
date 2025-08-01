import { Battery, Clock, Gauge, Zap } from 'lucide-react'
import { PageTitle } from '../../components/PageTitle'
import { Section } from '../../components/Section'

const PowerSystem = () => {
  return (
    <div>
      <PageTitle>Power System</PageTitle>

      <Section title='Power Cell Technology'>
        <div className='grid gap-6'>
          <p>
            The X-Saber IV utilizes advanced Diatium power cells with quantum energy cycling for unprecedented
            efficiency and longevity.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg'>
              <Battery className='size-5 text-blue-600 dark:text-blue-400 mb-2' />
              <h4 className='font-semibold'>Primary Power Cell</h4>
              <ul className='mt-2 space-y-1 text-sm'>
                <li>• Type: Diatium Mark VII</li>
                <li>• Capacity: 5,000 mAh</li>
                <li>• Voltage: 12.6V nominal</li>
                <li>• Chemistry: Tibanna-gas enhanced</li>
              </ul>
            </div>
            <div className='p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg'>
              <Zap className='size-5 text-purple-600 dark:text-purple-400 mb-2' />
              <h4 className='font-semibold'>Backup System</h4>
              <ul className='mt-2 space-y-1 text-sm'>
                <li>• Emergency Cell: 500 mAh</li>
                <li>• Auto-activation on main failure</li>
                <li>• 30 minutes combat time</li>
                <li>• Self-charging via motion</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section title='Energy Management'>
        <div className='space-y-6'>
          <div className='p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg'>
            <h4 className='font-semibold mb-3'>Power Distribution Matrix</h4>
            <div className='grid gap-3'>
              <div className='flex justify-between items-center'>
                <span className='text-sm'>Blade Generation</span>
                <span className='text-sm text-gray-600 dark:text-gray-400'>65%</span>
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-sm'>Containment Field</span>
                <span className='text-sm text-gray-600 dark:text-gray-400'>20%</span>
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-sm'>Control Systems</span>
                <span className='text-sm text-gray-600 dark:text-gray-400'>10%</span>
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-sm'>Auxiliary Features</span>
                <span className='text-sm text-gray-600 dark:text-gray-400'>5%</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title='Charging & Runtime'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <h4 className='font-semibold flex items-center gap-2 mb-3'>
              <Clock className='size-4 text-emerald-500' />
              Runtime Specifications
            </h4>
            <ul className='space-y-2 text-sm'>
              <li>• Continuous Combat: 4 hours</li>
              <li>• Standard Use: 8-10 hours</li>
              <li>• Standby Mode: 30 days</li>
              <li>• Training Mode: 6 hours</li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold flex items-center gap-2 mb-3'>
              <Gauge className='size-4 text-amber-500' />
              Charging Options
            </h4>
            <ul className='space-y-2 text-sm'>
              <li>• Fast Charge: 80% in 30 minutes</li>
              <li>• Standard Charge: Full in 2 hours</li>
              <li>• Wireless Charging: Qi-compatible</li>
              <li>• Solar Charging: Emergency backup</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title='Power Optimization'>
        <div className='grid gap-4'>
          <p>
            The intelligent power management system continuously monitors and adjusts energy distribution for optimal
            performance.
          </p>
          <div className='p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg'>
            <h4 className='font-semibold text-emerald-700 dark:text-emerald-300'>Adaptive Features</h4>
            <ul className='mt-2 space-y-1 text-sm'>
              <li>• Dynamic blade intensity adjustment</li>
              <li>• Combat mode power boost</li>
              <li>• Low-power training mode</li>
              <li>• Automatic sleep after 5 minutes idle</li>
              <li>• Temperature-based throttling</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default PowerSystem
