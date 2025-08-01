import { AlertCircle, Wrench, Zap } from 'lucide-react'
import { PageTitle } from '../../components/PageTitle'
import { Section } from '../../components/Section'

const CommonIssues = () => {
  return (
    <div>
      <PageTitle>Common Issues</PageTitle>

      <Section title='Diagnostic Mode'>
        <div className='p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg mb-4'>
          <p className='text-sm'>
            Before troubleshooting, enter diagnostic mode by holding both activation switches while inserting the power
            cell. The LED will flash patterns indicating system status.
          </p>
        </div>
      </Section>

      <Section title='Power & Activation Issues'>
        <div className='space-y-4'>
          <div className='p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg'>
            <h4 className='font-semibold flex items-center gap-2 mb-3'>
              <AlertCircle className='size-4 text-red-500' />
              Saber Won't Turn On
            </h4>
            <div className='space-y-3'>
              <div>
                <p className='font-medium text-sm'>Possible Causes:</p>
                <ul className='mt-1 space-y-1 text-sm text-gray-600 dark:text-gray-400'>
                  <li>• Dead or incorrectly installed power cell</li>
                  <li>• Activation switch failure</li>
                  <li>• Main board disconnect</li>
                  <li>• Safety lockout engaged</li>
                </ul>
              </div>
              <div>
                <p className='font-medium text-sm'>Solutions:</p>
                <ol className='mt-1 list-decimal ml-5 space-y-1 text-sm'>
                  <li>Check power cell charge and orientation</li>
                  <li>Clean activation switch contacts</li>
                  <li>Verify all internal connections</li>
                  <li>Reset safety lockout (hold for 10 seconds)</li>
                </ol>
              </div>
            </div>
          </div>

          <div className='p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg'>
            <h4 className='font-semibold flex items-center gap-2 mb-3'>
              <Zap className='size-4 text-yellow-500' />
              Intermittent Power Loss
            </h4>
            <div className='space-y-3'>
              <div>
                <p className='font-medium text-sm'>Possible Causes:</p>
                <ul className='mt-1 space-y-1 text-sm text-gray-600 dark:text-gray-400'>
                  <li>• Loose battery connections</li>
                  <li>• Corroded contacts</li>
                  <li>• Failing power cell</li>
                  <li>• Overheating protection</li>
                </ul>
              </div>
              <div>
                <p className='font-medium text-sm'>Solutions:</p>
                <ol className='mt-1 list-decimal ml-5 space-y-1 text-sm'>
                  <li>Tighten all power connections</li>
                  <li>Clean contacts with isopropyl alcohol</li>
                  <li>Replace power cell if over 2 years old</li>
                  <li>Allow 15-minute cooldown period</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title='Blade & Crystal Issues'>
        <div className='space-y-4'>
          <div className='p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg'>
            <h4 className='font-semibold mb-3'>Unstable or Flickering Blade</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <p className='font-medium text-sm mb-2'>Symptoms:</p>
                <ul className='space-y-1 text-sm text-gray-600 dark:text-gray-400'>
                  <li>• Blade flickers randomly</li>
                  <li>• Color shifts unexpectedly</li>
                  <li>• Pulsing intensity</li>
                  <li>• Shortened blade length</li>
                </ul>
              </div>
              <div>
                <p className='font-medium text-sm mb-2'>Quick Fixes:</p>
                <ul className='space-y-1 text-sm'>
                  <li>✓ Re-seat the kyber crystal</li>
                  <li>✓ Clean crystal contacts</li>
                  <li>✓ Check focusing lens alignment</li>
                  <li>✓ Update firmware to latest version</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg'>
            <h4 className='font-semibold mb-3'>No Blade Projection</h4>
            <p className='text-sm mb-2'>If the saber powers on but no blade appears:</p>
            <ol className='list-decimal ml-5 space-y-1 text-sm'>
              <li>Verify emitter matrix is properly installed</li>
              <li>Check for obstructions in the emitter port</li>
              <li>Ensure crystal is not cracked or damaged</li>
              <li>Test in safe mode (single press activation)</li>
              <li>Inspect focusing lens for cloudiness</li>
            </ol>
          </div>
        </div>
      </Section>

      <Section title='Sound & Effects Problems'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg'>
            <h4 className='font-semibold mb-2'>No Sound Output</h4>
            <ul className='space-y-1 text-sm'>
              <li>• Check volume settings in config</li>
              <li>• Verify speaker connections</li>
              <li>• Test with different sound font</li>
              <li>• Reset audio processor</li>
            </ul>
          </div>
          <div className='p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg'>
            <h4 className='font-semibold mb-2'>Distorted Audio</h4>
            <ul className='space-y-1 text-sm'>
              <li>• Lower volume to 80%</li>
              <li>• Check for speaker damage</li>
              <li>• Clear audio cache files</li>
              <li>• Update sound drivers</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title='Motion & Sensor Issues'>
        <div className='p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg'>
          <h4 className='font-semibold flex items-center gap-2 mb-3'>
            <Wrench className='size-4 text-amber-600' />
            Calibration Required
          </h4>
          <p className='text-sm mb-3'>If motion detection seems off or clash detection is too sensitive/insensitive:</p>
          <ol className='list-decimal ml-5 space-y-2 text-sm'>
            <li>Place saber on flat surface and power on while holding auxiliary button</li>
            <li>Wait for three beeps indicating calibration mode</li>
            <li>Follow the LED prompts for each axis calibration</li>
            <li>Perform test swings to verify proper detection</li>
            <li>Save calibration with double-click on main switch</li>
          </ol>
        </div>
      </Section>

      <Section title='Quick Reference Table'>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead className='bg-gray-50 dark:bg-gray-900/50'>
              <tr>
                <th className='text-left p-3'>LED Pattern</th>
                <th className='text-left p-3'>Issue</th>
                <th className='text-left p-3'>Action Required</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
              <tr>
                <td className='p-3'>
                  <span className='text-red-500'>● ● ●</span> Fast Red
                </td>
                <td className='p-3'>Critical Error</td>
                <td className='p-3'>Power cycle and check connections</td>
              </tr>
              <tr>
                <td className='p-3'>
                  <span className='text-yellow-500'>● ● --</span> Yellow Pulse
                </td>
                <td className='p-3'>Low Battery</td>
                <td className='p-3'>Charge or replace power cell</td>
              </tr>
              <tr>
                <td className='p-3'>
                  <span className='text-blue-500'>● -- ●</span> Blue Alternating
                </td>
                <td className='p-3'>Firmware Update</td>
                <td className='p-3'>Complete update process</td>
              </tr>
              <tr>
                <td className='p-3'>
                  <span className='text-green-500'>●●●●●</span> Solid Green
                </td>
                <td className='p-3'>System OK</td>
                <td className='p-3'>Normal operation</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section title='When to Contact Support'>
        <div className='p-4 bg-red-50 dark:bg-red-900/20 rounded-lg'>
          <p className='font-medium mb-2'>Contact technical support if:</p>
          <ul className='space-y-1 text-sm'>
            <li>• Physical damage to crystal or internal components</li>
            <li>• Burnt smell or visible smoke</li>
            <li>• Error codes not listed in manual</li>
            <li>• Issues persist after following all troubleshooting steps</li>
            <li>• Warranty seal needs to be broken for repair</li>
          </ul>
          <p className='mt-3 text-sm font-medium'>Support Portal: support.x-saber.com | Emergency: 1-800-XSABER4</p>
        </div>
      </Section>
    </div>
  )
}

export default CommonIssues
