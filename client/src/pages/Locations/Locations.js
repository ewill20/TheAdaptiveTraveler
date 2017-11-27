import React, { Component } from "react";
import Photos from "../Photos";
import API from "../../components/API";
import { Link } from "react-router-dom";


export default class Locations extends Component {
	constructor () {
		super() 
		this.state = {
		locations: [],
		city: "",
		state: "",
		country: "",
	}}

	componentDidMount() {
		this.loadLocations();
	}

	loadLocations = () => {
		API.getLocations()
		.then(res =>
			this.setState({ locations: res.data, city: "", state: "", country: "" })
			)
		.catch(err => console.log(err));
	};

	handleInputChange = event => {
		const {name, value } = event.target;
		this.setState({
			[name: value]
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();
		if (this.state.city && this.state.country) {
			API.saveLocation({
				city: this.state.city,
				state: this.state.state,
				country: this.state.country,
			})
			.then(res => this.loadLocations())
			.catch(err => console.log(err));
		}
	};

	render() {
		return (
			<div/>
			)
	}
}