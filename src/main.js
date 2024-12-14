document.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById("generate-code-form");
	const modalTriggerBtn = document.getElementById("trigger-modal-btn");
	const qrContainer = document.getElementById("qr-container");
	const downloadBtn = document.getElementById("download-qr");

	let qrCode;

	form.addEventListener("submit", function (e) {
		e.preventDefault();
		const userInput = document.getElementById("gcf-input").value;

		if (!userInput.trim()) {
			alert("Please enter some text.");
			return;
		}

		// Clear previous QR Code
		qrContainer.innerHTML = "";

		// Generate QR Code
		qrCode = new QRCode(qrContainer, {
			text: userInput,
			width: 200,
			height: 200,
			colorDark: "#ffffff", // White QR on dark background
			colorLight: "#000000",
			correctLevel: QRCode.CorrectLevel.H,
		});

		// Trigger Modal
		modalTriggerBtn.click();

		// Wait for the QR code to render, then allow download
		setTimeout(() => {
			const qrImage = qrContainer.querySelector("img");
			if (qrImage) {
				downloadBtn.href = qrImage.src;
				downloadBtn.setAttribute("download", "qrcode.png");
			}
		}, 300);
	});
});
