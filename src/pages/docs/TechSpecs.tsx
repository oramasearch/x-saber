import { Battery, Gauge, Shield, Thermometer, Zap } from 'lucide-react'
import { PageTitle } from '../../components/PageTitle'
import { Section } from '../../components/Section'

const TechSpecs = () => {
  return (
    <div>
      <PageTitle>Technical Specifications</PageTitle>

      <Section title='Complete technical breakdown and performance data'>
        <p className='pb-4'>
          Detailed technical documentation covering hardware components, crystal technology, power systems,
          environmental tolerances, and certification standards.
        </p>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-6'>
          <div className='bg-background/5 border border-border rounded-lg p-4'>
            <Gauge className='size-5 text-blue-500 mb-2' />
            <p className='text-2xl font-bold text-white'>500+</p>
            <p className='text-sm text-muted-foreground'>Specifications</p>
          </div>
          <div className='bg-background/5 border border-border rounded-lg p-4'>
            <Battery className='size-5 text-green-500 mb-2' />
            <p className='text-2xl font-bold text-white'>72hrs</p>
            <p className='text-sm text-muted-foreground'>Battery Life</p>
          </div>
          <div className='bg-background/5 border border-border rounded-lg p-4'>
            <Thermometer className='size-5 text-orange-500 mb-2' />
            <p className='text-2xl font-bold text-white'>25,000°C</p>
            <p className='text-sm text-muted-foreground'>Max Temperature</p>
          </div>
          <div className='bg-background/5 border border-border rounded-lg p-4'>
            <Shield className='size-5 text-purple-500 mb-2' />
            <p className='text-2xl font-bold text-white'>12,000+</p>
            <p className='text-sm text-muted-foreground'>Midi-chlorians</p>
          </div>
        </div>
      </Section>

      <Section title='Hardware Overview'>
        <div className='space-y-6'>
          <div>
            <h3 className='text-white font-semibold mb-3'>Core Components</h3>
            <div className='space-y-2'>
              <div className='flex justify-between py-2 border-b border-border'>
                <span className='text-muted-foreground'>Hilt Material</span>
                <span className='text-white'>Aerospace-grade Titanium Alloy</span>
              </div>
              <div className='flex justify-between py-2 border-b border-border'>
                <span className='text-muted-foreground'>Blade Emitter</span>
                <span className='text-white'>Quantum Phase Projector v4.7</span>
              </div>
              <div className='flex justify-between py-2 border-b border-border'>
                <span className='text-muted-foreground'>Crystal Chamber</span>
                <span className='text-white'>Force-Resonant Containment Field</span>
              </div>
              <div className='flex justify-between py-2 border-b border-border'>
                <span className='text-muted-foreground'>Processor</span>
                <span className='text-white'>Neural Interface Chip (NIC-4000)</span>
              </div>
              <div className='flex justify-between py-2 border-b border-border'>
                <span className='text-muted-foreground'>Weight</span>
                <span className='text-white'>1.2kg (without blade projection)</span>
              </div>
              <div className='flex justify-between py-2 border-b border-border'>
                <span className='text-muted-foreground'>Dimensions</span>
                <span className='text-white'>28cm x 4.5cm (hilt only)</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title='Kyber Crystal Compatibility Matrix'>
        <div className='overflow-x-auto'>
          <table className='w-full border border-border'>
            <thead>
              <tr className='bg-background/5'>
                <th className='text-left p-3 border-b border-border text-white'>Crystal Type</th>
                <th className='text-left p-3 border-b border-border text-white'>Color Output</th>
                <th className='text-left p-3 border-b border-border text-white'>Power Efficiency</th>
                <th className='text-left p-3 border-b border-border text-white'>Stability Rating</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b border-border'>
                <td className='p-3 text-muted-foreground'>Ilum Crystal</td>
                <td className='p-3 text-muted-foreground'>Blue/Green</td>
                <td className='p-3 text-muted-foreground'>95%</td>
                <td className='p-3 text-muted-foreground'>Excellent</td>
              </tr>
              <tr className='border-b border-border'>
                <td className='p-3 text-muted-foreground'>Synthetic Crystal</td>
                <td className='p-3 text-muted-foreground'>Red</td>
                <td className='p-3 text-muted-foreground'>88%</td>
                <td className='p-3 text-muted-foreground'>Good</td>
              </tr>
              <tr className='border-b border-border'>
                <td className='p-3 text-muted-foreground'>Krayt Dragon Pearl</td>
                <td className='p-3 text-muted-foreground'>Variable</td>
                <td className='p-3 text-muted-foreground'>92%</td>
                <td className='p-3 text-muted-foreground'>Excellent</td>
              </tr>
              <tr className='border-b border-border'>
                <td className='p-3 text-muted-foreground'>Ghostfire Crystal</td>
                <td className='p-3 text-muted-foreground'>Transparent</td>
                <td className='p-3 text-muted-foreground'>78%</td>
                <td className='p-3 text-muted-foreground'>Moderate</td>
              </tr>
              <tr>
                <td className='p-3 text-muted-foreground'>Solari Crystal</td>
                <td className='p-3 text-muted-foreground'>Orange/Gold</td>
                <td className='p-3 text-muted-foreground'>97%</td>
                <td className='p-3 text-muted-foreground'>Superior</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section title='Power Cell Performance'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='border border-border rounded-lg p-6 bg-background/5'>
            <div className='flex items-start gap-4'>
              <Battery className='size-6 text-green-500 mt-1' />
              <div>
                <h3 className='text-white font-semibold mb-2'>Standard Usage</h3>
                <ul className='space-y-1 text-sm text-muted-foreground'>
                  <li>• Continuous activation: 72 hours</li>
                  <li>• Combat mode: 48 hours</li>
                  <li>• Training mode: 120 hours</li>
                  <li>• Standby: 6 months</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='border border-border rounded-lg p-6 bg-background/5'>
            <div className='flex items-start gap-4'>
              <Zap className='size-6 text-yellow-500 mt-1' />
              <div>
                <h3 className='text-white font-semibold mb-2'>Charging Specifications</h3>
                <ul className='space-y-1 text-sm text-muted-foreground'>
                  <li>• Quick charge: 80% in 30 minutes</li>
                  <li>• Full charge: 2 hours</li>
                  <li>• Wireless charging compatible</li>
                  <li>• Solar backup option available</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title='Blade Projection Technology'>
        <div className='space-y-4'>
          <div className='bg-background/5 border border-border rounded-lg p-4'>
            <h4 className='text-white font-semibold mb-2'>Plasma Containment Field</h4>
            <p className='text-muted-foreground text-sm'>
              Advanced magnetic bottle technology contains plasma at 25,000°C while maintaining a cool-to-touch hilt.
              The containment field automatically adjusts for environmental conditions.
            </p>
          </div>

          <div className='bg-background/5 border border-border rounded-lg p-4'>
            <h4 className='text-white font-semibold mb-2'>Blade Dimensions</h4>
            <ul className='text-sm text-muted-foreground space-y-1'>
              <li>• Standard length: 91.44cm (3 feet)</li>
              <li>• Adjustable range: 60cm - 150cm</li>
              <li>• Blade width: 2.5cm at base, 1.5cm at tip</li>
              <li>• Extension time: 1.2 seconds</li>
              <li>• Retraction time: 0.8 seconds</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title='Environmental Operating Limits'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='space-y-2'>
            <h4 className='text-white font-semibold mb-3'>Temperature Range</h4>
            <div className='space-y-2 text-sm'>
              <div className='flex justify-between'>
                <span className='text-muted-foreground'>Operating</span>
                <span className='text-white'>-40°C to +85°C</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-muted-foreground'>Storage</span>
                <span className='text-white'>-60°C to +100°C</span>
              </div>
            </div>
          </div>

          <div className='space-y-2'>
            <h4 className='text-white font-semibold mb-3'>Environmental Resistance</h4>
            <div className='space-y-2 text-sm'>
              <div className='flex justify-between'>
                <span className='text-muted-foreground'>Water Resistance</span>
                <span className='text-white'>IPX8 (submersible)</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-muted-foreground'>Pressure Tolerance</span>
                <span className='text-white'>0.1 - 10 atmospheres</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title='Certification Standards'>
        <ul className='list-disc ml-5 text-muted-foreground space-y-1'>
          <li>Galactic Safety Commission approved (GSC-2387)</li>
          <li>Jedi Temple certified for training use</li>
          <li>Republic Military specification compliant</li>
          <li>Zero-gravity operational certified</li>
          <li>Electromagnetic interference shielded</li>
        </ul>
      </Section>
    </div>
  )
}

export default TechSpecs
