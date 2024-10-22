import ColumnComponent from '../../retrieving/surverys/ui/ColumnComponent';
import { useUpdateURLSearchParams } from '../../../lib/utils/navigation';

import '../../../assets/css/home.css'


export default function HomePageUI() {
    const data1 = { id: 1, info: 'Info 1' }
    const data2 = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
    const data3 = [{ id: 1, details: 'Detail 1' }, { id: 2, details: 'Detail 2' }];

    const updateURLSearchParams = useUpdateURLSearchParams()
    const handleClick = (qsKey, value) => {
        updateURLSearchParams(qsKey, value)
    }

    const r = Math.random()
    const rand = r.toString()

    return (
        <div className="grid">
            <div className="col">
                <ColumnComponent 
                    item={data1}
                    URLDispatcher={() => handleClick('rondin', data1.id)}
                    attr='info'
                    keyv={`${data1['info']}_${rand}`}
                ></ColumnComponent>
            </div>
            <div className="col">
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
            <div className="col">
                {
                    data3.map((elm, j) => (
                        <ColumnComponent 
                            item={elm}
                            URLDispatcher={() => handleClick('atributoDeEncuesta', elm.id)}
                            attr='details'
                            keyv={`${data3['details']}_${j}`}
                        ></ColumnComponent>
                    ))
                }
            </div>
        </div>
    )
}