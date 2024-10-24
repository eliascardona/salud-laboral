import { useUpdateURLSearchParams } from '../../../lib/utils/navigation';
import ColumnComponent from '../../retrieving/surverys/ui/ColumnComponent';
//import DataDeatilsComponent from '../../retrieving/surverys/ui/DataDeatilsComponent';
import './styles/HomePageUI.css'


export default function HomePageUI() {
    const data1 = { id: 1, info: 'Info 1' }
    const data2 = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];

    const updateURLSearchParams = useUpdateURLSearchParams()
    const handleClick = (qsKey, value) => {
        updateURLSearchParams(qsKey, value)
    }

    const r = Math.random()
    const rand = r.toString()

    /*
        lets imagine a `customFunc()` and the needed state variables here
    */

    return (
        <div className="Home__grid">
            <div className="Home__col">
                <ColumnComponent 
                    item={data1}
                    URLDispatcher={() => handleClick('rondin', data1.id)}
                    attr='info'
                    keyv={`${data1['info']}_${rand}`}
                ></ColumnComponent>
            </div>
            <div className="Home__col">
                {
                    data2.map((el, i) => (
                        <ColumnComponent 
                            item={el}
                            URLDispatcher={() => handleClick('encuesta', el.id)}
                            attr='name'
                            keyv={`${data2['name']}_${i}`}
                        ></ColumnComponent>
                    ))
                }
            </div>
            <div className="Home__col">
				{/*    {
                    stateVar && <>{
                        (async () => {
                            customFunc((dataFromCallback) => {
                                if (dataFromCallback != null){
                                    return <DataDeatilsComponent data={{...dataFromCallback}} />
                                }
                            })
                        })()
                        
                    }</>
                }		*/}
            </div>
        </div>
    )
}
