import { useStore } from "zustand";


import React from 'react'

export const Cubes = () => {
    const [cubes] = useStore(state=> [state.cubes])

  return (  
    cubes.map(({id,pos, texture}) =>{
        <cube key={id} position={pos} texture ={texture} />
    })
    
  )
}
