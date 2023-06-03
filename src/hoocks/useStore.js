import { create } from "zustand";

export const useStore = create(set =>({
    texture: 'dirt',
    cubes: [{
        id:1
    }],
    addCube: ()=> {},
    removeCube: () => {},
    setTexture: ()=>{},
    saveworld: ()=>{},
    resetWorld: ()=>{}
}))