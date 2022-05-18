import {useEffect} from "react"

const useClickAway = (ref, handler) => {

    useEffect(()=>{
        const listener = e => {

            const el = ref?.current
            if (!el || el.contains(e.target)){
                return
            }
            handler()
        }
        document.addEventListener("mousedown", listener)
        document.addEventListener("touchstart", listener)

        return () => {
            document.removeEventListener("mousedown", listener)
            document.removeEventListener("touchstart", listener)
        }
    },[ ref, handler])
}

export default useClickAway