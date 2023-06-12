const button = document.querySelector("#button-x");
const nav=document.getElementsByTagName('nav')[0];
const darker=document.querySelector(".select");
const contentDiv = document.querySelector("#content");
const pages = document.querySelectorAll("#place, .link")
const header=document.querySelector("span[looseheader]");
button.addEventListener("click", function(){
	nav.className="bye"
	darker.setAttribute("id", "open")
})

document.querySelector("#menu").addEventListener("click", function(){
	nav.style.display = "inline-block"
	nav.className="hello"
	darker.setAttribute("id", "dark")
})

window.addEventListener("resize", ()=>{
	if (window.innerWidth > 600) {
		nav.style.display = "block"
		darker.setAttribute("id", "open")
	}else{
		nav.style.display = "inline-block"
		if (nav.className==="hello") {
			darker.setAttribute("id", "dark")
		}
	}
})
const updateNavOnSelect = (i) => {
	document.querySelector("#place").setAttribute("class", "link")
	document.querySelector("#place").setAttribute("leavePage", "ja")
	document.querySelector("#place").setAttribute("id", "")
	pages[i].setAttribute("id", "place")
	pages[i].setAttribute("class", "")
	pages[i].setAttribute("leavePage", "")
}
pages[0].addEventListener("click",()=>{
	updateNavOnSelect(0)
	contentDiv.innerHTML = "<h2>Why I Createded This?</h2><p>I created this site to exercise HTML, CSS and DOM (Document Object Model -a javascript object-); and when I was thinking about what the content should be, I decided it could be ants because I know a lot about them (At least compared to most people) and it is an easier topic than most other ones. For example climate change would be a huge pain to make a site about,  because it is a big issue with alot of environmental damage and there are so many solutions that comes up with their own problems.</p><h2>What Is This Site For?</h2><p>Altougth there are some videos but there aren't enough fun and yet scientific sites about ants.Leaving an entire world unknown.So we wanted to solve this problem by creating one.You can even dive deeper by looking at our scources.</p>"
})
pages[1].addEventListener("click",()=>{
	updateNavOnSelect(1)
	contentDiv.innerHTML = "<h2>Ant Worker Classes</h2><h3>Minors</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><h3>Majors</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><h3>Queens</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><h3>Male Elites</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"
})
pages[2].addEventListener("click",()=>{
	updateNavOnSelect(2)
	contentDiv.innerHTML = "<h2>Wars Page In Progress :)</h2>";
})
pages[3].addEventListener("click",()=>{
	updateNavOnSelect(3)
	contentDiv.innerHTML = "<h2>Invasives Page In Progress ;)</h2>";
})
