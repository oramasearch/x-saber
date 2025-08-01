import { Code, Download, Palette, Radio, Settings, Sliders } from 'lucide-react'
import { PageTitle } from '../../components/PageTitle'
import { Section } from '../../components/Section'

const AdvancedConfig = () => {
  return (
    <div>
      <PageTitle>Advanced Configuration</PageTitle>

      <Section title='Unlock expert-level customization options'>
        <p className='pb-4'>
          Expert-level configuration covering combat modes, blade customization, Force tuning, firmware updates,
          accessories, and custom programming interfaces.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
          <div className='bg-background/5 border border-border rounded-lg p-4'>
            <div className='flex items-center gap-2 mb-2'>
              <Sliders className='size-5 text-indigo-500' />
              <span className='font-semibold text-white'>6 Combat Modes</span>
            </div>
            <p className='text-sm text-muted-foreground'>Fully configurable presets</p>
          </div>
          <div className='bg-background/5 border border-border rounded-lg p-4'>
            <div className='flex items-center gap-2 mb-2'>
              <Radio className='size-5 text-red-500' />
              <span className='font-semibold text-white'>12,000+ Midi-chlorians</span>
            </div>
            <p className='text-sm text-muted-foreground'>Master level required</p>
          </div>
          <div className='bg-background/5 border border-border rounded-lg p-4'>
            <div className='flex items-center gap-2 mb-2'>
              <Code className='size-5 text-green-500' />
              <span className='font-semibold text-white'>Open API</span>
            </div>
            <p className='text-sm text-muted-foreground'>Custom programming</p>
          </div>
        </div>
      </Section>

      <Section title='Combat Mode Configurations'>
        <p className='text-muted-foreground mb-4'>
          Customize your X-Saber IV with six distinct combat modes, each optimized for different fighting styles:
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {[
            {
              mode: 'Form I: Shii-Cho',
              description:
                'Basic training mode with safety limiters. Blade intensity at 40%, collision warnings active.',
              color: 'blue'
            },
            {
              mode: 'Form II: Makashi',
              description: 'Precision dueling mode. Enhanced tip control, reduced blade width for finesse strikes.',
              color: 'purple'
            },
            {
              mode: 'Form III: Soresu',
              description: 'Defensive stance optimization. Faster blade response, energy-efficient operation.',
              color: 'green'
            },
            {
              mode: 'Form IV: Ataru',
              description: 'Acrobatic combat mode. Gyroscopic stabilization, momentum-based power boost.',
              color: 'yellow'
            },
            {
              mode: 'Form V: Djem So',
              description: 'Power strike configuration. Maximum blade intensity, enhanced impact feedback.',
              color: 'orange'
            },
            {
              mode: 'Form VII: Juyo/Vaapad',
              description: 'Aggressive assault mode. Unpredictable blade modulation, dark side channeling.',
              color: 'red'
            }
          ].map(form => (
            <div
              key={form.mode}
              className='border border-border rounded-lg p-4 bg-background/5'>
              <h4 className='text-white font-semibold mb-2'>{form.mode}</h4>
              <p className='text-muted-foreground text-sm'>{form.description}</p>
              <div className='mt-3'>
                <div className={`h-1 w-full bg-${form.color}-500/20 rounded`}>
                  <div className={`h-1 w-3/4 bg-${form.color}-500 rounded`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title='Blade Customization'>
        <div className='space-y-6'>
          <div>
            <h3 className='text-white font-semibold mb-3 flex items-center gap-2'>
              <Palette className='size-5' />
              Color Adjustment
            </h3>
            <div className='bg-background/5 border border-border rounded-lg p-4'>
              <p className='text-muted-foreground text-sm mb-4'>
                Fine-tune your blade color with precision RGB controls or select from preset profiles:
              </p>
              <div className='grid grid-cols-3 gap-2'>
                {['Blue', 'Green', 'Red', 'Purple', 'Yellow', 'White'].map(color => (
                  <button
                    key={color}
                    type='button'
                    className='py-2 px-3 bg-background/10 rounded hover:bg-background/20 text-sm text-white'>
                    {color}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-white font-semibold mb-3'>Blade Length Configuration</h3>
            <div className='bg-background/5 border border-border rounded-lg p-4'>
              <p className='text-muted-foreground text-sm mb-4'>
                Adjust blade length from 60cm to 150cm. Settings can be saved to different combat profiles.
              </p>
              <div className='space-y-2'>
                <div className='flex justify-between text-sm'>
                  <span className='text-muted-foreground'>Minimum</span>
                  <span className='text-white'>60cm</span>
                </div>
                <div className='h-2 bg-background/20 rounded-full'>
                  <div className='h-2 w-2/3 bg-emerald-500 rounded-full' />
                </div>
                <div className='flex justify-between text-sm'>
                  <span className='text-muted-foreground'>Current</span>
                  <span className='text-white'>91.44cm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title='Force Sensitivity Tuning'>
        <div className='bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 mb-4'>
          <p className='text-white font-semibold mb-1'>⚠️ Advanced Users Only</p>
          <p className='text-sm text-muted-foreground'>
            Modifying Force sensitivity settings requires minimum 12,000 midi-chlorian count. Improper configuration may
            result in crystal resonance failure.
          </p>
        </div>

        <div className='space-y-4'>
          <div className='border border-border rounded-lg p-4 bg-background/5'>
            <h4 className='text-white font-semibold mb-2'>Neural Link Calibration</h4>
            <p className='text-muted-foreground text-sm'>
              Sync your X-Saber IV with your Force signature for enhanced responsiveness. Place your hand on the hilt
              and meditate for 5 minutes during calibration.
            </p>
          </div>

          <div className='border border-border rounded-lg p-4 bg-background/5'>
            <h4 className='text-white font-semibold mb-2'>Precognition Mode</h4>
            <p className='text-muted-foreground text-sm'>
              Enable predictive blade positioning based on Force flow analysis. Requires continuous neural link
              connection.
            </p>
          </div>
        </div>
      </Section>

      <Section title='Firmware Management'>
        <div className='space-y-4'>
          <div className='flex items-start gap-4'>
            <Download className='size-6 text-blue-500 mt-1' />
            <div className='flex-1'>
              <h3 className='text-white font-semibold mb-2'>Update Center</h3>
              <p className='text-muted-foreground text-sm mb-3'>
                Keep your X-Saber IV running with the latest features and security patches.
              </p>
              <div className='bg-background/5 border border-border rounded-lg p-3'>
                <div className='flex justify-between items-center'>
                  <span className='text-sm text-muted-foreground'>Current Version</span>
                  <span className='text-sm text-white font-mono'>v4.7.2</span>
                </div>
                <div className='flex justify-between items-center mt-2'>
                  <span className='text-sm text-muted-foreground'>Latest Available</span>
                  <span className='text-sm text-green-500 font-mono'>v4.8.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title='API & Programming Interfaces'>
        <div className='bg-background/5 border border-border rounded-lg p-4'>
          <div className='flex items-start gap-4'>
            <Code className='size-6 text-green-500 mt-1' />
            <div className='flex-1'>
              <h3 className='text-white font-semibold mb-2'>SaberOS Developer Kit</h3>
              <p className='text-muted-foreground text-sm mb-4'>
                Expand your X-Saber IV functionality with custom scripts and integrations.
              </p>
              <div className='bg-black/20 rounded p-3 font-mono text-sm'>
                <pre className='text-green-400'>
                  {`import { XSaber } from '@jeditech/saberos';

const saber = new XSaber();
await saber.connect();

// Custom blade effect
saber.blade.setEffect({
  pattern: 'pulse',
  frequency: 2.5,
  intensity: 0.8
});`}
                </pre>
              </div>
              <div className='mt-4 space-y-2'>
                <h4 className='text-white font-semibold'>Available APIs:</h4>
                <ul className='text-sm text-muted-foreground space-y-1'>
                  <li>• Blade Control API - Color, length, effects</li>
                  <li>• Combat Analytics API - Strike data, form analysis</li>
                  <li>• Force Integration API - Neural link, sensitivity</li>
                  <li>• Hardware Access API - Sensors, gyroscope, haptics</li>
                  <li>• Cloud Sync API - Profile backup, sharing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title='Accessory Configuration'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='border border-border rounded-lg p-4 bg-background/5'>
            <Settings className='size-5 text-purple-500 mb-2' />
            <h4 className='text-white font-semibold mb-2'>D-Ring Adapter</h4>
            <p className='text-muted-foreground text-sm'>
              Configure belt clip positioning and quick-draw angle optimization.
            </p>
          </div>
          <div className='border border-border rounded-lg p-4 bg-background/5'>
            <Settings className='size-5 text-purple-500 mb-2' />
            <h4 className='text-white font-semibold mb-2'>Training Remote</h4>
            <p className='text-muted-foreground text-sm'>
              Pair with holographic training remotes for automated defense drills.
            </p>
          </div>
          <div className='border border-border rounded-lg p-4 bg-background/5'>
            <Settings className='size-5 text-purple-500 mb-2' />
            <h4 className='text-white font-semibold mb-2'>Dual-Wield Sync</h4>
            <p className='text-muted-foreground text-sm'>
              Synchronize two X-Saber IVs for Jar'Kai combat style coordination.
            </p>
          </div>
          <div className='border border-border rounded-lg p-4 bg-background/5'>
            <Settings className='size-5 text-purple-500 mb-2' />
            <h4 className='text-white font-semibold mb-2'>Holocron Interface</h4>
            <p className='text-muted-foreground text-sm'>
              Access ancient combat techniques and wisdom through holocron connection.
            </p>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default AdvancedConfig
