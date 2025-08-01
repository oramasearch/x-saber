import { Package2, Puzzle, Shield, Wrench } from 'lucide-react'
import { PageTitle } from '../../components/PageTitle'
import { Section } from '../../components/Section'

const ModularUpgrades = () => {
  return (
    <div>
      <PageTitle>Modular Upgrades</PageTitle>

      <Section title='Upgrade System Overview'>
        <p>
          The X-Saber IV features a fully modular architecture, allowing users to customize and upgrade individual
          components without replacing the entire unit. All upgrades are hot-swappable and automatically recognized by
          the control system.
        </p>
      </Section>

      <Section title='Available Upgrade Modules'>
        <div className='grid gap-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg'>
              <Package2 className='size-5 text-blue-600 dark:text-blue-400 mb-2' />
              <h4 className='font-semibold'>Emitter Upgrades</h4>
              <ul className='mt-2 space-y-1 text-sm'>
                <li>• Bifurcating Cyclical-Ignition Pulse</li>
                <li>• Damping Emitter for stealth operations</li>
                <li>• Deflection Emitter for enhanced defense</li>
                <li>• Disrupting Emitter for shield penetration</li>
              </ul>
            </div>
            <div className='p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg'>
              <Puzzle className='size-5 text-purple-600 dark:text-purple-400 mb-2' />
              <h4 className='font-semibold'>Crystal Focusing Arrays</h4>
              <ul className='mt-2 space-y-1 text-sm'>
                <li>• Solari Crystal Lens (+15% efficiency)</li>
                <li>• Krayt Dragon Pearl Chamber</li>
                <li>• Dual-crystal Configuration</li>
                <li>• Unstable Crystal Stabilizer</li>
              </ul>
            </div>
            <div className='p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg'>
              <Wrench className='size-5 text-emerald-600 dark:text-emerald-400 mb-2' />
              <h4 className='font-semibold'>Hilt Modifications</h4>
              <ul className='mt-2 space-y-1 text-sm'>
                <li>• Extended Grip for two-handed combat</li>
                <li>• Curved Hilt for Form II practitioners</li>
                <li>• Shoto Configuration for dual-wielding</li>
                <li>• Pike Extension Module</li>
              </ul>
            </div>
            <div className='p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg'>
              <Shield className='size-5 text-amber-600 dark:text-amber-400 mb-2' />
              <h4 className='font-semibold'>Combat Enhancements</h4>
              <ul className='mt-2 space-y-1 text-sm'>
                <li>• Cortosis-weave Coating</li>
                <li>• Phrik Alloy Reinforcement</li>
                <li>• Blade Lock Mechanism</li>
                <li>• Trakata Quick-release System</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section title='Installation Process'>
        <div className='space-y-4'>
          <p className='text-sm text-gray-600 dark:text-gray-400'>
            All modules are designed for user installation with minimal tools required.
          </p>
          <ol className='list-decimal ml-5 space-y-2'>
            <li>Power down the saber completely</li>
            <li>Remove the appropriate access panel</li>
            <li>Disconnect the existing module (if applicable)</li>
            <li>Insert the new upgrade module until it clicks</li>
            <li>Replace the access panel</li>
            <li>Power on - the system will auto-detect and configure</li>
          </ol>
        </div>
      </Section>

      <Section title='Compatibility Matrix'>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead className='bg-gray-50 dark:bg-gray-900/50'>
              <tr>
                <th className='text-left p-3'>Module Type</th>
                <th className='text-left p-3'>X-Saber IV</th>
                <th className='text-left p-3'>X-Saber III</th>
                <th className='text-left p-3'>Legacy Models</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
              <tr>
                <td className='p-3'>Emitter Modules</td>
                <td className='p-3 text-green-600'>✓ Full Support</td>
                <td className='p-3 text-yellow-600'>✓ With Adapter</td>
                <td className='p-3 text-red-600'>✗ Not Compatible</td>
              </tr>
              <tr>
                <td className='p-3'>Crystal Arrays</td>
                <td className='p-3 text-green-600'>✓ Full Support</td>
                <td className='p-3 text-green-600'>✓ Full Support</td>
                <td className='p-3 text-yellow-600'>✓ Limited</td>
              </tr>
              <tr>
                <td className='p-3'>Power Systems</td>
                <td className='p-3 text-green-600'>✓ Full Support</td>
                <td className='p-3 text-red-600'>✗ Not Compatible</td>
                <td className='p-3 text-red-600'>✗ Not Compatible</td>
              </tr>
              <tr>
                <td className='p-3'>Control Boards</td>
                <td className='p-3 text-green-600'>✓ Full Support</td>
                <td className='p-3 text-yellow-600'>✓ Firmware Update</td>
                <td className='p-3 text-red-600'>✗ Not Compatible</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section title='Performance Impact'>
        <div className='p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg'>
          <p className='mb-3'>Each upgrade module affects the saber's performance characteristics:</p>
          <ul className='space-y-2 text-sm'>
            <li>
              <span className='font-medium'>Power Consumption:</span> Varies by module, typically +5% to +20%
            </li>
            <li>
              <span className='font-medium'>Weight Distribution:</span> May require rebalancing for optimal handling
            </li>
            <li>
              <span className='font-medium'>Heat Generation:</span> High-performance modules may require cooling
              upgrades
            </li>
            <li>
              <span className='font-medium'>Compatibility:</span> Some modules may conflict; check matrix before
              installation
            </li>
          </ul>
        </div>
      </Section>
    </div>
  )
}

export default ModularUpgrades
