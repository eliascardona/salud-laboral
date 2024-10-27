import { createContext, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fromLayerZeroGetAuthCurrentUser } from "../layerZero/authSlice"

const LayerOneAuthContext = createContext(null)

function LayerOneAuthProvider({ children }) {
    const dispatch = useDispatch()
    const loadingAuthSDK = useSelector((state) => state.gAuth.loadingAuthSDK)
    const errorInAuthSDK = useSelector((state) => state.gAuth.errorInAuthSDK)

    useEffect(() => {
        console.log('is AuthSDK error?', errorInAuthSDK)
        console.log('is AuthSDK loading?', loadingAuthSDK)
    }, [loadingAuthSDK, errorInAuthSDK])

    useEffect(() => {
        dispatch(fromLayerZeroGetAuthCurrentUser())
    },[dispatch])

    const gUser = useSelector((state) => state.gAuth.currentUser)

    return (
        <LayerOneAuthContext.Provider value={gUser}>
            {children}
        </LayerOneAuthContext.Provider>
    )

}

export { LayerOneAuthContext, LayerOneAuthProvider }