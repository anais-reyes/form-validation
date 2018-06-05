const activateButton = () => {
	if (localStorage.name && localStorage.age && localStorage.phone && localStorage.email && localStorage.about) {
		document.getElementById('button').removeAttribute('disabled');
		document.getElementById('button').className = 'active';
	} else {
		document.getElementById('button').setAttribute('disabled', true);
		document.getElementById('button').className = 'inactive';
	}
};

const cleanStorage = () => {
	localStorage.clear();
};

const validateNameInput = () => {
	let status = /^[a-zA-Z]+$/.test(document.getElementById('name').value);
	if (status === false) {
		document.getElementById('name-error').style.display = 'block';
	} else {
		document.getElementById('name-error').style.display = 'none';
	}
};

const validateAgeInput = () => {
	let status = /\d{1,2}/.test(document.getElementById('age').value);
	if (status === false) {
		document.getElementById('age-error').style.display = 'block';
	} else {
		document.getElementById('age-error').style.display = 'none';
	}
};

const validatePhoneInput = () => {
	let status = /^\d{10}$/.test(document.getElementById('phone').value);
	if (status === false) {
		document.getElementById('phone-error').style.display = 'block';
	} else {
		document.getElementById('phone-error').style.display = 'none';
	}
};

validateEmailInput = () => {
	let status = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z{2,8}])?$/.test(
		document.getElementById('email').value
	);
	if (status === false) {
		document.getElementById('email-error').style.display = 'block';
	} else {
		document.getElementById('email-error').style.display = 'none';
	}
};

const validateAboutInput = () => {
	console.log();
	if (document.getElementById('about').value.length < 20 || document.getElementById('about').length > 100) {
		document.getElementById('about-error').style.display = 'block';
	} else {
		document.getElementById('about-error').style.display = 'none';
	}
};

const validateName = event => {
	localStorage.setItem('name', event.target.value.trim());
	activateButton();
};

const validateAge = event => {
	localStorage.setItem('age', event.target.value.trim());
	activateButton();
};

const validatePhone = event => {
	localStorage.setItem('phone', event.target.value.trim());
	activateButton();
};

const validateEmail = event => {
	localStorage.setItem('email', event.target.value.trim());
	activateButton();
};

const validateAbout = event => {
	localStorage.setItem('about', event.target.value.trim());
	activateButton();
};

const validateInputs = event => {
	event.preventDefault();
	validateNameInput();
	validateAgeInput();
	validatePhoneInput();
	validateEmailInput();
	validateAboutInput();
};

document.getElementById('name').addEventListener('keyup', validateName);
document.getElementById('age').addEventListener('keyup', validateAge);
document.getElementById('phone').addEventListener('keyup', validatePhone);
document.getElementById('email').addEventListener('keyup', validateEmail);
document.getElementById('about').addEventListener('keyup', validateAbout);
document.getElementById('button').addEventListener('click', validateInputs);

cleanStorage();
