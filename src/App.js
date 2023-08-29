import "./App.css";
import { useState, useEffect } from "react";
import Cards from "./component/Cards";
import Spinner from "./component/Spinner";
import Filter from "./component/Filter";
import Nav from "./component/Nb";
import { filterData, apiUrl } from "./data";
import { toast } from "react-toastify";

function App() {
	const [courses, setCourses] = useState(null);

	const [loading, setLoading] = useState(true);

	async function fetchData() {
		setLoading(true);
		try {
			let res = await fetch(apiUrl);
			let data = await res.json();
			setCourses(data.data);
		} catch (error) {
			toast.error("Dikkat Dikkat");
		}
		setLoading(false);
	}

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="container">
			<div>
				<Nav />
			</div>

			<div>
				<Filter filterData={filterData} />
			</div>

			<div>{loading ? <Spinner /> : <Cards courses={courses} />}</div>
		</div>
	);
}

export default App;
