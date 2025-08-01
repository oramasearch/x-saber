import { Flame, Palette, Sparkles, Zap } from 'lucide-react'
import { PageTitle } from '../../components/PageTitle'
import { Section } from '../../components/Section'

const BladeCharacteristics = () => {
  return (
    <div>
      <PageTitle>Blade Characteristics</PageTitle>

      <Section title='Blade Colors & Crystals'>
        <div className='grid gap-6'>
          <p>
            The blade color is determined by the Kyber crystal's attunement to the user's Force signature. Each crystal
            resonates at unique frequencies.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg'>
              <h4 className='font-semibold text-blue-700 dark:text-blue-300'>Blue Crystal</h4>
              <p className='text-sm mt-1'>Frequency: 450-490 THz • Associated with guardians and justice</p>
            </div>
            <div className='p-4 bg-green-50 dark:bg-green-900/20 rounded-lg'>
              <h4 className='font-semibold text-green-700 dark:text-green-300'>Green Crystal</h4>
              <p className='text-sm mt-1'>Frequency: 520-565 THz • Favored by consulars and scholars</p>
            </div>
            <div className='p-4 bg-red-50 dark:bg-red-900/20 rounded-lg'>
              <h4 className='font-semibold text-red-700 dark:text-red-300'>Red Crystal</h4>
              <p className='text-sm mt-1'>Frequency: 430-480 THz • Synthetic crystals, high power output</p>
            </div>
            <div className='p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg'>
              <h4 className='font-semibold text-purple-700 dark:text-purple-300'>Purple Crystal</h4>
              <p className='text-sm mt-1'>Frequency: 380-430 THz • Rare, balanced between light and dark</p>
            </div>
          </div>
        </div>
      </Section>

      <Section title='Blade Properties'>
        <div className='space-y-6'>
          <div className='grid gap-4'>
            <div className='flex items-start gap-3'>
              <Flame className='size-5 text-orange-500 mt-1' />
              <div>
                <h4 className='font-semibold'>Temperature</h4>
                <p className='text-sm text-gray-600 dark:text-gray-400 mt-1'>
                  Core temperature reaches 20,000°C, contained by magnetic field. Surface temperature varies from
                  1,800°C to 3,000°C depending on settings.
                </p>
              </div>
            </div>
            <div className='flex items-start gap-3'>
              <Zap className='size-5 text-yellow-500 mt-1' />
              <div>
                <h4 className='font-semibold'>Energy Output</h4>
                <p className='text-sm text-gray-600 dark:text-gray-400 mt-1'>
                  Standard output: 15-20 MW. Combat boost mode: up to 35 MW for limited duration. Energy cycling
                  prevents overheating.
                </p>
              </div>
            </div>
            <div className='flex items-start gap-3'>
              <Sparkles className='size-5 text-purple-500 mt-1' />
              <div>
                <h4 className='font-semibold'>Containment Field</h4>
                <p className='text-sm text-gray-600 dark:text-gray-400 mt-1'>
                  Magnetic bottle containment with 99.97% efficiency. Auto-adjusts for environmental conditions and
                  combat stress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title='Blade Modes'>
        <div className='grid gap-4'>
          <div className='p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg'>
            <h4 className='font-semibold mb-3'>Available Configurations</h4>
            <div className='space-y-3'>
              <div>
                <p className='font-medium text-sm'>Standard Mode</p>
                <p className='text-sm text-gray-600 dark:text-gray-400'>
                  Balanced power output, optimal for most combat situations
                </p>
              </div>
              <div>
                <p className='font-medium text-sm'>Training Mode</p>
                <p className='text-sm text-gray-600 dark:text-gray-400'>
                  Non-lethal setting with reduced power, safe for practice
                </p>
              </div>
              <div>
                <p className='font-medium text-sm'>Underwater Mode</p>
                <p className='text-sm text-gray-600 dark:text-gray-400'>
                  Modified containment field for submerged operation
                </p>
              </div>
              <div>
                <p className='font-medium text-sm'>Dual-Phase</p>
                <p className='text-sm text-gray-600 dark:text-gray-400'>
                  Allows instant blade length adjustment during combat
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title='Special Effects'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg'>
            <Palette className='size-5 text-amber-600 dark:text-amber-400 mb-2' />
            <h4 className='font-semibold'>Visual Customization</h4>
            <ul className='mt-2 space-y-1 text-sm'>
              <li>• Blade flicker patterns</li>
              <li>• Ignition/retraction effects</li>
              <li>• Core brightness adjustment</li>
              <li>• Unstable blade simulation</li>
            </ul>
          </div>
          <div className='p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg'>
            <Sparkles className='size-5 text-indigo-600 dark:text-indigo-400 mb-2' />
            <h4 className='font-semibold'>Audio Profiles</h4>
            <ul className='mt-2 space-y-1 text-sm'>
              <li>• Classic hum variations</li>
              <li>• Combat swing sounds</li>
              <li>• Clash detection audio</li>
              <li>• Custom font support</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default BladeCharacteristics
