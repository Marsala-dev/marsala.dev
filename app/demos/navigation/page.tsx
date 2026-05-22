import { PillBase } from '@/components/ui/3d-adaptive-navigation-bar'

/**
 * Demo page for 3D Adaptive Navigation Bar
 * Navigate to /demos/navigation to see this component in action
 */
export default function NavigationDemo() {
  return (
    <div
      style={{
        background: '#ffffff',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h1
          style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '2rem',
            color: '#1a1a1a',
          }}
        >
          3D Adaptive Navigation Bar
        </h1>
        <p
          style={{
            marginBottom: '3rem',
            color: '#656565',
            maxWidth: '600px',
            margin: '0 auto 3rem',
          }}
        >
          Hover over the navigation pill to see it expand. Click on any section to navigate.
        </p>
        <PillBase />
      </div>
    </div>
  )
}
