import { Gem, Heart, Sparkles, Star } from 'lucide-react'
import { PageTitle } from '../../components/PageTitle'
import { Section } from '../../components/Section'

const ChoosingKyberCrystal = () => {
  return (
    <div>
      <PageTitle>Choosing Your Kyber Crystal</PageTitle>

      <Section title='Understanding Kyber Crystals'>
        <p>
          The Kyber crystal is the heart of your lightsaber, determining not only its color but also its unique
          characteristics. Each crystal resonates with the Force differently, creating a personal bond with its wielder.
        </p>
      </Section>

      <Section title='Crystal Types & Properties'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg'>
            <div className='flex items-center gap-2 mb-2'>
              <Gem className='size-5 text-blue-600 dark:text-blue-400' />
              <h4 className='font-semibold'>Ilum Crystals</h4>
            </div>
            <p className='text-sm mb-2'>Most common, naturally occurring</p>
            <ul className='text-sm space-y-1'>
              <li>• Colors: Blue, Green, rarely Yellow</li>
              <li>• Stability: Excellent</li>
              <li>• Power Output: Standard</li>
              <li>• Attunement Time: 24-48 hours</li>
            </ul>
          </div>
          <div className='p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg'>
            <div className='flex items-center gap-2 mb-2'>
              <Star className='size-5 text-purple-600 dark:text-purple-400' />
              <h4 className='font-semibold'>Synthetic Crystals</h4>
            </div>
            <p className='text-sm mb-2'>Lab-grown, customizable properties</p>
            <ul className='text-sm space-y-1'>
              <li>• Colors: Any spectrum possible</li>
              <li>• Stability: Variable (85-95%)</li>
              <li>• Power Output: +10-20% boost</li>
              <li>• Attunement Time: 6-12 hours</li>
            </ul>
          </div>
          <div className='p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg'>
            <div className='flex items-center gap-2 mb-2'>
              <Sparkles className='size-5 text-amber-600 dark:text-amber-400' />
              <h4 className='font-semibold'>Rare Crystals</h4>
            </div>
            <p className='text-sm mb-2'>Unique properties and origins</p>
            <ul className='text-sm space-y-1'>
              <li>• Krayt Dragon Pearl: +30% power</li>
              <li>• Solari Crystal: Light-side aligned</li>
              <li>• Qixoni Crystal: Enhanced focus</li>
              <li>• Kaiburr Shard: Force amplification</li>
            </ul>
          </div>
          <div className='p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl'>
            <div className='flex items-center gap-2 mb-2'>
              <Heart className='size-5 text-emerald-600 dark:text-emerald-400' />
              <h4 className='font-semibold'>Bonded Crystals</h4>
            </div>
            <p className='text-sm mb-2'>Pre-attuned to specific users</p>
            <ul className='text-sm space-y-1'>
              <li>• Instant recognition</li>
              <li>• Cannot be used by others</li>
              <li>• Enhanced blade stability</li>
              <li>• Grows stronger over time</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title='Color Meanings & Associations'>
        <div className='space-y-4'>
          <div className='grid gap-3'>
            <div className='flex items-center gap-3'>
              <div className='w-4 h-4 bg-blue-500 rounded'></div>
              <div>
                <span className='font-medium'>Blue:</span>
                <span className='text-sm text-gray-600 dark:text-gray-400 ml-2'>
                  Guardian, justice, protection, valor
                </span>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <div className='w-4 h-4 bg-green-500 rounded'></div>
              <div>
                <span className='font-medium'>Green:</span>
                <span className='text-sm text-gray-600 dark:text-gray-400 ml-2'>
                  Consular, wisdom, negotiation, Force abilities
                </span>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <div className='w-4 h-4 bg-purple-500 rounded'></div>
              <div>
                <span className='font-medium'>Purple:</span>
                <span className='text-sm text-gray-600 dark:text-gray-400 ml-2'>
                  Balance, moral ambiguity, unique path
                </span>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <div className='w-4 h-4 bg-yellow-500 rounded'></div>
              <div>
                <span className='font-medium'>Yellow:</span>
                <span className='text-sm text-gray-600 dark:text-gray-400 ml-2'>
                  Sentinel, balance of combat and study
                </span>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <div className='w-4 h-4 bg-orange-500 rounded'></div>
              <div>
                <span className='font-medium'>Orange:</span>
                <span className='text-sm text-gray-600 dark:text-gray-400 ml-2'>
                  Negotiation, non-violence preference
                </span>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <div className='w-4 h-4 bg-white border border-gray-300 rounded'></div>
              <div>
                <span className='font-medium'>White:</span>
                <span className='text-sm text-gray-600 dark:text-gray-400 ml-2'>
                  Purity, neutrality, Imperial Knights
                </span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title='Crystal Selection Process'>
        <ol className='list-decimal ml-5 space-y-3'>
          <li>
            <span className='font-medium'>Initial Meditation:</span>
            <p className='text-sm text-gray-600 dark:text-gray-400 mt-1'>
              Clear your mind and focus on your intentions. The crystal should call to you through the Force.
            </p>
          </li>
          <li>
            <span className='font-medium'>Physical Examination:</span>
            <p className='text-sm text-gray-600 dark:text-gray-400 mt-1'>
              Look for clarity, no visible cracks, and consistent color throughout.
            </p>
          </li>
          <li>
            <span className='font-medium'>Resonance Test:</span>
            <p className='text-sm text-gray-600 dark:text-gray-400 mt-1'>
              Hold the crystal and feel for warmth or vibration - signs of compatibility.
            </p>
          </li>
          <li>
            <span className='font-medium'>Trial Installation:</span>
            <p className='text-sm text-gray-600 dark:text-gray-400 mt-1'>
              The X-Saber IV includes a test mode to verify crystal compatibility before final installation.
            </p>
          </li>
        </ol>
      </Section>

      <Section title='Crystal Care & Maintenance'>
        <div className='p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg'>
          <h4 className='font-semibold mb-3'>Best Practices</h4>
          <ul className='space-y-2 text-sm'>
            <li>• Store unused crystals in padded containers away from direct sunlight</li>
            <li>• Clean crystals with soft cloth only - no chemicals</li>
            <li>• Periodic meditation with your crystal strengthens the bond</li>
            <li>• Never expose crystals to extreme temperatures</li>
            <li>• Re-attune after any major impact or if blade behavior changes</li>
          </ul>
        </div>
      </Section>
    </div>
  )
}

export default ChoosingKyberCrystal
