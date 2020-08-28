let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
	useNewUrlParser: true,
	useFindAndModify: false,
});

let budgetSeed = [
	{
		name: "Disney Plus Subscription",
		value: 30,
		date: new Date().setDate(new Date().getDate() - 5),
	},
	{
		name: "Pet Grooming",
		value: 75,
		date: new Date().setDate(new Date().getDate() - 4),
	},
	{
		name: "Hotel Reservation",
		value: 700,
		date: new Date().setDate(new Date().getDate() - 3),
	},
	{
		name: "Disney Park Tickets",
		value: 400,
		date: new Date().setDate(new Date().getDate() - 2),
	},
	{
		name: "Southwest Tickets",
		value: 900,
		date: new Date().setDate(new Date().getDate() - 1),
	},
];
