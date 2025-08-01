import { Package, Ruler, Shield, Sparkles } from 'lucide-react'
import { PageTitle } from '../../components/PageTitle'
import { Section } from '../../components/Section'

const DimensionsMaterials = () => {
  return (
    <div>
      <PageTitle>Dimensions & Materials</PageTitle>

      <Section title='Physical Specifications'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='space-y-4'>
            <h4 className='font-semibold flex items-center gap-2'>
              <Ruler className='size-4 text-blue-500' />
              Standard Dimensions
            </h4>
            <ul className='space-y-2 text-sm'>
              <li>Total Length: 28.5 cm (11.2")</li>
              <li>Hilt Diameter: 3.5 cm (1.4")</li>
              <li>Blade Length: 91.4 cm (36") standard</li>
              <li>Weight: 285g (10 oz)</li>
            </ul>
          </div>
          <div className='space-y-4'>
            <h4 className='font-semibold flex items-center gap-2'>
              <Package className='size-4 text-purple-500' />
              Extended Configuration
            </h4>
            <ul className='space-y-2 text-sm'>
              <li>Max Blade Length: 152.4 cm (60")</li>
              <li>Dual-blade Mode: 76.2 cm (30") each</li>
              <li>Pike Configuration: up to 213.4 cm (84")</li>
              <li>Compact Mode: 20.3 cm (8") hilt only</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title='Material Composition'>
        <div className='space-y-6'>
          <div>
            <h4 className='font-semibold mb-3'>Hilt Construction</h4>
            <div className='grid gap-4'>
              <div className='p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg'>
                <p className='font-medium'>Primary Shell</p>
                <p className='text-sm text-gray-600 dark:text-gray-400 mt-1'>
                  Aerospace-grade titanium alloy with cortosis-weave reinforcement
                </p>
              </div>
              <div className='p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg'>
                <p className='font-medium'>Grip Material</p>
                <p className='text-sm text-gray-600 dark:text-gray-400 mt-1'>
                  Rancor leather wrap or synthetic grip with haptic feedback nodes
                </p>
              </div>
              <div className='p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg'>
                <p className='font-medium'>Internal Frame</p>
                <p className='text-sm text-gray-600 dark:text-gray-400 mt-1'>
                  Carbon-fiber composite with integrated cooling channels
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title='Crystal Housing'>
        <div className='grid gap-4'>
          <p>
            The crystal chamber features a specialized suspension system designed to protect and optimize the Kyber
            crystal's energy output.
          </p>
          <div className='p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg'>
            <h4 className='font-semibold text-blue-700 dark:text-blue-300'>Housing Materials</h4>
            <ul className='mt-2 space-y-1 text-sm'>
              <li>• Primary Chamber: Beskar-infused durasteel</li>
              <li>• Crystal Cradle: Pure aurodium contacts</li>
              <li>• Focusing Lens: Synthetic corundum crystal</li>
              <li>• Insulation: Phase-shift polymer coating</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title='Environmental Ratings'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg'>
            <Shield className='size-5 text-emerald-600 dark:text-emerald-400 mb-2' />
            <h4 className='font-semibold'>Durability Standards</h4>
            <ul className='mt-2 space-y-1 text-sm'>
              <li>• IP68 Water/Dust Resistance</li>
              <li>• -40°C to +60°C Operating Range</li>
              <li>• 10,000G Impact Resistance</li>
              <li>• EMP Shielding Level 5</li>
            </ul>
          </div>
          <div className='p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg'>
            <Sparkles className='size-5 text-amber-600 dark:text-amber-400 mb-2' />
            <h4 className='font-semibold'>Special Coatings</h4>
            <ul className='mt-2 space-y-1 text-sm'>
              <li>• Anti-corrosion nanocoating</li>
              <li>• Self-healing polymer finish</li>
              <li>• Thermal dispersion matrix</li>
              <li>• Quantum-locked surface bonds</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default DimensionsMaterials
