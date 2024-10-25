import { createContext, useEffect } from "react"
// import { auth } from "../../../../lib/sdk/firebase"
import { useDispatch, useSelector } from "react-redux"
import { fromLayerZeroGetAuthCurrentUser } from "../layerZero/authSlice"

const AuthFirstLayerContext = createContext(null)

function AuthFirstLayerProvider({ children }) {
    const dispatch = useDispatch()
    const loadingAuthSDK = useSelector((state) => state.gAuth.loadingAuthSDK)
    const errorInAuthSDK = useSelector((state) => state.gAuth.errorInAuthSDK)

    useEffect(() => {
        console.log('is AuthSDK loading?', loadingAuthSDK)
    }, [loadingAuthSDK])

    useEffect(() => {
        dispatch(fromLayerZeroGetAuthCurrentUser())
    },[dispatch])

    const gUser = useSelector((state) => state.gAuth.currentUser)

    return (
        <AuthFirstLayerContext.Provider value={{loadingAuthSDK, errorInAuthSDK, gUser}}>
            {children}
        </AuthFirstLayerContext.Provider>
    )

}

export { AuthFirstLayerContext, AuthFirstLayerProvider }