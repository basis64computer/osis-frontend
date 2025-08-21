
function initializeTab(state) {
	const hash = window.location.hash;
	const tabName = hash.substring(1);
	if (tabName) {
		showTab(tabName, null, state);
	} else {
		showTab('berita', null, false);
	}
}

initializeTab(true);

let historyCount = 0;
// Tambahkan listener popstate
window.addEventListener('popstate', function(event) {
	initializeTab(false);
});

function showTab(tabName, event, state = true) {
	// Prevent default behavior supaya browser ga scroll ke anchor
	if (event) event.preventDefault();
	const tabs = {
		berita: document.getElementById('berita'),
		galeri: document.getElementById('galeri'),
		keuangan: document.getElementById('keuangan'),
		saran: document.getElementById('saran'),
		contributors: document.getElementById('contributors')
	};
	// Hide all tab sections and remove active class from all tab links
	for (const key in tabs) {
		if (tabs.hasOwnProperty(key)) {
			tabs[key].classList.add('hidden', 'opacity-0', 'translate-y-4');
			try {
				document.getElementById(key + 'Tab').classList.remove('bg-blue-900', 'text-white', 'ms-2', 'md:ms-0');
				document.getElementById(key + 'Tab').classList.add('text-gray-900', 'hover:bg-gray-100', 'cursor-pointer');
			} catch (error) {
				
			}
		}
	}
	// Show the selected tab section and add active class to its link
	const selectedTab = tabs[tabName];
	const selectedLink = document.getElementById(tabName + 'Tab');
	if (selectedTab) {
		selectedTab.classList.remove('hidden', 'opacity-0', 'translate-y-4');
		selectedTab.classList.add('fade-in'); // Add fade-in animation
		console.log(selectedTab);
		if (selectedLink) {
			selectedLink.classList.add('bg-blue-900', 'text-white', 'ms-2', 'md:ms-0');
			selectedLink.classList.remove('text-gray-900', 'hover:bg-gray-100', 'cursor-pointer');
		}
	}
	if (state) {
		history.pushState(null, '', '#' + tabName);
	}
}
