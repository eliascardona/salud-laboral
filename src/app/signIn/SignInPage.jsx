import { useContext, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { AuthFirstLayerContext } from "../../redux/slices/auth/layerOne/AuthFirstLayerContext"
import LoadingAuthUI from '../../components/ui/helpers/LoadingAuthUI'
import AuthErrorUI from '../../components/ui/helpers/AuthErrorUI'
import SignInForm from '../../components/auth/signin/logic/SignInForm'
import { redirect } from 'react-router-dom'

export default function SignInPage() {
    const { loadingAuthSDK, errorInAuthSDK, gUser } = useContext(AuthFirstLayerContext)
    const [flag, setFlag] = useState(true)
    const [errorFlag, setErrorFlag] = useState(false)
    const redirectTo = (route) => {
        redirect(route)
    }

    // useEffect(() => {
    //     let isMounted = true
    //     const timeoutId = setTimeout(() => {
    //         if(isMounted) {
    //             setErrorFlag(true)
    //         }
    //     }, 10000)

    //     if(loadingAuthSDK || errorInAuthSDK) {
    //         setFlag(false)
    //         clearTimeout(timeoutId)
    //     } else {
    //         setFlag(true)
    //     }

    //     return () => {
    //         isMounted = false
    //         clearTimeout(timeoutId)
    //     }
    // }, [loadingAuthSDK, errorInAuthSDK])

    // if(errorFlag) {
    //     return <AuthErrorUI errorMessage="Ocurrió un error interno, por favor refresca la página" />
    // }

    // if(flag) {
    //     if(errorInAuthSDK) return <AuthErrorUI errorMessage={errorInAuthSDK} />

    //     const reduxCurrentUser = useSelector(state => state.gAuth.currentUser)

    //     if(reduxCurrentUser === null) {
    //         return <>
    //             <h2>{"hola"}</h2>
    //             <h3>{reduxCurrentUser}</h3>
    //         </>
    //     } else {
    //         redirectTo("/")
    //     }
    // }

    // return <LoadingAuthUI />

    return (
        <SignInForm />
    )

}