'use client'
import { useGLTF } from '@react-three/drei'

export function Duck(props) {
  const { scene } = useGLTF('/duck.glb')

  // useFrame((state, delta) => (scene.rotation.y += delta))

  return <primitive object={scene} {...props} />
}
export function Dog(props) {
  const { scene } = useGLTF('/dog.glb')

  return <primitive object={scene} {...props} />
}
