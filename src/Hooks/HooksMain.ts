import {useState, useEffect, useDebugValue} from "react";


export function useDisplayName(V : string)
{
    const [displayName, setDisplayName] = useState("")

    useEffect(() => {
        const data = V
        setDisplayName(data);
    }, [V])

    useDebugValue(displayName ?? "loading")

    return displayName;
}

