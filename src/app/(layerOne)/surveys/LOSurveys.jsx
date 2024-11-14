import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { typeofHandler } from "../../../lib/utils/helpers/typeofVar"
//import { setUserUID } from "../../../redux/slices/auth/layerZero/authSlice"
//import { fromLayerZeroGetAuthCurrentUser } from "../../../redux/slices/auth/layerZero/authSlice"
//import LTSurveys from '../../(layerTwo)/surveys/LTSurveys'
import { setQueryStep } from "../../../redux/slices/orchestation/layerZero/orchestationSlice"
import SurveyPageUI from "../../../components/(completePages)/surveys/SurveyPageUI"


export default function SurveysPage() {
    const dispatch = useDispatch()
    //const currentUser = useSelector(state => state.gAuth.currentUser)
    const orchestationState = useSelector(state => state.orchestation)

    /*useEffect(() => {
        dispatch(fromLayerZeroGetAuthCurrentUser())
    }, [dispatch])

    useEffect(() => {
        if (currentUser === null) return
        if (typeofHandler(currentUser?.uid, 'string')) {
            dispatch(
                setUserUID(currentUser.uid)
            )
        }
    }, [dispatch, currentUser])*/
	const [co, setCo] = useState(0)


    return (
		<>
			<button
				type='button'
				className='button'
				onClick={() => {
					setCo(co+1)
					console.log('counter', co)
					dispatch(setQueryStep(co))
				}}
			>
				click me!
			</button>
			<SurveyPageUI utilState={orchestationState} />
		</>
    )
}
