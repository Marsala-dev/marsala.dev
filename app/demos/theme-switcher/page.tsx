'use client';

import CinematicThemeSwitcher from '@/components/ui/cinematic-theme-switcher';

/**
 * Demo page for Cinematic Theme Switcher
 * Navigate to /demos/theme-switcher to see this component in action
 */
export default function ThemeSwitcherDemo() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-[#1d1e1f] transition-colors duration-700 ease-in-out">
      <div className="flex min-h-screen flex-col items-center justify-center transition-colors duration-700 ease-in-out">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Cinematic Theme Switcher
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md text-center">
          Click the toggle to switch between light and dark mode with beautiful cinematic effects.
        </p>
        <CinematicThemeSwitcher />
      </div>
    </div>
  )
}
