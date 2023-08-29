import React from "react";
import Card from "./Card";

const Cards = (props) => {

	
	let courses=props.courses;

	function getCourses() {
		let allCourses=[];
		Object.values(courses).forEach((coursesArr) => {
			coursesArr.forEach( (course) => {
				allCourses.push(course);
			})
		})
		return allCourses;
	}

	return (
		<div>
			{getCourses().map((course) => {
				return(<Card key={course.id} course={course} />)
			})}
		</div>
	);
};

export default Cards;
