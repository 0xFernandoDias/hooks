import Head from "next/head"
import { useEffect, useState } from "react"
import axios from "axios"
import { useReducer } from "react"

const reducer = (state: any, action: any) => {
	switch (action.type) {
		case "Increment":
			return { count: state.count + 1 }
		default:
			return state
	}
}

export default function Effect() {
	const [data, setData] = useState("")
	const [state, dispatch] = useReducer(reducer, { count: 0 })

	const { count } = state

	useEffect(() => {
		axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
			setData(res.data[0].name)
			console.log("API called")
		})
	}, [count])

	return (
		<>
			<Head>
				<title>Effect page</title>
			</Head>
			{count}
			<button
				onClick={() => {
					dispatch({ type: "Increment" })
				}}
			>
				Click here
			</button>
			{data}
		</>
	)
}
