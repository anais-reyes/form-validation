const input = document.querySelectorAll('.input');

const patterns = {
	name: /^[a-zA-Z\s]+$/,
	age: /^\d{1,2}$/,
	phone: /^\d{10}$/,
	email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z{2,8}])?$/,
	about: /^.{10,20}$/,
};

const cleanStorage = () => {
	localStorage.clear();
};

const activateButton = () => {
	if (
		document.getElementById('name').value.trim().length > 0 &&
		document.getElementById('age').value.trim().length > 0 &&
		document.getElementById('phone').value.trim().length > 0 &&
		document.getElementById('email').value.trim().length > 0 &&
		document.getElementById('about').value.trim().length > 0
	) {
		document.getElementById('button').removeAttribute('disabled');
		document.getElementById('button').className = 'active';
	} else {
		document.getElementById('button').setAttribute('disabled', true);
		document.getElementById('button').className = 'inactive';
	}
};

const validInput = event => {
	if (patterns[event.target.id].test(event.target.value)) {
		localStorage.setItem(event.target.id, 'true');
	} else {
		localStorage.setItem(event.target.id, 'false');
	}
};

const validateSingleField = element => {
	let item = element.id;
	if (JSON.parse(localStorage[item]) === false) {
		document.getElementById(element.id).nextSibling.nextSibling.style.display = 'block';
	} else {
		document.getElementById(element.id).nextSibling.nextSibling.style.display = 'none';
	}
};

const validateFields = event => {
	event.preventDefault();
	input.forEach(element => {
		validateSingleField(element);
	});
};

input.forEach(element => {
	element.addEventListener('keyup', activateButton);
});

input.forEach(element => {
	element.addEventListener('keyup', validInput);
});

document.getElementById('button').addEventListener('click', validateFields);

cleanStorage();
