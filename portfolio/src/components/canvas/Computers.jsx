import { Suspense,useEffect ,useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls,Preload,Stars ,useGLTF } from "@react-three/drei"
import CanvasLoader from "../Loader"
const Computers = ({IsMobile}) => {
  const computer =useGLTF('./public/desktop_pc/scene.gltf')

  return (
<mesh>
  <hemisphereLight intensity={0.15} 
  groundColor="black" />
  <pointLight intensity={1} />
  <spotLight 
  position={[-20,50,10]}
  penumbra={1}
  intensity={1}
  castShadow
  shadow-mapSize={1024}
  />
  <primitive object = {computer.scene} 
  
  scale={0.7}
  position={[0,-3.25,-1.5]}
  rotation={[-0.01,-0.2,-0.1]}
  />
</mesh>
  )
}

const ComputersCanvas =()=>{
  const [IsMobile ,SetIsMobile] =useState(false)
useEffect(()=>{
const mediaQuery = window.matchMedia(('max-width:500'))
SetIsMobile(mediaQuery.matches)

const handlerMediaQuery =(e)=>{
SetIsMobile(e.matches)
}

mediaQuery.addEventListener('change',handlerMediaQuery)
return ()=>{
  mediaQuery.removeEventListener('change',handlerMediaQuery)
  
}
  // const mediaQuery = window.matchMedia('')
},[])
return (
  <Canvas
  frameloop="demand"
  shadows
  camera={{position:[20,3,5] ,fov:25}}
  gl={{preserveDrawingBuffer:true}} 
  >
  <Suspense fallback={<CanvasLoader/>} >
<OrbitControls 
enableZoom={false}
maxPolarAngle={Math.PI/2}
minPolarAngle={Math.PI /2}

/>
<Computers IsMobile={IsMobile} />

  </Suspense>
<Preload all />

  </Canvas>
)
}
export default ComputersCanvas