import Head from "next/head"
import { useState, useCallback } from "react"
import Child from "@/components/Child"

export default function Callback() {
	const [toogle, setToogle] = useState(false)
	const [data, setData] = useState("Hello World")

	// const returnDataPlusWord = (word: string) => data + word

	const returnDataPlusWord = useCallback(
		(word: string) => {
			return data + word
		},
		[data]
	)

	return (
		<>
			<Head>
				<title>Callback page</title>
			</Head>
			<Child returnDataPlusWord={returnDataPlusWord} />
			<button onClick={() => setToogle(!toogle)}>Toogle</button>
			{toogle && "toogle"}
		</>
	)
}
