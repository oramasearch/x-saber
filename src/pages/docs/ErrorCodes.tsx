import { AlertCircle, Info, XCircle } from 'lucide-react'
import { PageTitle } from '../../components/PageTitle'
import { Section } from '../../components/Section'

const ErrorCodes = () => {
  return (
    <div>
      <PageTitle>Error Codes</PageTitle>

      <Section title='Understanding Error Codes'>
        <p className='mb-4'>
          The X-Saber IV uses a comprehensive error reporting system. Error codes are displayed via LED patterns and, if
          connected, through the companion app. Each code indicates a specific issue requiring attention.
        </p>
        <div className='p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg'>
          <Info className='size-5 text-blue-600 dark:text-blue-400 mb-2' />
          <p className='text-sm'>
            Error codes follow the format: <span className='font-mono'>E[XX]-[YYY]</span> where XX is the system
            identifier and YYY is the specific error number.
          </p>
        </div>
      </Section>

      <Section title='Critical Errors (E01-E10)'>
        <div className='space-y-3'>
          <div className='p-4 bg-red-50 dark:bg-red-900/20 rounded-lg'>
            <div className='flex items-start gap-3'>
              <XCircle className='size-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5' />
              <div className='w-full'>
                <div className='flex justify-between items-start mb-2'>
                  <h4 className='font-mono font-semibold'>E01-001</h4>
                  <span className='text-xs bg-red-100 dark:bg-red-900 px-2 py-1 rounded'>CRITICAL</span>
                </div>
                <p className='font-medium text-sm mb-1'>Crystal Chamber Breach</p>
                <p className='text-sm text-gray-600 dark:text-gray-400 mb-2'>
                  Containment field failure detected. Crystal energy leaking.
                </p>
                <p className='text-sm font-medium'>Action: Immediate shutdown required</p>
              </div>
            </div>
          </div>

          <div className='p-4 bg-red-50 dark:bg-red-900/20 rounded-lg'>
            <div className='flex items-start gap-3'>
              <XCircle className='size-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5' />
              <div className='w-full'>
                <div className='flex justify-between items-start mb-2'>
                  <h4 className='font-mono font-semibold'>E02-003</h4>
                  <span className='text-xs bg-red-100 dark:bg-red-900 px-2 py-1 rounded'>CRITICAL</span>
                </div>
                <p className='font-medium text-sm mb-1'>Power Cell Overheat</p>
                <p className='text-sm text-gray-600 dark:text-gray-400 mb-2'>
                  Temperature exceeds safe operating limits. Risk of thermal runaway.
                </p>
                <p className='text-sm font-medium'>Action: Remove power cell, allow 30-minute cooldown</p>
              </div>
            </div>
          </div>

          <div className='p-4 bg-red-50 dark:bg-red-900/20 rounded-lg'>
            <div className='flex items-start gap-3'>
              <XCircle className='size-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5' />
              <div className='w-full'>
                <div className='flex justify-between items-start mb-2'>
                  <h4 className='font-mono font-semibold'>E03-002</h4>
                  <span className='text-xs bg-red-100 dark:bg-red-900 px-2 py-1 rounded'>CRITICAL</span>
                </div>
                <p className='font-medium text-sm mb-1'>Main Board Failure</p>
                <p className='text-sm text-gray-600 dark:text-gray-400 mb-2'>
                  Primary control system not responding. Hardware fault detected.
                </p>
                <p className='text-sm font-medium'>Action: Professional service required</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title='System Errors (E11-E30)'>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead className='bg-gray-50 dark:bg-gray-900/50'>
              <tr>
                <th className='text-left p-3'>Code</th>
                <th className='text-left p-3'>Description</th>
                <th className='text-left p-3'>Cause</th>
                <th className='text-left p-3'>Solution</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
              <tr>
                <td className='p-3 font-mono'>E11-101</td>
                <td className='p-3'>Memory Corruption</td>
                <td className='p-3'>Config file damaged</td>
                <td className='p-3'>Factory reset required</td>
              </tr>
              <tr>
                <td className='p-3 font-mono'>E12-201</td>
                <td className='p-3'>Firmware Mismatch</td>
                <td className='p-3'>Incompatible versions</td>
                <td className='p-3'>Update all components</td>
              </tr>
              <tr>
                <td className='p-3 font-mono'>E13-301</td>
                <td className='p-3'>Sensor Timeout</td>
                <td className='p-3'>Motion sensor disconnect</td>
                <td className='p-3'>Check ribbon cable</td>
              </tr>
              <tr>
                <td className='p-3 font-mono'>E14-401</td>
                <td className='p-3'>Audio System Error</td>
                <td className='p-3'>Speaker/amp failure</td>
                <td className='p-3'>Replace audio module</td>
              </tr>
              <tr>
                <td className='p-3 font-mono'>E15-501</td>
                <td className='p-3'>Crystal Not Found</td>
                <td className='p-3'>No crystal detected</td>
                <td className='p-3'>Re-seat crystal</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section title='Warning Codes (W01-W20)'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg'>
            <AlertCircle className='size-5 text-yellow-600 dark:text-yellow-400 mb-2' />
            <h4 className='font-mono font-semibold mb-1'>W01-001</h4>
            <p className='font-medium text-sm'>Low Battery Warning</p>
            <p className='text-sm text-gray-600 dark:text-gray-400 mt-1'>
              Power cell below 20%. Reduced performance mode activated.
            </p>
          </div>
          <div className='p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg'>
            <AlertCircle className='size-5 text-yellow-600 dark:text-yellow-400 mb-2' />
            <h4 className='font-mono font-semibold mb-1'>W02-002</h4>
            <p className='font-medium text-sm'>High Temperature</p>
            <p className='text-sm text-gray-600 dark:text-gray-400 mt-1'>
              Operating temperature elevated. Cooldown recommended.
            </p>
          </div>
          <div className='p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg'>
            <AlertCircle className='size-5 text-yellow-600 dark:text-yellow-400 mb-2' />
            <h4 className='font-mono font-semibold mb-1'>W03-003</h4>
            <p className='font-medium text-sm'>Calibration Needed</p>
            <p className='text-sm text-gray-600 dark:text-gray-400 mt-1'>
              Motion sensors require recalibration for optimal performance.
            </p>
          </div>
          <div className='p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg'>
            <AlertCircle className='size-5 text-yellow-600 dark:text-yellow-400 mb-2' />
            <h4 className='font-mono font-semibold mb-1'>W04-004</h4>
            <p className='font-medium text-sm'>Maintenance Due</p>
            <p className='text-sm text-gray-600 dark:text-gray-400 mt-1'>
              500 hours of operation reached. Service recommended.
            </p>
          </div>
        </div>
      </Section>

      <Section title='Info Codes (I01-I10)'>
        <div className='p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg'>
          <h4 className='font-semibold mb-3'>Informational Messages</h4>
          <div className='space-y-2 text-sm'>
            <div className='flex justify-between'>
              <span className='font-mono'>I01-001</span>
              <span>System boot complete</span>
            </div>
            <div className='flex justify-between'>
              <span className='font-mono'>I02-002</span>
              <span>Firmware update available</span>
            </div>
            <div className='flex justify-between'>
              <span className='font-mono'>I03-003</span>
              <span>Bluetooth connected</span>
            </div>
            <div className='flex justify-between'>
              <span className='font-mono'>I04-004</span>
              <span>Safe mode activated</span>
            </div>
            <div className='flex justify-between'>
              <span className='font-mono'>I05-005</span>
              <span>Diagnostic complete</span>
            </div>
          </div>
        </div>
      </Section>

      <Section title='LED Pattern Reference'>
        <div className='p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg'>
          <p className='text-sm mb-4'>When the display is not available, errors are shown via LED patterns:</p>
          <div className='space-y-3'>
            <div className='flex items-center gap-4'>
              <div className='flex gap-1'>
                <div className='w-3 h-3 bg-red-500 rounded-full'></div>
                <div className='w-3 h-3 bg-red-500 rounded-full'></div>
                <div className='w-3 h-3 bg-red-500 rounded-full'></div>
              </div>
              <span className='text-sm'>3 Red Flashes = Critical Error</span>
            </div>
            <div className='flex items-center gap-4'>
              <div className='flex gap-1'>
                <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
                <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
                <div className='w-3 h-3 bg-gray-300 rounded-full'></div>
              </div>
              <span className='text-sm'>2 Yellow Flashes = Warning</span>
            </div>
            <div className='flex items-center gap-4'>
              <div className='flex gap-1'>
                <div className='w-3 h-3 bg-blue-500 rounded-full'></div>
                <div className='w-3 h-3 bg-gray-300 rounded-full'></div>
                <div className='w-3 h-3 bg-gray-300 rounded-full'></div>
              </div>
              <span className='text-sm'>1 Blue Flash = Info Message</span>
            </div>
          </div>
        </div>
      </Section>

      <Section title='Clearing Error Codes'>
        <div className='p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg'>
          <h4 className='font-semibold mb-3'>Reset Procedures</h4>
          <ol className='list-decimal ml-5 space-y-2 text-sm'>
            <li>Power down the saber completely</li>
            <li>Remove power cell for 10 seconds</li>
            <li>Hold both activation switches while reinserting power cell</li>
            <li>Continue holding for 5 seconds after LED appears</li>
            <li>Release when you hear the reset confirmation tone</li>
          </ol>
          <p className='mt-3 text-sm font-medium'>Note: This clears error logs but does not fix underlying issues.</p>
        </div>
      </Section>
    </div>
  )
}

export default ErrorCodes
