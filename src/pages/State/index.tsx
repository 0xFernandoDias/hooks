import Head from "next/head"
import { useState } from "react"

export default function State() {
	const [input, setInput] = useState("")

	let onChange = (e: any) => {
		setInput(e.target.value)
	}

	return (
		<>
			<Head>
				<title>State page</title>
			</Head>
			<input placeholder="Enter a text" onChange={onChange} />
			{input}
		</>
	)
}
