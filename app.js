let con = document.querySelector(".btn-con");
let btn = document.querySelector(".nav-btn");
const nav = document.querySelector(".navigations");

const navItem = document.querySelectorAll(".nav-list-item");

con.addEventListener("click", click);

// SHOW NAVBAR FOR MOBILE

function click() {
	let clicked = btn.classList.contains("nav-btn-clicked");
	let navActive = nav.classList.contains("nav-active");

	if (clicked) {
		btn.classList.remove("nav-btn-clicked");
		nav.classList.remove("nav-active");
	} else {
		btn.classList.add("nav-btn-clicked");
		nav.classList.add("nav-active");
	}
}

// CLOSE NAVBAR ON CLICK ON ANY NAV ITEM

navItem.forEach((i) => {
	i.addEventListener("click", () => {
		let navActive = nav.classList.contains("nav-active");
		let activeNav = btn.classList.contains("nav-btn-clicked");

		if (activeNav && navActive) {
			btn.classList.remove("nav-btn-clicked");
			nav.classList.remove("nav-active");
		} else {
			btn.classList.add("nav-btn-clicked");
			nav.classList.add("nav-active");
		}
	});
});
