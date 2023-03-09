import { useEffect } from "react"

export default function Child({ returnDataPlusWord }: any) {
	useEffect(() => {
		console.log("Function was called")
	}, [returnDataPlusWord])

	return <>{returnDataPlusWord("!")}</>
}
