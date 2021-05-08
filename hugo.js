const progress = document.getElementById("progress");
const numBooksRead = document.getElementsByClassName("already-read").length;
const totalBooks = document.getElementsByClassName("book").length;
progress.innerHTML = numBooksRead + " / " + totalBooks;

function showAll() {
	const allBooks = document.getElementsByClassName("book");
	const viewAll = document.getElementById("view-all");
	for (i = 0; i < allBooks.length; i++) {
		allBooks[i].classList.remove("hidden");
	}
	clearActive();
	viewAll.classList.add("active");
}

function filterRead() {
	const readBooks = document.getElementsByClassName("already-read");
	const viewRead = document.getElementById("view-read");
	hideAll();
	for (i = 0; i < readBooks.length; i++) {
		readBooks[i].classList.remove("hidden");
	}
	clearActive();
	viewRead.classList.add("active");
}

function filterUnread() {
	showAll();
	const readBooks = document.getElementsByClassName("already-read");
	const viewUnread = document.getElementById("view-unread");
	for (i = 0; i < readBooks.length; i++) {
		readBooks[i].classList.add("hidden");
	}
	clearActive();
	viewUnread.classList.add("active");
}

function hideAll() {
	const allBooks = document.getElementsByClassName("book");
	for (i = 0; i < allBooks.length; i++) {
		allBooks[i].classList.add("hidden");
	}
}

function clearActive() {
	const viewAll = document.getElementById("view-all");
	const viewRead = document.getElementById("view-read");
	const viewUnread = document.getElementById("view-unread");
	viewAll.classList.remove("active");
	viewRead.classList.remove("active");
	viewUnread.classList.remove("active");
}