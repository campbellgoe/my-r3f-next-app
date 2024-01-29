'use client'

import { forwardRef, Suspense, useImperativeHandle, useRef } from 'react'
import { OrbitControls, PerspectiveCamera, View as ViewImpl } from '@react-three/drei'
import { Three } from '@/helpers/components/Three'

export const Common = ({ color }) => (
  <Suspense fallback={null}>
    {color && <color attach='background' args={[color]} />}
    <ambientLight />
    <pointLight position={[20, 30, 10]} intensity={3} decay={0.2} />
    <pointLight position={[-10, -10, -10]} color='blue' decay={0.2} />
    <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
  </Suspense>
)
interface ViewProps extends React.HTMLProps<HTMLDivElement> {
  children: JSX.Element;
  orbit: boolean;
}
const View = forwardRef(({ children, orbit, ...props }: ViewProps, ref) => {
  const localRef = useRef(null)
  useImperativeHandle(ref, () => localRef.current)
  return (
    <>
      <div ref={localRef} {...props} />
      <Three>
        <ViewImpl track={localRef}>
          {children}
          {orbit && <OrbitControls makeDefault minPolarAngle={Math.PI / 3.5} maxPolarAngle={Math.PI - Math.PI / 3} enablePan={false} />}
        </ViewImpl>
      </Three>
    </>
  )
})
View.displayName = 'View'

export { View }
