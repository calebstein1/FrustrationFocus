const now = new Date();
let frustration_focus_settings = {
	enabled: true,
	schedule: false,
	start: {
		h: now.getHours(),
		m: now.getMinutes()
	},
	end: {
		h: now.getHours(),
		m: now.getMinutes()
	}
}

function FLog(msg) {
	console.log(`FrustrationFocus: ${msg}`);
}

async function get_status() {
	return browser.storage.local.get("enabled");
}

function toggle_enabled() {
	get_status();
	frustration_focus_settings.enabled = !frustration_focus_settings.enabled;
	browser.storage.local.set({frustration_focus_settings}).then(set_item, do_error);
	update_state();
}

function set_start(start_hour, start_minute) {

}

function set_end(end_hour, end_minute) {

}

function set_schedule_enabled(status) {
}

function set_item() {
	FLog("OK");
}

function do_error(error) {
	FLog(error);
}

function init_state() {
	browser.storage.local.get(null).then(() => {
		FLog("Initializing state...");
		frustration_focus_settings.enabled = browser.storage.local.get("enabled");
		frustration_focus_settings.schedule = browser.storage.local.get("schedule");
		frustration_focus_settings.start = browser.storage.local.get("start");
		frustration_focus_settings.end = browser.storage.local.get("end");
	})
}

function update_state() {
	const status = document.getElementById("frustration-focus-status");
	const button = document.getElementById("frustration-focus-toggle");

	if (frustration_focus_settings.enabled) {
		status.classList.remove("disabled");
		status.classList.add("enabled");
		status.textContent = "Enabled"
		button.textContent = "Disable";
	} else {
		status.classList.remove("enabled");
		status.classList.add("disabled");
		status.textContent = "Disabled";
		button.textContent = "Enable";
	}
}

document.getElementById("frustration-focus-toggle").addEventListener("click", toggle_enabled);

update_state();