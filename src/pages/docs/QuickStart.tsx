import { AlertTriangle, CheckCircle2, Package, Shield, Timer, Zap } from 'lucide-react'
import { PageTitle } from '../../components/PageTitle'
import { Section } from '../../components/Section'

const QuickStart = () => {
  return (
    <div>
      <PageTitle>Quick Start Guide</PageTitle>

      <Section title='From unboxing to first ignition in 5 minutes'>
        <p className='pb-4'>
          Complete step-by-step activation process including unboxing, power cell installation, kyber crystal
          calibration, and first ignition. Includes troubleshooting and emergency procedures.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
          <div className='bg-background/5 border border-border rounded-lg p-4'>
            <div className='flex items-center gap-2 mb-2'>
              <Timer className='size-5 text-emerald-500' />
              <span className='font-semibold text-white'>5 min Setup</span>
            </div>
            <p className='text-sm text-muted-foreground'>Quick and easy activation</p>
          </div>
          <div className='bg-background/5 border border-border rounded-lg p-4'>
            <div className='flex items-center gap-2 mb-2'>
              <Package className='size-5 text-amber-500' />
              <span className='font-semibold text-white'>Beginner Friendly</span>
            </div>
            <p className='text-sm text-muted-foreground'>No prior experience needed</p>
          </div>
          <div className='bg-background/5 border border-border rounded-lg p-4'>
            <div className='flex items-center gap-2 mb-2'>
              <Shield className='size-5 text-purple-500' />
              <span className='font-semibold text-white'>Required Priority</span>
            </div>
            <p className='text-sm text-muted-foreground'>Essential safety protocols</p>
          </div>
        </div>
      </Section>

      <Section title='Before You Begin'>
        <div className='bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6'>
          <div className='flex items-start gap-3'>
            <AlertTriangle className='size-5 text-red-500 mt-0.5' />
            <div>
              <p className='text-white font-semibold mb-1'>Important Safety Notice</p>
              <p className='text-sm text-muted-foreground'>
                Ensure you have completed your Force sensitivity assessment and obtained proper certification. The
                X-Saber IV requires a minimum midi-chlorian count of 7,000 per cell for safe operation.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section title='6-Step Activation Process'>
        <div className='space-y-4'>
          {[
            {
              step: 1,
              title: 'Unboxing & Component Check',
              description:
                'Carefully remove all components from the packaging. Verify you have: hilt assembly, power cell, kyber crystal chamber, blade emitter, and activation key.',
              icon: Package
            },
            {
              step: 2,
              title: 'Power Cell Installation',
              description:
                'Insert the Type-4 power cell into the hilt base. Ensure the alignment markers match and you hear a click. The indicator should glow blue.',
              icon: Zap
            },
            {
              step: 3,
              title: 'Kyber Crystal Calibration',
              description:
                'Open the crystal chamber using the provided key. Insert your kyber crystal with the force-attuned side facing upward. Close and seal the chamber.',
              icon: CheckCircle2
            },
            {
              step: 4,
              title: 'Initial System Check',
              description:
                'Press and hold the activation button for 3 seconds. The hilt should emit a low hum and the status ring should pulse green.',
              icon: CheckCircle2
            },
            {
              step: 5,
              title: 'Blade Projection Test',
              description:
                'In a clear area, press the ignition switch. The blade should extend smoothly over 1.2 seconds. If it flickers, check crystal alignment.',
              icon: Zap
            },
            {
              step: 6,
              title: 'Safety Protocol Activation',
              description:
                'Complete the first-time setup by enabling training mode. This limits blade power to 40% and activates collision warnings.',
              icon: Shield
            }
          ].map(item => (
            <div
              key={item.step}
              className='flex gap-4'>
              <div className='flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center'>
                <span className='text-emerald-500 font-bold'>{item.step}</span>
              </div>
              <div className='flex-1'>
                <h3 className='text-white font-semibold mb-1'>{item.title}</h3>
                <p className='text-muted-foreground text-sm'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title='Emergency Procedures'>
        <div className='space-y-3'>
          <div className='border border-border rounded-lg p-4 bg-background/5'>
            <h4 className='text-white font-semibold mb-2'>Emergency Shutdown</h4>
            <p className='text-muted-foreground text-sm'>
              Press and hold both the activation button and mode selector for 5 seconds. This will immediately retract
              the blade and enter safe mode.
            </p>
          </div>
          <div className='border border-border rounded-lg p-4 bg-background/5'>
            <h4 className='text-white font-semibold mb-2'>Crystal Overload Warning</h4>
            <p className='text-muted-foreground text-sm'>
              If the hilt becomes hot or emits red pulses, immediately perform emergency shutdown and allow 30 minutes
              cooling before inspection.
            </p>
          </div>
          <div className='border border-border rounded-lg p-4 bg-background/5'>
            <h4 className='text-white font-semibold mb-2'>Blade Instability</h4>
            <p className='text-muted-foreground text-sm'>
              Flickering or color shifts indicate crystal misalignment. Deactivate immediately and recalibrate following
              Section 3.2 of the manual.
            </p>
          </div>
        </div>
      </Section>

      <Section title='Interactive Progress Tracking'>
        <p className='text-muted-foreground mb-4'>
          Your X-Saber IV includes built-in progress tracking. Connect to the companion app to:
        </p>
        <ul className='list-disc ml-5 text-muted-foreground space-y-1'>
          <li>Monitor setup completion status</li>
          <li>Receive real-time guidance during activation</li>
          <li>Access video tutorials for each step</li>
          <li>Get personalized troubleshooting assistance</li>
          <li>Track your training progress over time</li>
        </ul>
      </Section>
    </div>
  )
}

export default QuickStart
