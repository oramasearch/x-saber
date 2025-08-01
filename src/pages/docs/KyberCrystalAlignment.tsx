import { Activity, AlertTriangle, Focus, Gem } from 'lucide-react'
import { PageTitle } from '../../components/PageTitle'
import { Section } from '../../components/Section'

const KyberCrystalAlignment = () => {
  return (
    <div>
      <PageTitle>Kyber Crystal Alignment</PageTitle>

      <Section title='Understanding Crystal Alignment'>
        <p>
          Crystal alignment is the most critical step in lightsaber construction. Proper alignment ensures optimal
          energy flow, blade stability, and prevents dangerous malfunctions. This process requires patience and
          precision.
        </p>
      </Section>

      <Section title='Alignment Procedure'>
        <div className='space-y-6'>
          <ol className='list-decimal ml-5 space-y-4'>
            <li>
              <span className='font-medium'>Crystal Chamber Access</span>
              <p className='text-sm text-gray-600 dark:text-gray-400 mt-1'>
                Remove the crystal chamber access panel by rotating counterclockwise. Use gentle pressure to avoid
                damaging the seals.
              </p>
            </li>
            <li>
              <span className='font-medium'>Initial Placement</span>
              <p className='text-sm text-gray-600 dark:text-gray-400 mt-1'>
                Place the crystal in the primary cradle with the apex pointing toward the emitter. The crystal should
                rest freely without forcing.
              </p>
            </li>
            <li>
              <span className='font-medium'>Focusing Lens Positioning</span>
              <p className='text-sm text-gray-600 dark:text-gray-400 mt-1'>
                Install the focusing lens array 12mm from the crystal apex. Use the alignment tool to ensure perfect
                perpendicularity.
              </p>
            </li>
            <li>
              <span className='font-medium'>Energy Conduit Connection</span>
              <p className='text-sm text-gray-600 dark:text-gray-400 mt-1'>
                Connect the primary and secondary energy conduits. You should hear a soft click when properly seated.
              </p>
            </li>
          </ol>
        </div>
      </Section>

      <Section title='Alignment Verification'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg'>
            <Focus className='size-5 text-blue-600 dark:text-blue-400 mb-2' />
            <h4 className='font-semibold'>Visual Indicators</h4>
            <ul className='mt-2 space-y-1 text-sm'>
              <li>• Crystal sits level in cradle</li>
              <li>• No visible gaps around mounting points</li>
              <li>• Lens array reflects evenly</li>
              <li>• All connection points secure</li>
            </ul>
          </div>
          <div className='p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg'>
            <Activity className='size-5 text-purple-600 dark:text-purple-400 mb-2' />
            <h4 className='font-semibold'>Electronic Testing</h4>
            <ul className='mt-2 space-y-1 text-sm'>
              <li>• Continuity test: {'<'} 0.5Ω</li>
              <li>• Resonance frequency: ±2Hz</li>
              <li>• Energy efficiency: {'>'} 94%</li>
              <li>• Field stability: {'<'} 0.1% variance</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title='Fine Tuning'>
        <div className='p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg'>
          <h4 className='font-semibold mb-3'>Micro-Adjustment Process</h4>
          <div className='space-y-3'>
            <p className='text-sm'>Use the included calibration tool to make micro-adjustments:</p>
            <ul className='space-y-2 text-sm'>
              <li>
                <span className='font-medium'>X-Axis:</span> Rotate adjustment screw A clockwise for positive adjustment
                (0.1mm per quarter turn)
              </li>
              <li>
                <span className='font-medium'>Y-Axis:</span> Rotate adjustment screw B for lateral positioning
              </li>
              <li>
                <span className='font-medium'>Z-Axis:</span> Use the depth gauge to set optimal focal length
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title='Common Alignment Issues'>
        <div className='space-y-4'>
          <div className='p-4 bg-red-50 dark:bg-red-900/20 rounded-lg'>
            <AlertTriangle className='size-5 text-red-600 dark:text-red-400 mb-2' />
            <h4 className='font-semibold text-red-700 dark:text-red-300'>Troubleshooting</h4>
            <ul className='mt-2 space-y-2 text-sm'>
              <li>
                <span className='font-medium'>Unstable blade:</span> Crystal not seated properly, re-check cradle
                alignment
              </li>
              <li>
                <span className='font-medium'>Power fluctuations:</span> Poor energy conduit connection, clean contacts
              </li>
              <li>
                <span className='font-medium'>Color variations:</span> Crystal contamination, clean with approved
                solvent
              </li>
              <li>
                <span className='font-medium'>No ignition:</span> Misaligned focusing lens, verify 12mm spacing
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title='Final Verification'>
        <div className='p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg'>
          <Gem className='size-5 text-emerald-600 dark:text-emerald-400 mb-2' />
          <h4 className='font-semibold'>Successful Alignment Checklist</h4>
          <ul className='mt-3 space-y-2 text-sm'>
            <li>✓ Crystal temperature remains stable (±2°C)</li>
            <li>✓ Energy output consistent across all power levels</li>
            <li>✓ No audible resonance or vibration</li>
            <li>✓ Blade ignition time {'<'} 0.5 seconds</li>
            <li>✓ Containment field symmetrical on all axes</li>
          </ul>
        </div>
      </Section>
    </div>
  )
}

export default KyberCrystalAlignment
