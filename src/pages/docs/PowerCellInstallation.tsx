import { AlertCircle, Battery, CheckCircle, Zap } from 'lucide-react'
import { PageTitle } from '../../components/PageTitle'
import { Section } from '../../components/Section'

const PowerCellInstallation = () => {
  return (
    <div>
      <PageTitle>Power Cell Installation</PageTitle>

      <Section title='Safety First'>
        <div className='p-4 bg-red-50 dark:bg-red-900/20 rounded-lg mb-4'>
          <AlertCircle className='size-5 text-red-600 dark:text-red-400 mb-2' />
          <h4 className='font-semibold text-red-700 dark:text-red-300'>Warning</h4>
          <ul className='mt-2 space-y-1 text-sm'>
            <li>• Ensure the saber is completely powered down before beginning</li>
            <li>• Never force the power cell into position</li>
            <li>• Keep power cells away from water and extreme temperatures</li>
            <li>• Use only approved Diatium power cells</li>
          </ul>
        </div>
      </Section>

      <Section title='Pre-Installation Check'>
        <ol className='list-decimal ml-5 space-y-3'>
          <li>
            <span className='font-medium'>Power Cell Inspection:</span>
            <p className='text-sm text-gray-600 dark:text-gray-400 mt-1'>
              Check for any physical damage, swelling, or corrosion on the contacts. The cell should be at 40-60% charge
              for initial installation.
            </p>
          </li>
          <li>
            <span className='font-medium'>Contact Cleaning:</span>
            <p className='text-sm text-gray-600 dark:text-gray-400 mt-1'>
              Clean both the power cell contacts and the hilt's internal terminals with isopropyl alcohol and a
              lint-free cloth.
            </p>
          </li>
          <li>
            <span className='font-medium'>Compartment Preparation:</span>
            <p className='text-sm text-gray-600 dark:text-gray-400 mt-1'>
              Ensure the power compartment is free of debris and the spring contacts are properly aligned.
            </p>
          </li>
        </ol>
      </Section>

      <Section title='Installation Process'>
        <div className='space-y-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg'>
              <Battery className='size-5 text-blue-600 dark:text-blue-400 mb-2' />
              <h4 className='font-semibold'>Step 1: Access</h4>
              <p className='text-sm mt-1'>
                Remove the pommel cap by rotating counterclockwise. Some resistance is normal due to the O-ring seal.
              </p>
            </div>
            <div className='p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg'>
              <Zap className='size-5 text-purple-600 dark:text-purple-400 mb-2' />
              <h4 className='font-semibold'>Step 2: Orientation</h4>
              <p className='text-sm mt-1'>
                Align the power cell with positive terminal facing the blade end. The keyed design prevents incorrect
                installation.
              </p>
            </div>
            <div className='p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg'>
              <CheckCircle className='size-5 text-emerald-600 dark:text-emerald-400 mb-2' />
              <h4 className='font-semibold'>Step 3: Insertion</h4>
              <p className='text-sm mt-1'>
                Slide the power cell into the compartment until it seats firmly against the spring contacts. You should
                feel a slight click.
              </p>
            </div>
            <div className='p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg'>
              <AlertCircle className='size-5 text-amber-600 dark:text-amber-400 mb-2' />
              <h4 className='font-semibold'>Step 4: Secure</h4>
              <p className='text-sm mt-1'>
                Replace the pommel cap, ensuring threads engage properly. Tighten until snug - do not overtighten.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section title='Power Cell Specifications'>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead className='bg-gray-50 dark:bg-gray-900/50'>
              <tr>
                <th className='text-left p-3'>Specification</th>
                <th className='text-left p-3'>Value</th>
                <th className='text-left p-3'>Notes</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
              <tr>
                <td className='p-3 font-medium'>Type</td>
                <td className='p-3'>Diatium Mark VII</td>
                <td className='p-3'>Hot-swappable design</td>
              </tr>
              <tr>
                <td className='p-3 font-medium'>Voltage</td>
                <td className='p-3'>12.6V nominal</td>
                <td className='p-3'>11.1V minimum, 13.2V maximum</td>
              </tr>
              <tr>
                <td className='p-3 font-medium'>Capacity</td>
                <td className='p-3'>5000mAh</td>
                <td className='p-3'>4-8 hours typical use</td>
              </tr>
              <tr>
                <td className='p-3 font-medium'>Chemistry</td>
                <td className='p-3'>Tibanna-enhanced Li-ion</td>
                <td className='p-3'>1000+ charge cycles</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section title='First Power-On'>
        <div className='p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg'>
          <h4 className='font-semibold mb-3'>Initial Activation Sequence</h4>
          <ol className='list-decimal ml-5 space-y-2 text-sm'>
            <li>Wait 5 seconds after installation for system initialization</li>
            <li>Press and hold the activation switch for 3 seconds</li>
            <li>The status LED should pulse blue indicating successful connection</li>
            <li>If red LED appears, remove and reseat the power cell</li>
            <li>Allow 30 minutes for initial calibration before first use</li>
          </ol>
        </div>
      </Section>

      <Section title='Troubleshooting'>
        <div className='grid gap-3'>
          <div className='p-3 bg-gray-50 dark:bg-gray-900/50 rounded'>
            <p className='font-medium text-sm'>No Power / No LED</p>
            <p className='text-sm text-gray-600 dark:text-gray-400'>
              Check cell orientation, clean contacts, verify cell charge level
            </p>
          </div>
          <div className='p-3 bg-gray-50 dark:bg-gray-900/50 rounded'>
            <p className='font-medium text-sm'>Intermittent Power</p>
            <p className='text-sm text-gray-600 dark:text-gray-400'>
              Tighten pommel cap, check for corrosion, replace if cell is damaged
            </p>
          </div>
          <div className='p-3 bg-gray-50 dark:bg-gray-900/50 rounded'>
            <p className='font-medium text-sm'>Rapid Discharge</p>
            <p className='text-sm text-gray-600 dark:text-gray-400'>
              Run diagnostic mode, check for shorts, verify authentic power cell
            </p>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default PowerCellInstallation
