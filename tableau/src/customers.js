var Utils = require('./utils');
var utils = new Utils();
var customers = [];

var boys = ["Aabheer", "Aadarshr", "Aachmanr", "Aadeshr", "Aadir", "Aadidevr", "Aafreenr", "Aakarr", "Aakash", "Aalap", "Aandaleeb", "Baahir", "Baalaark", "Baanbhatt", "Baanke", "Baasim", "Babala", "Badal", "Badri", "Badrinath", "Baha", "Baha", "Chaanakya", "Chaaruchandra", "Chaarudatt", "Chaaruhaas", "Chahel", "Chaitan", "Chaitanya", "Chakor", "Chakradev", "Chakradhar", "Chakrapani", "Daamodar", "Daaruk", "Daarun", "Dahana", "Daha", "Daitya", "Daivya", "Daiwik", "Daksha", "Dakshesh", "Dakshi", "Gadhadhar", "Gadin", "Gafur", "Gagan", "Gagandeep", "Gaganjyot", "Gajananvihari", "Gajanan", "Gajanand", "Gajendra", "Gajrup"];

var girls = ["Gagana", "Gaganadipika", "Gaganasindhu", "Gajagamini", "Gajalakshmi", "Gajra", "Ganda", "Gandha", "Gandhali", "Gandhara", "Gandhini", "Haadiyaa", "Hafiza", "Haima", "Haimi", "Haleema", "Hamsa", "Hamsini", "Haimavat", "Hanima", "Haniya", "Hansa", "Ibha", "Idha", "Idhaya", "Idhika", "Idhitri", "Ihina", "Ihitha", "Ijaya", "Iksha", "Ikshana", "Kaandhal", "Kaberi", "Kadambari", "Kadambini", "Kadhiroli", "Kahini", "Kairavi", "Kaishori", "Kajal", "Kajjali", "Kajri", "Maalai", "Maanika", "Madhavi", "Madhavil", "Madhu", "Mahubala", "Madhuchh", "Madhuja", "Madhuksa", "Madhula", "Madhulat"];

var domains = ["@gmail.com", "@yahoo.com", "@hotmail.com", "@apple.com", "@samsung.com", "@lg.com", "@vnera.com", "@flipkart.com"];

var days = utils.getDays();

var months = utils.getMonths();

var years = utils.getDOBYears();	

boys.forEach(function(b){
	var boy = {
		name : b, 
		sex : "M", 
		contactNumber: Date.now(), 
		email : b + utils.getRandomItemFromArray(domains),
		dob : utils.getRandomItemFromArray(years) + '/' + utils.getRandomItemFromArray(months) + '/' + utils.getRandomItemFromArray(days)
	}
	customers.push(boy);
});

girls.forEach(function(b){
	var girl = {
		name : b, 
		sex : "F", 
		contactNumber: Date.now(), 
		email : b + utils.getRandomItemFromArray(domains),
		dob : utils.getRandomItemFromArray(years) + '/' + utils.getRandomItemFromArray(months) + '/' + utils.getRandomItemFromArray(days)
	}
	customers.push(girl);
});

customers = utils.shuffleArray(customers);

module.exports = customers;