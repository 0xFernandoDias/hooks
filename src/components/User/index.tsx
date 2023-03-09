import { useContext } from "react"
import { AppContext } from "@/pages/Context"

export default function User() {
	const { name, setName } = useContext(AppContext)

	return (
		<>
			User: {name}
			<input onChange={(e) => setName(e.target.value)} />
		</>
	)
}
