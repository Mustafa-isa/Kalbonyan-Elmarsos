import { Suspense, useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload, Float } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

const Stars = (props) => {
  const rf = useRef()
  const sphere = random.inSphere(new Float32Array(500), { radius: 1.2 })

  useFrame((state, delta) => {
    rf.current.rotation.y -= delta / 10
    rf.current.rotation.x -= delta / 15
  })

  return (
    <group rotation={[0, 0, Math.PI / 2]}>
      <Points
        ref={rf}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default StarsCanvas