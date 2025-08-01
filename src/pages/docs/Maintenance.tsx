import { AlertCircle, CheckCircle2, MapPin, Package2, Wrench } from 'lucide-react'
import { PageTitle } from '../../components/PageTitle'
import { Section } from '../../components/Section'

const Maintenance = () => {
  return (
    <div>
      <PageTitle>Maintenance & Troubleshooting</PageTitle>

      <Section title='Keep your X-Saber IV in peak condition'>
        <p className='pb-4'>
          Complete maintenance guide with daily routines, crystal alignment procedures, error code database, parts
          catalog, warranty information, and service center locations.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
          <div className='bg-background/5 border border-border rounded-lg p-4'>
            <div className='flex items-center gap-2 mb-2'>
              <AlertCircle className='size-5 text-red-500' />
              <span className='font-semibold text-white'>50+ Error Codes</span>
            </div>
            <p className='text-sm text-muted-foreground'>Complete diagnostic database</p>
          </div>
          <div className='bg-background/5 border border-border rounded-lg p-4'>
            <div className='flex items-center gap-2 mb-2'>
              <Wrench className='size-5 text-blue-500' />
              <span className='font-semibold text-white'>Practical Focus</span>
            </div>
            <p className='text-sm text-muted-foreground'>Step-by-step procedures</p>
          </div>
          <div className='bg-background/5 border border-border rounded-lg p-4'>
            <div className='flex items-center gap-2 mb-2'>
              <MapPin className='size-5 text-green-500' />
              <span className='font-semibold text-white'>Galaxy-wide Service</span>
            </div>
            <p className='text-sm text-muted-foreground'>Authorized repair centers</p>
          </div>
        </div>
      </Section>

      <Section title='Daily Maintenance Routine'>
        <div className='space-y-4'>
          <p className='text-muted-foreground'>
            Follow these simple steps to ensure optimal performance and longevity:
          </p>

          <div className='space-y-3'>
            {[
              {
                task: 'Hilt Inspection',
                description: 'Check for physical damage, loose components, or unusual wear patterns.',
                time: '30 seconds'
              },
              {
                task: 'Power Cell Check',
                description: 'Verify charge level and inspect contacts for corrosion or debris.',
                time: '15 seconds'
              },
              {
                task: 'Crystal Chamber Seal',
                description: 'Ensure the chamber remains properly sealed and moisture-free.',
                time: '20 seconds'
              },
              {
                task: 'Emitter Cleaning',
                description: 'Gently clean the blade emitter port with provided micro-fiber cloth.',
                time: '1 minute'
              },
              {
                task: 'System Diagnostic',
                description: 'Run quick diagnostic check via activation button (hold 5 seconds).',
                time: '10 seconds'
              }
            ].map(item => (
              <div
                key={item.task}
                className='flex items-start gap-3 p-3 bg-background/5 border border-border rounded-lg'>
                <CheckCircle2 className='size-5 text-green-500 mt-0.5' />
                <div className='flex-1'>
                  <h4 className='text-white font-semibold'>{item.task}</h4>
                  <p className='text-sm text-muted-foreground'>{item.description}</p>
                </div>
                <span className='text-xs text-muted-foreground bg-background/10 px-2 py-1 rounded'>{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section title='Periodic Maintenance Schedule'>
        <div className='overflow-x-auto'>
          <table className='w-full border border-border'>
            <thead>
              <tr className='bg-background/5'>
                <th className='text-left p-3 border-b border-border text-white'>Maintenance Task</th>
                <th className='text-left p-3 border-b border-border text-white'>Frequency</th>
                <th className='text-left p-3 border-b border-border text-white'>Duration</th>
                <th className='text-left p-3 border-b border-border text-white'>Difficulty</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b border-border'>
                <td className='p-3 text-muted-foreground'>Deep Clean & Lubrication</td>
                <td className='p-3 text-muted-foreground'>Weekly</td>
                <td className='p-3 text-muted-foreground'>15 minutes</td>
                <td className='p-3 text-green-500'>Easy</td>
              </tr>
              <tr className='border-b border-border'>
                <td className='p-3 text-muted-foreground'>Crystal Alignment Check</td>
                <td className='p-3 text-muted-foreground'>Monthly</td>
                <td className='p-3 text-muted-foreground'>30 minutes</td>
                <td className='p-3 text-amber-500'>Moderate</td>
              </tr>
              <tr className='border-b border-border'>
                <td className='p-3 text-muted-foreground'>Power Cell Calibration</td>
                <td className='p-3 text-muted-foreground'>Quarterly</td>
                <td className='p-3 text-muted-foreground'>45 minutes</td>
                <td className='p-3 text-amber-500'>Moderate</td>
              </tr>
              <tr className='border-b border-border'>
                <td className='p-3 text-muted-foreground'>Full System Overhaul</td>
                <td className='p-3 text-muted-foreground'>Annually</td>
                <td className='p-3 text-muted-foreground'>2 hours</td>
                <td className='p-3 text-red-500'>Expert</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section title='Crystal Alignment Procedures'>
        <div className='bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 mb-4'>
          <p className='text-white font-semibold mb-1'>⚠️ Caution Required</p>
          <p className='text-sm text-muted-foreground'>
            Improper crystal alignment can result in blade instability, reduced power output, or complete failure. If
            unsure, consult a certified technician.
          </p>
        </div>

        <div className='space-y-4'>
          <div className='border border-border rounded-lg p-4 bg-background/5'>
            <h4 className='text-white font-semibold mb-2'>Alignment Process</h4>
            <ol className='list-decimal ml-5 text-sm text-muted-foreground space-y-2'>
              <li>Power down completely and remove power cell</li>
              <li>Open crystal chamber using security key</li>
              <li>Use alignment tool to check crystal position (0.1mm tolerance)</li>
              <li>Adjust mounting brackets if needed</li>
              <li>Test resonance frequency (should be 42.7 kHz ± 0.5)</li>
              <li>Seal chamber and perform test ignition</li>
            </ol>
          </div>
        </div>
      </Section>

      <Section title='Error Code Database'>
        <p className='text-muted-foreground mb-4'>Common error codes and their solutions:</p>

        <div className='space-y-3'>
          {[
            {
              code: 'E-001',
              name: 'Crystal Misalignment',
              solution: 'Perform crystal alignment procedure or visit service center',
              severity: 'critical'
            },
            {
              code: 'E-017',
              name: 'Low Power Cell',
              solution: 'Recharge or replace power cell',
              severity: 'warning'
            },
            {
              code: 'E-024',
              name: 'Overheating Detected',
              solution: 'Allow 30 minutes cooldown, check ventilation ports',
              severity: 'critical'
            },
            {
              code: 'E-039',
              name: 'Emitter Obstruction',
              solution: 'Clean emitter port, check for debris',
              severity: 'moderate'
            },
            {
              code: 'E-045',
              name: 'Firmware Corruption',
              solution: 'Reinstall firmware via companion app',
              severity: 'critical'
            },
            {
              code: 'E-052',
              name: 'Sensor Calibration Error',
              solution: 'Run sensor recalibration in settings menu',
              severity: 'moderate'
            }
          ].map(error => (
            <div
              key={error.code}
              className='border border-border rounded-lg p-4 bg-background/5'>
              <div className='flex items-start justify-between mb-2'>
                <div className='flex items-center gap-3'>
                  <span className='font-mono text-white bg-background/20 px-2 py-1 rounded text-sm'>{error.code}</span>
                  <h4 className='text-white font-semibold'>{error.name}</h4>
                </div>
                <span
                  className={`text-xs px-2 py-1 rounded ${
                    error.severity === 'critical'
                      ? 'bg-red-500/20 text-red-500'
                      : error.severity === 'moderate'
                        ? 'bg-amber-500/20 text-amber-500'
                        : 'bg-green-500/20 text-green-500'
                  }`}>
                  {error.severity}
                </span>
              </div>
              <p className='text-sm text-muted-foreground'>{error.solution}</p>
            </div>
          ))}
        </div>

        <div className='mt-4 text-center'>
          <p className='text-sm text-muted-foreground'>
            View complete error code database (50+ codes) in the companion app
          </p>
        </div>
      </Section>

      <Section title='Replacement Parts Catalog'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='border border-border rounded-lg p-4 bg-background/5'>
            <Package2 className='size-5 text-blue-500 mb-2' />
            <h4 className='text-white font-semibold mb-2'>Common Replacements</h4>
            <ul className='text-sm text-muted-foreground space-y-1'>
              <li>• Power Cell Type-4 (P/N: XS4-PC-001)</li>
              <li>• Emitter Lens (P/N: XS4-EL-003)</li>
              <li>• Activation Switch (P/N: XS4-AS-002)</li>
              <li>• Belt Clip D-Ring (P/N: XS4-BC-001)</li>
              <li>• Crystal Mount Brackets (P/N: XS4-CM-004)</li>
            </ul>
          </div>

          <div className='border border-border rounded-lg p-4 bg-background/5'>
            <Package2 className='size-5 text-purple-500 mb-2' />
            <h4 className='text-white font-semibold mb-2'>Advanced Components</h4>
            <ul className='text-sm text-muted-foreground space-y-1'>
              <li>• Neural Interface Module (P/N: XS4-NI-001)</li>
              <li>• Force Resonator (P/N: XS4-FR-002)</li>
              <li>• Plasma Containment Field Gen (P/N: XS4-PC-005)</li>
              <li>• Gyroscopic Stabilizer (P/N: XS4-GS-001)</li>
              <li>• Quantum Phase Projector (P/N: XS4-QP-007)</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title='Warranty Information'>
        <div className='bg-background/5 border border-border rounded-lg p-6'>
          <h3 className='text-white font-semibold mb-4'>Standard Galactic Warranty</h3>
          <div className='space-y-3'>
            <div className='flex justify-between py-2 border-b border-border'>
              <span className='text-muted-foreground'>Coverage Period</span>
              <span className='text-white'>2 Standard Years</span>
            </div>
            <div className='flex justify-between py-2 border-b border-border'>
              <span className='text-muted-foreground'>Parts & Labor</span>
              <span className='text-white'>Fully Covered</span>
            </div>
            <div className='flex justify-between py-2 border-b border-border'>
              <span className='text-muted-foreground'>Crystal Damage</span>
              <span className='text-white'>Limited Coverage</span>
            </div>
            <div className='flex justify-between py-2'>
              <span className='text-muted-foreground'>Combat Damage</span>
              <span className='text-amber-500'>Not Covered</span>
            </div>
          </div>

          <div className='mt-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded'>
            <p className='text-sm text-white'>
              Extended warranty available: Add 3 years coverage for 15% of purchase price
            </p>
          </div>
        </div>
      </Section>

      <Section title='Service Center Network'>
        <div className='space-y-4'>
          <p className='text-muted-foreground'>Find authorized X-Saber IV service centers throughout the galaxy:</p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='border border-border rounded-lg p-4 bg-background/5'>
              <h4 className='text-white font-semibold mb-2'>Core Worlds</h4>
              <ul className='text-sm text-muted-foreground space-y-1'>
                <li>• Coruscant: Jedi Temple Technical Wing</li>
                <li>• Corellia: CEC Service Plaza</li>
                <li>• Chandrila: Republic Tech Center</li>
                <li>• Alderaan: Royal Engineering Guild</li>
              </ul>
            </div>

            <div className='border border-border rounded-lg p-4 bg-background/5'>
              <h4 className='text-white font-semibold mb-2'>Outer Rim</h4>
              <ul className='text-sm text-muted-foreground space-y-1'>
                <li>• Tatooine: Mos Eisley Cantina (back room)</li>
                <li>• Naboo: Theed Spaceport Services</li>
                <li>• Bespin: Cloud City Tech Deck</li>
                <li>• Kashyyyk: Wookiee Engineering Co-op</li>
              </ul>
            </div>
          </div>

          <div className='bg-background/10 border border-border rounded-lg p-4'>
            <div className='flex items-center gap-2 mb-2'>
              <MapPin className='size-5 text-green-500' />
              <span className='text-white font-semibold'>Emergency Support</span>
            </div>
            <p className='text-sm text-muted-foreground'>
              24/7 holographic support available via HoloNet frequency 47.2938. Response time: 5-10 parsecs depending on
              location.
            </p>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default Maintenance
