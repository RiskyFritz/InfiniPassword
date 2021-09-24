let darkModeGlobal;

document.addEventListener(
	"DOMContentLoaded",
	function () {
		const darkModeToggle = document.getElementById("darkModeToggle");
		const darkModeIcon = document.getElementById("darkModeIcon");

		darkModeGlobal = localStorage.getItem("darkModeStorage");
		document.body.classList.value = darkModeGlobal;

		// --- listen for dark mode toggle ---
		darkModeToggle.addEventListener("click", () => {
			document.body.classList.toggle("dark");

			if (document.body.classList.value === "dark") {
				darkModeGlobal = "dark";
				localStorage.setItem("darkModeStorage", darkModeGlobal);
			} else {
				darkModeGlobal = "";
				localStorage.setItem("darkModeStorage", darkModeGlobal);
			}

			darkModeIcon.style.animation = "rotate360 500ms linear";
			setTimeout(() => {
				darkModeIcon.style.animation = "";
			}, 500);
		});
	},
	false,
);
