import { Crown, GraduationCap, Shield, Sparkles, Users, Zap } from 'lucide-react'
import { PageTitle } from '../../components/PageTitle'
import { Section } from '../../components/Section'

const UserGuides = () => {
  return (
    <div>
      <PageTitle>User Guides by Experience Level</PageTitle>

      <Section title='Tailored documentation for every Force user'>
        <p className='pb-4'>
          Experience-specific guides offering different interfaces and explanations for Padawan, Knight, Master, Temple
          Guardian, and Sith configurations with appropriate complexity levels.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
          <div className='bg-background/5 border border-border rounded-lg p-4'>
            <div className='flex items-center gap-2 mb-2'>
              <Users className='size-5 text-blue-500' />
              <span className='font-semibold text-white'>5 Experience Levels</span>
            </div>
            <p className='text-sm text-muted-foreground'>Customized for all users</p>
          </div>
          <div className='bg-background/5 border border-border rounded-lg p-4'>
            <div className='flex items-center gap-2 mb-2'>
              <Sparkles className='size-5 text-purple-500' />
              <span className='font-semibold text-white'>Adaptive Interface</span>
            </div>
            <p className='text-sm text-muted-foreground'>Content adjusts to skill</p>
          </div>
          <div className='bg-background/5 border border-border rounded-lg p-4'>
            <div className='flex items-center gap-2 mb-2'>
              <Crown className='size-5 text-amber-500' />
              <span className='font-semibold text-white'>Personalized Content</span>
            </div>
            <p className='text-sm text-muted-foreground'>Role-specific features</p>
          </div>
        </div>
      </Section>

      <Section title='Choose Your Path'>
        <div className='space-y-6'>
          {/* Padawan Edition */}
          <div className='border border-border rounded-lg p-6 bg-background/5'>
            <div className='flex items-start gap-4'>
              <div className='p-3 rounded-lg bg-blue-500/10'>
                <GraduationCap className='size-6 text-blue-500' />
              </div>
              <div className='flex-1'>
                <h3 className='text-xl font-semibold text-white mb-1'>Padawan Edition</h3>
                <p className='text-muted-foreground text-sm mb-4'>
                  For beginners and those new to lightsaber technology
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                  <div className='bg-background/10 rounded-lg p-3'>
                    <h4 className='text-white font-semibold text-sm mb-2'>Key Features</h4>
                    <ul className='text-xs text-muted-foreground space-y-1'>
                      <li>• Simplified controls interface</li>
                      <li>• Training mode locked by default</li>
                      <li>• Safety features maximized</li>
                      <li>• Step-by-step tutorials</li>
                      <li>• Basic Form I techniques only</li>
                    </ul>
                  </div>
                  <div className='bg-background/10 rounded-lg p-3'>
                    <h4 className='text-white font-semibold text-sm mb-2'>Requirements</h4>
                    <ul className='text-xs text-muted-foreground space-y-1'>
                      <li>• Midi-chlorian count: 7,000+</li>
                      <li>• Age: 10+ standard years</li>
                      <li>• Guardian approval required</li>
                      <li>• Temple registration mandatory</li>
                      <li>• Monthly safety checks</li>
                    </ul>
                  </div>
                </div>

                <div className='flex gap-2'>
                  <span className='text-xs px-2 py-1 bg-blue-500/20 text-blue-500 rounded'>Beginner</span>
                  <span className='text-xs px-2 py-1 bg-green-500/20 text-green-500 rounded'>Safety First</span>
                  <span className='text-xs px-2 py-1 bg-purple-500/20 text-purple-500 rounded'>Guided Learning</span>
                </div>
              </div>
            </div>
          </div>

          {/* Knight Configuration */}
          <div className='border border-border rounded-lg p-6 bg-background/5'>
            <div className='flex items-start gap-4'>
              <div className='p-3 rounded-lg bg-emerald-500/10'>
                <Shield className='size-6 text-emerald-500' />
              </div>
              <div className='flex-1'>
                <h3 className='text-xl font-semibold text-white mb-1'>Knight Configuration</h3>
                <p className='text-muted-foreground text-sm mb-4'>
                  For experienced practitioners ready for combat applications
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                  <div className='bg-background/10 rounded-lg p-3'>
                    <h4 className='text-white font-semibold text-sm mb-2'>Key Features</h4>
                    <ul className='text-xs text-muted-foreground space-y-1'>
                      <li>• Full combat mode access</li>
                      <li>• Forms I-V unlocked</li>
                      <li>• Custom blade configurations</li>
                      <li>• Sparring protocols enabled</li>
                      <li>• Basic Force integration</li>
                    </ul>
                  </div>
                  <div className='bg-background/10 rounded-lg p-3'>
                    <h4 className='text-white font-semibold text-sm mb-2'>Requirements</h4>
                    <ul className='text-xs text-muted-foreground space-y-1'>
                      <li>• Midi-chlorian count: 9,000+</li>
                      <li>• Completed trials</li>
                      <li>• Council approval</li>
                      <li>• 500+ training hours logged</li>
                      <li>• Combat certification</li>
                    </ul>
                  </div>
                </div>

                <div className='flex gap-2'>
                  <span className='text-xs px-2 py-1 bg-emerald-500/20 text-emerald-500 rounded'>Intermediate</span>
                  <span className='text-xs px-2 py-1 bg-red-500/20 text-red-500 rounded'>Combat Ready</span>
                  <span className='text-xs px-2 py-1 bg-blue-500/20 text-blue-500 rounded'>Mission Capable</span>
                </div>
              </div>
            </div>
          </div>

          {/* Master Settings */}
          <div className='border border-border rounded-lg p-6 bg-background/5'>
            <div className='flex items-start gap-4'>
              <div className='p-3 rounded-lg bg-purple-500/10'>
                <Zap className='size-6 text-purple-500' />
              </div>
              <div className='flex-1'>
                <h3 className='text-xl font-semibold text-white mb-1'>Master Settings</h3>
                <p className='text-muted-foreground text-sm mb-4'>
                  Full access to all features and advanced customization
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                  <div className='bg-background/10 rounded-lg p-3'>
                    <h4 className='text-white font-semibold text-sm mb-2'>Key Features</h4>
                    <ul className='text-xs text-muted-foreground space-y-1'>
                      <li>• All seven forms available</li>
                      <li>• Neural link integration</li>
                      <li>• Custom firmware access</li>
                      <li>• Advanced Force tuning</li>
                      <li>• Unrestricted modifications</li>
                    </ul>
                  </div>
                  <div className='bg-background/10 rounded-lg p-3'>
                    <h4 className='text-white font-semibold text-sm mb-2'>Requirements</h4>
                    <ul className='text-xs text-muted-foreground space-y-1'>
                      <li>• Midi-chlorian count: 12,000+</li>
                      <li>• Master rank confirmed</li>
                      <li>• 10+ years experience</li>
                      <li>• Advanced combat mastery</li>
                      <li>• Teaching credentials</li>
                    </ul>
                  </div>
                </div>

                <div className='flex gap-2'>
                  <span className='text-xs px-2 py-1 bg-purple-500/20 text-purple-500 rounded'>Expert</span>
                  <span className='text-xs px-2 py-1 bg-amber-500/20 text-amber-500 rounded'>Full Access</span>
                  <span className='text-xs px-2 py-1 bg-indigo-500/20 text-indigo-500 rounded'>Unrestricted</span>
                </div>
              </div>
            </div>
          </div>

          {/* Temple Guardian Mode */}
          <div className='border border-border rounded-lg p-6 bg-background/5'>
            <div className='flex items-start gap-4'>
              <div className='p-3 rounded-lg bg-amber-500/10'>
                <Shield className='size-6 text-amber-500' />
              </div>
              <div className='flex-1'>
                <h3 className='text-xl font-semibold text-white mb-1'>Temple Guardian Mode</h3>
                <p className='text-muted-foreground text-sm mb-4'>
                  Specialized defensive configuration for Temple security
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                  <div className='bg-background/10 rounded-lg p-3'>
                    <h4 className='text-white font-semibold text-sm mb-2'>Key Features</h4>
                    <ul className='text-xs text-muted-foreground space-y-1'>
                      <li>• Enhanced Form III focus</li>
                      <li>• Dual-blade capability</li>
                      <li>• Extended battery life</li>
                      <li>• Crowd control modes</li>
                      <li>• Security system integration</li>
                    </ul>
                  </div>
                  <div className='bg-background/10 rounded-lg p-3'>
                    <h4 className='text-white font-semibold text-sm mb-2'>Special Functions</h4>
                    <ul className='text-xs text-muted-foreground space-y-1'>
                      <li>• Stun mode enhanced</li>
                      <li>• Barrier projection</li>
                      <li>• Threat detection HUD</li>
                      <li>• Emergency beacon</li>
                      <li>• Temple network link</li>
                    </ul>
                  </div>
                </div>

                <div className='flex gap-2'>
                  <span className='text-xs px-2 py-1 bg-amber-500/20 text-amber-500 rounded'>Specialized</span>
                  <span className='text-xs px-2 py-1 bg-blue-500/20 text-blue-500 rounded'>Defensive</span>
                  <span className='text-xs px-2 py-1 bg-green-500/20 text-green-500 rounded'>Guardian</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sith Variant */}
          <div className='border border-red-500/20 rounded-lg p-6 bg-red-500/5'>
            <div className='flex items-start gap-4'>
              <div className='p-3 rounded-lg bg-red-500/10'>
                <Zap className='size-6 text-red-500' />
              </div>
              <div className='flex-1'>
                <h3 className='text-xl font-semibold text-white mb-1'>Sith Variant</h3>
                <p className='text-red-400 text-sm mb-4'>Dark side optimized configuration - use at your own risk</p>

                <div className='bg-red-500/10 border border-red-500/20 rounded-lg p-3 mb-4'>
                  <p className='text-sm text-red-400'>
                    ⚠️ Warning: This configuration removes safety limitations and enables aggressive combat protocols.
                    Not sanctioned by the Jedi Council. Warranty void upon activation.
                  </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                  <div className='bg-background/10 rounded-lg p-3'>
                    <h4 className='text-white font-semibold text-sm mb-2'>Dark Features</h4>
                    <ul className='text-xs text-muted-foreground space-y-1'>
                      <li>• Synthetic crystal support</li>
                      <li>• Overcharge capability</li>
                      <li>• Form VII Juyo/Vaapad</li>
                      <li>• Emotion-driven power</li>
                      <li>• Lightning channeling</li>
                    </ul>
                  </div>
                  <div className='bg-background/10 rounded-lg p-3'>
                    <h4 className='text-white font-semibold text-sm mb-2'>Modifications</h4>
                    <ul className='text-xs text-muted-foreground space-y-1'>
                      <li>• Safety protocols disabled</li>
                      <li>• Power limiters removed</li>
                      <li>• Bleeding crystal mode</li>
                      <li>• Cortosis detection</li>
                      <li>• Dark side attunement</li>
                    </ul>
                  </div>
                </div>

                <div className='flex gap-2'>
                  <span className='text-xs px-2 py-1 bg-red-500/20 text-red-500 rounded'>Dangerous</span>
                  <span className='text-xs px-2 py-1 bg-purple-500/20 text-purple-500 rounded'>Unrestricted</span>
                  <span className='text-xs px-2 py-1 bg-orange-500/20 text-orange-500 rounded'>Dark Side</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title='Switching Between Configurations'>
        <div className='bg-background/5 border border-border rounded-lg p-6'>
          <h3 className='text-white font-semibold mb-4'>Configuration Management</h3>
          <p className='text-muted-foreground mb-4'>
            Your X-Saber IV can store up to 5 different configuration profiles. Switch between them based on your needs:
          </p>

          <div className='space-y-3'>
            <div className='flex items-center gap-3'>
              <div className='w-2 h-2 bg-green-500 rounded-full' />
              <p className='text-sm text-muted-foreground'>
                <strong className='text-white'>Quick Switch:</strong> Hold mode button + activation for 3 seconds
              </p>
            </div>
            <div className='flex items-center gap-3'>
              <div className='w-2 h-2 bg-blue-500 rounded-full' />
              <p className='text-sm text-muted-foreground'>
                <strong className='text-white'>Profile Lock:</strong> Prevent accidental changes with biometric
                authentication
              </p>
            </div>
            <div className='flex items-center gap-3'>
              <div className='w-2 h-2 bg-purple-500 rounded-full' />
              <p className='text-sm text-muted-foreground'>
                <strong className='text-white'>Cloud Sync:</strong> Backup and restore profiles via HoloNet connection
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section title='Recommended Learning Path'>
        <div className='relative'>
          <div className='absolute left-6 top-8 bottom-0 w-0.5 bg-border' />

          <div className='space-y-8'>
            {[
              { level: 'Padawan', duration: '6-12 months', focus: 'Safety, basics, Form I' },
              { level: 'Knight', duration: '2-3 years', focus: 'Combat skills, Forms II-V' },
              { level: 'Master', duration: '5+ years', focus: 'Advanced techniques, all forms' },
              { level: 'Specialized', duration: 'Role-specific', focus: 'Guardian or variant paths' }
            ].map((stage, index) => (
              <div
                key={stage.level}
                className='flex gap-4'>
                <div className='relative z-10 w-12 h-12 bg-background border-2 border-purple-500 rounded-full flex items-center justify-center'>
                  <span className='text-purple-500 font-bold'>{index + 1}</span>
                </div>
                <div className='flex-1 bg-background/5 border border-border rounded-lg p-4'>
                  <h4 className='text-white font-semibold'>{stage.level}</h4>
                  <p className='text-sm text-muted-foreground'>
                    Duration: {stage.duration} • Focus: {stage.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}

export default UserGuides
