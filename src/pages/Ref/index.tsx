import Head from "next/head"
import { useRef } from "react"

export default function Ref() {
	const inputRef = useRef<HTMLInputElement>(null)

	const onClick = () => {
		console.log(inputRef?.current?.value)

		if (inputRef?.current?.value) {
			inputRef.current.value = ""
		}
	}

	return (
		<>
			<Head>
				<title>Ref page</title>
			</Head>
			<input type="text" placeholder="Enter your name" ref={inputRef} />
			<button onClick={onClick}>Clear and print the value on console</button>
		</>
	)
}
