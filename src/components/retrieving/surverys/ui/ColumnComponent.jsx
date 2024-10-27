import CommonCard from '../../../ui/commonUI/eliasCard/CommonCard'

export default function ColumnComponent({ item, attr, keyv, querystringModifier }) {
    return (
        <div 
            id={`grid-column-${keyv}`}
            onClick={querystringModifier}
            key={keyv}
        >
            <CommonCard>
                <>
                    {
                        item && (
                            <span>
                                {
                                    typeof attr === 'string' && item[attr]
                                }
                            </span>
                        )
                    }
                </>
            </CommonCard>
        </div>
    )
}