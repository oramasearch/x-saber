import { CircleAlert, Hammer, Rocket, Settings, Zap } from 'lucide-react'
import { type JSX, lazy, type ReactNode } from 'react'

// Getting Started pages
const LazyOverview = lazy(() => import('./pages/docs/Overview'))
const _LazyQuickStart = lazy(() => import('./pages/docs/QuickStart'))
const LazySaberStructure = lazy(() => import('./pages/docs/SaberStructure'))

// Tech Specs pages
const _LazyTechSpecs = lazy(() => import('./pages/docs/TechSpecs'))
const LazyDimensionsMaterials = lazy(() => import('./pages/docs/DimensionsMaterials'))
const LazyPowerSystem = lazy(() => import('./pages/docs/PowerSystem'))
const LazyBladeCharacteristics = lazy(() => import('./pages/docs/BladeCharacteristics'))
const LazyModularUpgrades = lazy(() => import('./pages/docs/ModularUpgrades'))

// Building Your X-Saber IV pages
const LazyRequiredComponents = lazy(() => import('./pages/docs/RequiredComponents'))
const LazyChoosingKyberCrystal = lazy(() => import('./pages/docs/ChoosingKyberCrystal'))
const LazyHiltPreparation = lazy(() => import('./pages/docs/HiltPreparation'))
const LazyKyberCrystalAlignment = lazy(() => import('./pages/docs/KyberCrystalAlignment'))
const LazyPowerCellInstallation = lazy(() => import('./pages/docs/PowerCellInstallation'))
const LazySafetyWarnings = lazy(() => import('./pages/docs/SafetyWarnings'))

// Other existing pages
const LazyAdvancedConfig = lazy(() => import('./pages/docs/AdvancedConfig'))
const _LazyCombatTraining = lazy(() => import('./pages/docs/CombatTraining'))
const LazyMaintenance = lazy(() => import('./pages/docs/Maintenance'))
const LazyUserGuides = lazy(() => import('./pages/docs/UserGuides'))

// Troubleshooting pages
const LazyCommonIssues = lazy(() => import('./pages/docs/CommonIssues'))
const LazyErrorCodes = lazy(() => import('./pages/docs/ErrorCodes'))

export type MenuItem = {
  title: string
  path: string
  element: React.LazyExoticComponent<() => JSX.Element>
}

export type MenuGroup = {
  title: string
  icon: ReactNode
  items: MenuItem[]
}

export const docsMenuGroups: MenuGroup[] = [
  {
    title: 'Getting Started',
    icon: <Rocket className='size-4' />,
    items: [
      { title: 'Overview', path: 'overview', element: LazyOverview },
      { title: 'Saber Structure', path: 'saber-structure', element: LazySaberStructure }
    ]
  },
  {
    title: 'Tech Specs',
    icon: <Zap className='size-4' />,
    items: [
      { title: 'Dimensions & Materials', path: 'dimensions-materials', element: LazyDimensionsMaterials },
      { title: 'Power System', path: 'power-system', element: LazyPowerSystem },
      { title: 'Blade Characteristics', path: 'blade-characteristics', element: LazyBladeCharacteristics },
      { title: 'Modular Upgrades', path: 'modular-upgrades', element: LazyModularUpgrades }
    ]
  },
  {
    title: 'Building Your X-Saber IV',
    icon: <Hammer className='size-4' />,
    items: [
      { title: 'Required Components', path: 'required-components', element: LazyRequiredComponents },
      { title: 'Choosing Your Kyber Crystal', path: 'choosing-kyber-crystal', element: LazyChoosingKyberCrystal },
      { title: 'Hilt Preparation', path: 'hilt-preparation', element: LazyHiltPreparation },
      { title: 'Kyber Crystal Alignment', path: 'kyber-crystal-alignment', element: LazyKyberCrystalAlignment },
      { title: 'Power Cell Installation', path: 'power-cell-installation', element: LazyPowerCellInstallation },
      { title: 'Safety Warnings', path: 'safety-warnings', element: LazySafetyWarnings }
    ]
  },
  {
    title: 'Customization & Upgrades',
    icon: <Settings className='size-4' />,
    items: [
      { title: 'Activation & Controls', path: 'activation-controls', element: LazyAdvancedConfig },
      { title: 'Adjusting Blade Length', path: 'adjusting-blade-length', element: LazyAdvancedConfig },
      { title: 'Maintenance Tips', path: 'maintenance-tips', element: LazyMaintenance },
      { title: 'Software customization', path: 'software-customization', element: LazyAdvancedConfig },
      { title: 'Developer Guidelines', path: 'developer-guidelines', element: LazyUserGuides }
    ]
  },
  {
    title: 'Troubleshooting',
    icon: <CircleAlert className='size-4' />,
    items: [
      { title: 'Common Issues', path: 'common-issues', element: LazyCommonIssues },
      { title: 'Error Codes', path: 'error-codes', element: LazyErrorCodes },
      { title: 'Support & Warranty', path: 'support-warranty', element: LazyMaintenance }
    ]
  }
]
