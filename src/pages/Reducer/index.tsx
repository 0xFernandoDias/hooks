import Head from "next/head"
import { useReducer } from "react"

const reducer = (state: any, action: any) => {
	switch (action.type) {
		case "Increment":
			return { count: state.count + 1, showText: state.showText }
		case "toggleShowText":
			return { count: state.count, showText: !state.showText }
		default:
			return state
	}
}

export default function Reducer() {
	const [state, dispatch] = useReducer(reducer, { count: 0, showText: true })

	return (
		<>
			<Head>
				<title>Reducer page</title>
			</Head>
			{state.count}
			<button
				onClick={() => {
					dispatch({ type: "Increment" })
					dispatch({ type: "toggleShowText" })
				}}
			>
				Increment and toggle show text
			</button>
			{state.showText && <p>Some text</p>}
		</>
	)
}
