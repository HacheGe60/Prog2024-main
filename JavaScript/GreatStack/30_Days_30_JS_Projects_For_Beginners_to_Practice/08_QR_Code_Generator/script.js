const api_URL =
	'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';

const imgBox = document.getElementById('imgBox');
const qrImage = document.getElementById('qrImage');
const qrText = document.getElementById('qrText');

function generateQRCode() {
	if (!qrText.value) {
		qrText.classList.add('error');
		setTimeout(() => {
			qrText.classList.remove('error');
		}, 1000);
		return;
	}
	qrImage.src = api_URL + qrText.value;
	imgBox.classList.add('show-img');
}
