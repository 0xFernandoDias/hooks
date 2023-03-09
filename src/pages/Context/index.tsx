import User from "@/components/User"
import Head from "next/head"
import { useState, createContext } from "react"

export const AppContext = createContext({
	name: "",
	setName: (name: string) => {},
})

export default function Context() {
	const [name, setName] = useState("")

	return (
		<>
			<Head>
				<title>Context page</title>
			</Head>
			<AppContext.Provider value={{ name, setName }}>
				<User />
			</AppContext.Provider>
		</>
	)
}
