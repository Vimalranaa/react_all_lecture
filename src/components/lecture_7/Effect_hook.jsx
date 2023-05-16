import { useEffect } from "react"


function Effect_hook() {
    return <User name="saket" />
}

function User({ name }) {
    useEffect(() => {
        document.title = name

    },[name])
    return <h2>{name}</h2>
}

export default Effect_hook