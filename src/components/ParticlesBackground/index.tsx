import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import type { Engine } from 'tsparticles-engine'

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])

  return (
    <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor:'#000',
        zIndex: 1,
        opacity:1
      }}>

      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: true },
          particles: {
            number: { value: 130 },
            color: { value: '#fff' },
            shape: { type: 'circle' },
            size: { value: 1 },
            move: { enable: true, speed: 0.2 },
            opacity: { value: 1 },
            links: {
              enable: false,
              distance: 150,
              color: '#ffffff',
              opacity: 1,
              width: 0.5,
            }
          },
          interactivity: {
            events: {
              onHover: { enable: false, mode: 'grab' },
              onClick: { enable: false, mode: 'push' }
            },
            modes: {
              grab: { distance: 140 },
              push: { quantity: 4 }
            }
          },
          retina_detect: true,
        }}
      />
    </div>
  )
}
