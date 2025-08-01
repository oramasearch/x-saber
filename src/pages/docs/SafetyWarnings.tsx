import { AlertTriangle, Eye, Flame, Shield, Zap } from 'lucide-react'
import { PageTitle } from '../../components/PageTitle'
import { Section } from '../../components/Section'

const SafetyWarnings = () => {
  return (
    <div>
      <PageTitle>Safety Warnings</PageTitle>

      <Section title='Critical Safety Information'>
        <div className='p-4 bg-red-50 dark:bg-red-900/20 rounded-lg mb-4'>
          <div className='flex items-start gap-3'>
            <AlertTriangle className='size-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-1' />
            <div>
              <h4 className='font-bold text-red-700 dark:text-red-300 text-lg'>READ BEFORE FIRST USE</h4>
              <p className='mt-2 text-sm'>
                The X-Saber IV is a precision instrument capable of generating extreme temperatures and energy fields.
                Improper use can result in serious injury or death. All users must complete safety training before
                operation.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section title='General Safety Guidelines'>
        <div className='grid gap-4'>
          <div className='p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg'>
            <h4 className='font-semibold flex items-center gap-2'>
              <Shield className='size-4 text-amber-600' />
              Personal Protection
            </h4>
            <ul className='mt-2 space-y-1 text-sm'>
              <li>• Always wear protective eyewear rated for plasma radiation</li>
              <li>• Use heat-resistant gloves during extended training sessions</li>
              <li>• Maintain minimum 2-meter safety radius during activation</li>
              <li>• Never point the emitter at yourself or others</li>
              <li>• Keep loose clothing and hair secured</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title='Operational Hazards'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='p-4 bg-red-50 dark:bg-red-900/20 rounded-lg'>
            <Flame className='size-5 text-red-600 dark:text-red-400 mb-2' />
            <h4 className='font-semibold'>Thermal Hazards</h4>
            <ul className='mt-2 space-y-1 text-sm'>
              <li>• Blade temperature exceeds 3000°C</li>
              <li>• Can ignite flammable materials instantly</li>
              <li>• Emitter remains hot 30 seconds after deactivation</li>
              <li>• Never touch blade or emitter components</li>
            </ul>
          </div>
          <div className='p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg'>
            <Zap className='size-5 text-yellow-600 dark:text-yellow-400 mb-2' />
            <h4 className='font-semibold'>Electrical Hazards</h4>
            <ul className='mt-2 space-y-1 text-sm'>
              <li>• High voltage present in crystal chamber</li>
              <li>• EMP effects may damage electronics</li>
              <li>• Do not operate in wet conditions</li>
              <li>• Ground yourself before maintenance</li>
            </ul>
          </div>
          <div className='p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg'>
            <Eye className='size-5 text-purple-600 dark:text-purple-400 mb-2' />
            <h4 className='font-semibold'>Optical Hazards</h4>
            <ul className='mt-2 space-y-1 text-sm'>
              <li>• Direct viewing can cause retinal damage</li>
              <li>• Use appropriate eye protection</li>
              <li>• Avoid reflective surfaces nearby</li>
              <li>• Never look directly into emitter</li>
            </ul>
          </div>
          <div className='p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg'>
            <AlertTriangle className='size-5 text-blue-600 dark:text-blue-400 mb-2' />
            <h4 className='font-semibold'>Mechanical Hazards</h4>
            <ul className='mt-2 space-y-1 text-sm'>
              <li>• Gyroscopic forces during operation</li>
              <li>• Maintain firm two-handed grip</li>
              <li>• Check for loose components before use</li>
              <li>• Secure wrist strap when available</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title='Environmental Restrictions'>
        <div className='p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg'>
          <h4 className='font-semibold mb-3'>Do Not Operate In:</h4>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <ul className='space-y-2 text-sm'>
              <li>• Explosive atmospheres</li>
              <li>• Near flammable liquids or gases</li>
              <li>• Confined spaces without ventilation</li>
              <li>• During electrical storms</li>
            </ul>
            <ul className='space-y-2 text-sm'>
              <li>• Near medical equipment</li>
              <li>• Within 10m of fuel storage</li>
              <li>• Underwater (without proper module)</li>
              <li>• In zero gravity without training</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title='Age & Training Requirements'>
        <div className='space-y-4'>
          <div className='p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg'>
            <h4 className='font-semibold mb-2'>Minimum Requirements</h4>
            <ul className='space-y-2 text-sm'>
              <li>• Age 16+ for supervised training mode</li>
              <li>• Age 18+ for full power operation</li>
              <li>• Completed X-Saber Safety Certification</li>
              <li>• Valid liability insurance</li>
              <li>• Physical fitness assessment passed</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title='Emergency Procedures'>
        <div className='grid gap-4'>
          <div className='p-4 bg-red-100 dark:bg-red-900/30 rounded-lg'>
            <h4 className='font-bold text-red-700 dark:text-red-300 mb-3'>In Case of Emergency:</h4>
            <ol className='list-decimal ml-5 space-y-2 text-sm'>
              <li>
                <span className='font-medium'>Immediate Shutdown:</span> Press and hold activation switch for 5 seconds
                to force emergency shutdown
              </li>
              <li>
                <span className='font-medium'>Blade Stuck On:</span> Remove power cell immediately using insulated tools
              </li>
              <li>
                <span className='font-medium'>Fire/Burns:</span> Use Class D fire extinguisher, seek immediate medical
                attention
              </li>
              <li>
                <span className='font-medium'>Electrical Shock:</span> Do not touch victim, cut power at source, call
                emergency services
              </li>
              <li>
                <span className='font-medium'>Crystal Breach:</span> Evacuate 50m radius, do not look at exposed
                crystal, call hazmat team
              </li>
            </ol>
          </div>
        </div>
      </Section>

      <Section title='Legal Disclaimers'>
        <div className='p-4 bg-gray-100 dark:bg-gray-800 rounded text-sm'>
          <p className='mb-3'>
            By using the X-Saber IV, you acknowledge and accept all risks associated with its operation. The
            manufacturer is not liable for injuries resulting from:
          </p>
          <ul className='list-disc ml-5 space-y-1'>
            <li>Failure to follow safety instructions</li>
            <li>Unauthorized modifications</li>
            <li>Use in prohibited environments</li>
            <li>Operation by untrained individuals</li>
            <li>Combat or dueling activities</li>
          </ul>
          <p className='mt-3 font-medium'>
            Always check local laws and regulations before operation. Some jurisdictions classify lightsabers as
            weapons.
          </p>
        </div>
      </Section>
    </div>
  )
}

export default SafetyWarnings
