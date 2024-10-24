import { useContext, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { AuthFirstLayerContext } from "../../redux/slices/auth/layerOne/AuthFirstLayerContext"
import LoadingAuthUI from '../../components/ui/helpers/LoadingAuthUI'
import AuthErrorUI from '../../components/ui/helpers/AuthErrorUI'
import HomePage from './HomePage'

export default function HomeOrchestator() {
    const { loadingAuthSDK, errorInAuthSDK, gUser } = useContext(AuthFirstLayerContext)
    const [flag, setFlag] = useState(false)
    const [errorFlag, setErrorFlag] = useState(false)

    useEffect(() => {
        let isMounted = true
        const timeoutId = setTimeout(() => {
            if(isMounted) {
                setErrorFlag(true)
            }
        }, 10000)

        if(loadingAuthSDK || errorInAuthSDK) {
            setFlag(false)
            clearTimeout(timeoutId)
        } else {
            setFlag(true)
        }

        return () => {
            isMounted = false
            clearTimeout(timeoutId)
        }
    }, [loadingAuthSDK, errorInAuthSDK])

    if(errorFlag) {
        return <AuthErrorUI errorMessage="Ocurrió un error interno, por favor refresca la página" />
    }

    if(flag) {
        if(errorInAuthSDK) return <AuthErrorUI errorMessage={errorInAuthSDK} />

        const reduxCurrentUser = useSelector(state => state.gAuth.currentUser)
        return <HomePage gUser={reduxCurrentUser} />
    }

    return <LoadingAuthUI />
}