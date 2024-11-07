import { useUpdateURLSearchParams } from '../../../lib/utils/hooks/navigation';
// import CustomSelect from '../../(commonLogicComponents)/CustomSelect';
// import ColumnComponent from '../../retrieving/surverys/columns/ui/ColumnComponent';
//import DataDeatilsComponent from '../../retrieving/surverys/ui/DataDeatilsComponent';
import './styles/SurveyPageUI.css'
import BizForm from './BizForm'
import EmployeeForm from './EmployeeForm'
import StudForm from './StudForm'
import SvForm from './SvForm'


export default function SurveyPageUI({ trustedData }) {
    const data1 = { id: 1, info: 'Info 1' }
    const data2 = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }]
    // const updateURLSearchParams = useUpdateURLSearchParams()
    // const handleClick = (qsKey, value) => {
    //     updateURLSearchParams(qsKey, value)
    // }
    // const r = Math.random()
    // const rand = r.toString()

    return (
        <div className="Survey__grid">
            <div className="Survey__col Survey__columnOne">
                <BizForm />
                <EmployeeForm />
            </div>
            <div className="Survey__col Survey__columnN">
                <div>
                    <h3>Formulario para estudiante</h3>
                </div>
                <StudForm />
            </div>
            <div className="Survey__col Survey__columnN">
                <SvForm />
            </div>
        </div>
    )
}
