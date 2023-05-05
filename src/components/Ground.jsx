import { usePlane } from "@react-three/cannon";

export const Ground = () => {
    const [ref] = usePlane( ()=> ({
        rotation:[-Math.PI/2,0,0],
        position: [0,-0.5,0]
    }))


  return (
    <mesh ref={ref}>
        <planeBufferGeometry attach="geometry" args={[100,100]}></planeBufferGeometry>
        <meshStandardMaterial attach='material' color='green' />
    </mesh>
  )
}
