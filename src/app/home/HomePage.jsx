import HomePageUI from "../../components/(completePages)/home/HomePageUI"

export default function HomePage({ gUser }) {
    return (
        <>
            <h3>
                {
                    JSON.stringify({user: gUser})
                }
            </h3>
            <HomePageUI />
        </>
    )
}