function FLog(msg) {
	console.log(`FrustrationFocus: ${msg}`);
}

function DelayLoad(seconds) {
	const body = document.body;
	const blocker = document.createElement("div");

	blocker.textContent = `Loading ${window.location.href}...`
	blocker.id = "frustration_blocker";
	FLog("Pausing page...");
	body.insertBefore(blocker, body.childNodes[0]);
	setTimeout(() => {
		FLog("Unpausing page");
		body.removeChild(blocker);
	}, seconds * 1000);
}

const delay = 5;
let loc = window.location.href;

setInterval(() => {
	if (loc !== window.location.href) {
		loc = window.location.href;
		DelayLoad(delay);
	}
}, 500);
DelayLoad(delay);
