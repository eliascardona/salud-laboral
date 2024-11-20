import { useEffect, useState } from 'react'
// import { useUpdateURLSearchParams } from '../../../lib/hooks/navigation'
import { useFetch } from '../../../lib/hooks/customFetch'
// import CustomSelect from '../../(commonLogicComponents)/CustomSelect'
// import ColumnComponent from '../../retrieving/surverys/columns/ui/ColumnComponent'
// import DataDeatilsComponent from '../../retrieving/surverys/ui/DataDeatilsComponent'
// import BizForm from './BizForm'
// import EmployeeForm from './EmployeeForm'
// import StudForm from './StudForm'
// import SvForm from './SvForm'
import './styles/SurveyPageUI.css'
import { useStore } from './(zustand)/surveyStore'


export default function SurveyPageUI({ dispatchAction, admitedInfoLoad, utilState, setStateTool }) {
    // const updateURLSearchParams = useUpdateURLSearchParams()
    // const handleClick = (qsKey, value) => {
    //     updateURLSearchParams(qsKey, value)
    // }
	const [localLoading, setLocalLoading] = useState(true)
	const [localPayload, setLocalPayload] = useState(null)
	const [localError, setLocalError] = useState(null)
	/*	useFetch function's needed parameters:
	*	1. the options for HTTP,
	*	2. the dependencies array,
	*	3. hook for loading,
	*	4. hook for payload,
	*	5. hook for error
	*/
	const inputValue = useStore(state => state.inputValue)

	// useEffect(() => {
	// 	if(inputValue === undefined) return

	// 	const httpOptionsForGETSurvey = {
	// 		url: 'https://us-central1-elias-servicios-rest.cloudfunctions.net/retrieve-courses',
	// 		httpOptions: {
	// 			method: 'GET',
	// 			headers: {
	// 				'Content-Type': 'application/json'
	// 			}
	// 		}
	// 	}
	// 	useFetch(
	// 		httpOptionsForGETSurvey,
	// 		[utilState.queryStep],
	// 		setLocalLoading,
	// 		setLocalPayload,
	// 		setLocalError,
	// 	)
	// 	console.log('Efecto --  [INITIAL IN SURVEY] --  sucedio')
	// }, [inputValue])
	const httpOptionsForGETSurvey = {
		url: 'https://us-central1-elias-servicios-rest.cloudfunctions.net/retrieve-courses',
		httpOptions: {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		}
	}
	useFetch(
		httpOptionsForGETSurvey,
		[utilState.queryStep],
		setLocalLoading,
		setLocalPayload,
		setLocalError,
	)


    return (
        <>
			<div>
            {localLoading &&
				<h3>loading...</h3>
			}
            {localError != null &&
				<h3>{localError}</h3>
			}
			</div>
            {localPayload != null &&
            <div className="Survey__grid">
                <div className="Survey__col">
					{
						Array.isArray(localPayload.responsePayload) ? (
							<>
							{
								localPayload.responsePayload.length > 0 ? 
								localPayload.responsePayload.map(
									(el, i) => {
										let ran = Math.random()
										let rann = ran.toString
										return (
											<span key={`el-${rann}${i}`}>{el.nombreDelCurso}</span>
										)
									}
								) : (
									<span>arreglo vacio</span>
								)
							}
							</>
						) : (
							<span>arreglo no valido</span>
						)
					}
                </div>
                <div className="Survey__col">
                </div>
                <div className="Survey__col">
                </div>
            </div>
            }
        </>
    )
}
