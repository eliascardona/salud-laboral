export default function LTSurveys({ trustedData }) {

    trustedData === null && <p>no logramos heredar los datos del componente padre 🤨</p>

    return (
        <div style={{margin:'2rem 0 0 4rem'}}>
            <h3>Estado heredado del componente</h3>
            {
                typeof trustedData === 'object' && 
                <pre>
                    {JSON.stringify({vv:trustedData})}
                </pre>
            }
        </div>
    )
}