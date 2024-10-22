import '../styles/survey.css'

export default function ColumnComponent({ item, URLDispatcher, attr, keyv }) {
    return (
        <div onClick={URLDispatcher} key={keyv}>
            <div className="Survey__card">
                {
                    item && (
                        <span>
                            {
                                typeof attr === 'string' && item[attr]
                            }
                        </span>
                    )
                }
            </div>
        </div>
    )
}