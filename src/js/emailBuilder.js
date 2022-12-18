const email = document.querySelector('#emailText');
const topic = document.querySelector('#topicText');

export const mailContentGrabber = () => {
	const userInputMailContent = document.querySelectorAll('.chosen');
	let output = '';
	userInputMailContent.forEach((element, index) => {
		if (element.innerText) {
			output += element.innerText;
			if (index < userInputMailContent.length) {
				output += '\n';
			}
		} else if (element.value > '') {
			output += element.value;
			if (index < userInputMailContent.length) {
				output += '\n';
			}
		}
	});
	return output;
};

export const copyToClibpoard = (source) => {
	navigator.clipboard.writeText(source).then(
		function () {
			//Here will be custom notification
		},
		function (err) {
			alert('Nie można było skopiować');
		}
	);
};

const getSendContent = () => {
	const outputMailto = {
		email: email.value,
		topic: topic.value,
		body: mailContentGrabber(),
	};
	if (email.value > '' || topic.value > '' || mailContentGrabber() > '') {
		return outputMailto;
	} else {
		return ;
	}
};

export const mailtoAction = () => {
	const mailOutput = getSendContent();
	if (!mailOutput) {
		alert( `Nie można wysłać pustej wiadomości`);
		return;
	}
	try {
		window.location.href = `mailto:${mailOutput.email}?subject=${
			mailOutput.topic
		}&body=${encodeURIComponent(mailOutput.body)}`;
	} catch (error) {
		alert('Nie było możliwe wysyłanie poczty przez wbudowaną aplikację');
	}
};
