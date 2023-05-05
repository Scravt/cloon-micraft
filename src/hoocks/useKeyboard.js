import { useEffect, useState } from "react"
const ACTIONS_KEYBOARD_MAP = {
    KeyW: 'moveForward',
    KeyS: 'moveBackward',
    KeyA: 'moveLeft',
    KeyD: 'MoveRight',
    Space: 'jump',
    Digit1: 'dirt',
    Digit2: 'grass',
    Digit3: 'glass',
    Digit4: 'wood',
    Digit5: 'log'


}
export const useKeyboard = () => {
    const [actions, setActions] = useState({
        moveForward: false,
        moveBackward: false,
        moveLeft: false,
        moveRight: false,
        jump: false,
        dirt: false,
        glass: false,
        grass: false,
        mood: false,
        log: false,
    })
    useEffect(() => {
        const handleKeyDown = event => {
            const { code } = event
            const action = ACTIONS_KEYBOARD_MAP[code]
            if (action) {
                setActions(prevActions => ({
                    ...prevActions,
                    [action]: true
                }))

            }

            const handleKeyUp = event => {
                const { code } = event
                const action = ACTIONS_KEYBOARD_MAP[code]
                if (action) {
                    setActions(prevActions => ({
                        ...prevActions,
                        [action]: false
                    }))
                }
            }

            return () => {
                document.addEventListener('keydown', handleKeyDown),
                document.addEventListener('Keyup', handleKeyUp)

            }
        }
    }, [] )

    return actions
}