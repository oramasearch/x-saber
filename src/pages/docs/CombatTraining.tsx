import { Activity, BookOpen, Swords, Target, TrendingUp, Users } from 'lucide-react'
import { PageTitle } from '../../components/PageTitle'
import { Section } from '../../components/Section'

const CombatTraining = () => {
  return (
    <div>
      <PageTitle>Combat Training & Techniques</PageTitle>

      <Section title='Master all seven classical lightsaber forms'>
        <p className='pb-4'>
          Comprehensive combat training covering all seven lightsaber forms, from basic Shii-Cho to advanced Vaapad.
          Includes technique breakdowns, sparring protocols, and progression tracking.
        </p>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-6'>
          <div className='bg-background/5 border border-border rounded-lg p-4'>
            <Swords className='size-5 text-red-500 mb-2' />
            <p className='text-2xl font-bold text-white'>7</p>
            <p className='text-sm text-muted-foreground'>Combat Forms</p>
          </div>
          <div className='bg-background/5 border border-border rounded-lg p-4'>
            <BookOpen className='size-5 text-blue-500 mb-2' />
            <p className='text-2xl font-bold text-white'>100+</p>
            <p className='text-sm text-muted-foreground'>Techniques</p>
          </div>
          <div className='bg-background/5 border border-border rounded-lg p-4'>
            <TrendingUp className='size-5 text-green-500 mb-2' />
            <p className='text-2xl font-bold text-white'>Variable</p>
            <p className='text-sm text-muted-foreground'>Difficulty</p>
          </div>
          <div className='bg-background/5 border border-border rounded-lg p-4'>
            <Users className='size-5 text-purple-500 mb-2' />
            <p className='text-2xl font-bold text-white'>All</p>
            <p className='text-sm text-muted-foreground'>Skill Levels</p>
          </div>
        </div>
      </Section>

      <Section title='The Seven Forms'>
        <div className='space-y-6'>
          {[
            {
              form: 'Form I: Shii-Cho',
              subtitle: 'The Way of the Sarlacc',
              description:
                'The most basic form of lightsaber combat. Focuses on disarming and defense against multiple opponents.',
              keyTechniques: [
                'Basic strikes and parries',
                'Zone defense',
                'Disarming strikes',
                'Wide sweeping attacks'
              ],
              difficulty: 'Beginner',
              color: 'blue'
            },
            {
              form: 'Form II: Makashi',
              subtitle: 'The Way of the Ysalamiri',
              description: 'A refined form emphasizing precision and efficiency in one-on-one dueling.',
              keyTechniques: ['Precise thrusts', 'Minimal blade movement', 'Footwork patterns', 'Riposte techniques'],
              difficulty: 'Intermediate',
              color: 'purple'
            },
            {
              form: 'Form III: Soresu',
              subtitle: 'The Way of the Mynock',
              description: 'The most defensive form, designed to outlast opponents through superior endurance.',
              keyTechniques: [
                'Tight defensive zones',
                'Energy conservation',
                'Blast deflection',
                'Counterattack timing'
              ],
              difficulty: 'Intermediate',
              color: 'green'
            },
            {
              form: 'Form IV: Ataru',
              subtitle: 'The Way of the Hawk-Bat',
              description: 'An aggressive form that incorporates Force-enhanced acrobatics.',
              keyTechniques: ['Aerial attacks', 'Force-enhanced jumps', 'Spinning attacks', 'Momentum chains'],
              difficulty: 'Advanced',
              color: 'yellow'
            },
            {
              form: 'Form V: Shien/Djem So',
              subtitle: 'The Way of the Krayt Dragon',
              description: 'A powerful form that turns defense into offense through counterattacks.',
              keyTechniques: ['Power blocks', 'Immediate counters', 'Dominating strikes', 'Blaster bolt redirection'],
              difficulty: 'Advanced',
              color: 'orange'
            },
            {
              form: 'Form VI: Niman',
              subtitle: 'The Way of the Rancor',
              description: 'A balanced form that combines elements from all previous forms.',
              keyTechniques: ['Form integration', 'Force power usage', 'Tactical flexibility', 'Dual-blade techniques'],
              difficulty: 'Expert',
              color: 'indigo'
            },
            {
              form: 'Form VII: Juyo/Vaapad',
              subtitle: 'The Way of the Vornskr',
              description: 'The most aggressive and unpredictable form, channeling inner darkness.',
              keyTechniques: ['Unpredictable strikes', 'Emotional channeling', 'Overwhelming assault', 'Kinetic loops'],
              difficulty: 'Master',
              color: 'red'
            }
          ].map(form => (
            <div
              key={form.form}
              className='border border-border rounded-lg p-6 bg-background/5'>
              <div className='flex items-start justify-between mb-3'>
                <div>
                  <h3 className='text-white font-semibold text-lg'>{form.form}</h3>
                  <p className='text-muted-foreground text-sm italic'>{form.subtitle}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded text-xs font-medium bg-${form.color}-500/20 text-${form.color}-500`}>
                  {form.difficulty}
                </span>
              </div>
              <p className='text-muted-foreground mb-4'>{form.description}</p>
              <div>
                <h4 className='text-white font-semibold mb-2'>Key Techniques:</h4>
                <ul className='list-disc ml-5 text-sm text-muted-foreground space-y-1'>
                  {form.keyTechniques.map(technique => (
                    <li key={technique}>{technique}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title='Sparring Protocols'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='border border-border rounded-lg p-6 bg-background/5'>
            <div className='flex items-start gap-4'>
              <Target className='size-6 text-green-500 mt-1' />
              <div>
                <h3 className='text-white font-semibold mb-2'>Training Mode Sparring</h3>
                <p className='text-muted-foreground text-sm mb-3'>
                  Safe practice with reduced blade intensity (40% power). Automatic shutdown on critical hits.
                </p>
                <ul className='text-sm text-muted-foreground space-y-1'>
                  <li>• Touch scoring system</li>
                  <li>• Form-specific drills</li>
                  <li>• AI opponent simulation</li>
                  <li>• Real-time form analysis</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='border border-border rounded-lg p-6 bg-background/5'>
            <div className='flex items-start gap-4'>
              <Activity className='size-6 text-red-500 mt-1' />
              <div>
                <h3 className='text-white font-semibold mb-2'>Competition Mode</h3>
                <p className='text-muted-foreground text-sm mb-3'>
                  Regulated dueling with official tournament settings and scoring systems.
                </p>
                <ul className='text-sm text-muted-foreground space-y-1'>
                  <li>• 60% blade intensity</li>
                  <li>• Point-based scoring</li>
                  <li>• Time limits enforced</li>
                  <li>• Judge mode connectivity</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title='Step-by-Step Technique Tutorials'>
        <div className='bg-background/5 border border-border rounded-lg p-6'>
          <h3 className='text-white font-semibold mb-4'>Interactive Learning System</h3>
          <p className='text-muted-foreground mb-4'>
            Access holographic tutorials that guide you through each technique with real-time feedback.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='space-y-3'>
              <h4 className='text-white font-semibold'>Basic Techniques</h4>
              <div className='space-y-2'>
                {[
                  'Opening Stance',
                  'Basic Guard',
                  'Horizontal Strike',
                  'Vertical Strike',
                  'Diagonal Cut',
                  'Thrust'
                ].map(technique => (
                  <div
                    key={technique}
                    className='flex items-center justify-between p-2 bg-background/10 rounded'>
                    <span className='text-sm text-muted-foreground'>{technique}</span>
                    <span className='text-xs text-green-500'>Available</span>
                  </div>
                ))}
              </div>
            </div>

            <div className='space-y-3'>
              <h4 className='text-white font-semibold'>Advanced Techniques</h4>
              <div className='space-y-2'>
                {['Sai Tok', 'Cho Mai', 'Cho Mok', 'Shiak', 'Shiim', 'Mou Kei'].map(technique => (
                  <div
                    key={technique}
                    className='flex items-center justify-between p-2 bg-background/10 rounded'>
                    <span className='text-sm text-muted-foreground'>{technique}</span>
                    <span className='text-xs text-amber-500'>Requires Master</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title='Performance Analytics'>
        <div className='space-y-4'>
          <p className='text-muted-foreground'>Track your progress with advanced combat analytics that measure:</p>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='bg-background/5 border border-border rounded-lg p-4'>
              <h4 className='text-white font-semibold mb-2'>Strike Metrics</h4>
              <ul className='text-sm text-muted-foreground space-y-1'>
                <li>• Strike speed (m/s)</li>
                <li>• Impact force (N)</li>
                <li>• Accuracy percentage</li>
                <li>• Combo efficiency</li>
              </ul>
            </div>

            <div className='bg-background/5 border border-border rounded-lg p-4'>
              <h4 className='text-white font-semibold mb-2'>Defense Analysis</h4>
              <ul className='text-sm text-muted-foreground space-y-1'>
                <li>• Block success rate</li>
                <li>• Parry timing</li>
                <li>• Zone coverage</li>
                <li>• Counter frequency</li>
              </ul>
            </div>

            <div className='bg-background/5 border border-border rounded-lg p-4'>
              <h4 className='text-white font-semibold mb-2'>Form Mastery</h4>
              <ul className='text-sm text-muted-foreground space-y-1'>
                <li>• Form adherence score</li>
                <li>• Technique execution</li>
                <li>• Transition fluidity</li>
                <li>• Energy efficiency</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section title='Multi-Form Integration'>
        <div className='bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 mb-4'>
          <p className='text-white font-semibold mb-1'>Advanced Training Module</p>
          <p className='text-sm text-muted-foreground'>
            Combining multiple forms requires extensive practice and deep understanding of each form's principles.
            Recommended only for Knights and above.
          </p>
        </div>

        <p className='text-muted-foreground mb-4'>
          Learn to seamlessly transition between forms mid-combat for tactical advantage:
        </p>

        <ul className='list-disc ml-5 text-muted-foreground space-y-2'>
          <li>
            <strong className='text-white'>Soresu to Djem So:</strong> Transition from defense to powerful counterattack
          </li>
          <li>
            <strong className='text-white'>Ataru to Makashi:</strong> Switch from acrobatic assault to precise dueling
          </li>
          <li>
            <strong className='text-white'>Niman Integration:</strong> Fluidly combine elements from all forms
          </li>
          <li>
            <strong className='text-white'>Vaapad Loops:</strong> Create kinetic feedback loops with opponent's energy
          </li>
        </ul>
      </Section>
    </div>
  )
}

export default CombatTraining
