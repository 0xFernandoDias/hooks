import Head from "next/head"
import { useLayoutEffect, useEffect, useRef } from "react"

export default function LayoutEffect() {
	const inputRef = useRef<HTMLInputElement>(null)

	useLayoutEffect(() => {
		console.log(inputRef?.current?.value)
	}, [])

	useEffect(() => {
		if (inputRef?.current?.value) {
			inputRef.current.value = "Hello"
		}
	}, [])

	return (
		<>
			<Head>
				<title>Layout Effect page</title>
			</Head>
			<input type="text" defaultValue="Fernando" ref={inputRef} />
		</>
	)
}
