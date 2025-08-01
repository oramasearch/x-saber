import { AlertTriangle, CheckCircle2, Package, ShoppingCart } from 'lucide-react'
import { PageTitle } from '../../components/PageTitle'
import { Section } from '../../components/Section'

const RequiredComponents = () => {
  return (
    <div>
      <PageTitle>Required Components</PageTitle>

      <Section title='Component Checklist'>
        <p className='mb-4'>
          Before beginning assembly, ensure you have all required components. Missing parts may result in malfunction or
          safety hazards.
        </p>
        <div className='grid gap-4'>
          <div className='p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg'>
            <h4 className='font-semibold flex items-center gap-2 mb-3'>
              <Package className='size-4 text-blue-500' />
              In the Box
            </h4>
            <ul className='space-y-2 text-sm'>
              <li className='flex items-start gap-2'>
                <CheckCircle2 className='size-4 text-green-500 mt-0.5' />
                <span>X-Saber IV Hilt Assembly (pre-configured)</span>
              </li>
              <li className='flex items-start gap-2'>
                <CheckCircle2 className='size-4 text-green-500 mt-0.5' />
                <span>Kyber Crystal (color varies by order)</span>
              </li>
              <li className='flex items-start gap-2'>
                <CheckCircle2 className='size-4 text-green-500 mt-0.5' />
                <span>Diatium Power Cell Mark VII</span>
              </li>
              <li className='flex items-start gap-2'>
                <CheckCircle2 className='size-4 text-green-500 mt-0.5' />
                <span>Emitter Matrix Module</span>
              </li>
              <li className='flex items-start gap-2'>
                <CheckCircle2 className='size-4 text-green-500 mt-0.5' />
                <span>Focusing Lens Array</span>
              </li>
              <li className='flex items-start gap-2'>
                <CheckCircle2 className='size-4 text-green-500 mt-0.5' />
                <span>Blade Plug (for storage)</span>
              </li>
              <li className='flex items-start gap-2'>
                <CheckCircle2 className='size-4 text-green-500 mt-0.5' />
                <span>Charging Cable (USB-C)</span>
              </li>
              <li className='flex items-start gap-2'>
                <CheckCircle2 className='size-4 text-green-500 mt-0.5' />
                <span>Assembly Tools Kit</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title='Optional Components'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg'>
            <ShoppingCart className='size-5 text-blue-600 dark:text-blue-400 mb-2' />
            <h4 className='font-semibold'>Recommended Additions</h4>
            <ul className='mt-2 space-y-1 text-sm'>
              <li>• Display Stand</li>
              <li>• Belt Clip D-Ring</li>
              <li>• Blade Deflector Shield</li>
              <li>• Weatherproofing Kit</li>
              <li>• Extra Power Cells</li>
            </ul>
          </div>
          <div className='p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg'>
            <Package className='size-5 text-purple-600 dark:text-purple-400 mb-2' />
            <h4 className='font-semibold'>Advanced Upgrades</h4>
            <ul className='mt-2 space-y-1 text-sm'>
              <li>• Secondary Crystal Chamber</li>
              <li>• Curved Hilt Conversion</li>
              <li>• Dual-blade Coupler</li>
              <li>• Cortosis Weave Kit</li>
              <li>• Sound Font Pack</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title='Component Specifications'>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead className='bg-gray-50 dark:bg-gray-900/50'>
              <tr>
                <th className='text-left p-3'>Component</th>
                <th className='text-left p-3'>Model/Type</th>
                <th className='text-left p-3'>Specifications</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
              <tr>
                <td className='p-3 font-medium'>Kyber Crystal</td>
                <td className='p-3'>Ilum-grade synthetic</td>
                <td className='p-3'>2.1cm x 0.8cm, pre-attuned</td>
              </tr>
              <tr>
                <td className='p-3 font-medium'>Power Cell</td>
                <td className='p-3'>Diatium Mark VII</td>
                <td className='p-3'>12.6V, 5000mAh, hot-swappable</td>
              </tr>
              <tr>
                <td className='p-3 font-medium'>Emitter Matrix</td>
                <td className='p-3'>EM-4X Quantum</td>
                <td className='p-3'>Tri-phase cycling, 0.001s ignition</td>
              </tr>
              <tr>
                <td className='p-3 font-medium'>Focusing Lens</td>
                <td className='p-3'>Adegan Crystal</td>
                <td className='p-3'>99.9% clarity, self-aligning</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section title='Safety Warnings'>
        <div className='p-4 bg-red-50 dark:bg-red-900/20 rounded-lg'>
          <div className='flex items-start gap-3'>
            <AlertTriangle className='size-5 text-red-600 dark:text-red-400 mt-0.5' />
            <div>
              <h4 className='font-semibold text-red-700 dark:text-red-300'>Important Safety Notes</h4>
              <ul className='mt-2 space-y-1 text-sm'>
                <li>• Never substitute components with non-approved parts</li>
                <li>• Damaged crystals may cause unstable blade behavior</li>
                <li>• Always use genuine X-Saber power cells</li>
                <li>• Keep components away from moisture during assembly</li>
                <li>• Do not attempt assembly if any component appears damaged</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section title='Quality Assurance'>
        <p>
          All components undergo rigorous testing before packaging. Each crystal is individually calibrated, and power
          cells are tested for capacity and stability. If you discover any defects or missing components, contact
          support immediately.
        </p>
        <div className='mt-4 p-3 bg-gray-100 dark:bg-gray-800 rounded text-sm'>
          <p className='font-medium'>Verification Code Location:</p>
          <p className='text-gray-600 dark:text-gray-400'>
            Each component has a holographic verification seal with a unique code. Register these codes at
            x-saber.com/verify for warranty activation.
          </p>
        </div>
      </Section>
    </div>
  )
}

export default RequiredComponents
