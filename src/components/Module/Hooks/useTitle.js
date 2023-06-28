import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} || Hotel Five`
    }, [title])
}

export default useTitle;