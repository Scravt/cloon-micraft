import { usePlane } from "@react-three/cannon";
import { groundTexture } from "../assets/img/textures";

export const Ground = () => {
    const [ref] = usePlane( ()=> ({
        rotation:[-Math.PI/2,0,0],
        position: [0,-0.5,0]
    }))

    groundTexture.repeat.set(100, 100)

  return (
    <mesh ref={ref}>
        <planeBufferGeometry attach="geometry" args={[100,100]}></planeBufferGeometry>
        <meshStandardMaterial attach='material' map={groundTexture} />
    </mesh>
  )
}
