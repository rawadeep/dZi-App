//header dropdown
const headerDropdownBtn = document.getElementById('header-dropdown-btn');
const headerDropdown = document.getElementById('header-dropdown');
headerDropdownBtn.addEventListener('click', () => {
  headerDropdown.classList.toggle('hidden');
});

//sidebar logic
const toggleBtn = document.getElementById('toggleBtn');
const sidebar = document.getElementById('sidebar');
const navItems= document.querySelectorAll('.nav-item');
const navItemsMain= document.querySelectorAll('.nav-item-main');


//sidebar mobile logic
//get screen size and set sidebar accordingly
if(window.innerWidth < 768) {
    sidebar.classList.add('w-0');
    navItemsMain.forEach(item => {
            item.classList.toggle('opacity-0');
        });
    
    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('sidebar-is-mobile');
        sidebar.classList.remove('w-0');
        sidebar.classList.add('w-64'); 
        toggleBtn.classList.toggle('rotate-180');
        toggleBtn.classList.toggle('rotate-0');
        console.log(navItemsMain);
        navItemsMain.forEach(item => {
            item.classList.toggle('opacity-0');
        });
    });
    
} else {
  toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('w-20');
  sidebar.classList.toggle('w-64');
  toggleBtn.classList.toggle('rotate-180');
  toggleBtn.classList.toggle('rotate-0');
  navItems.forEach(item => {
    item.classList.toggle('opacity-0');
  });
});
};
//toggle sidebar on click outside the sidebar
if(window.innerWidth<768){
document.addEventListener('click', (e) => {
    if(e.target.closest('#sidebar') == null && e.target.closest('#toggleBtn') == null) {
        sidebar.classList.remove('sidebar-is-mobile');
        sidebar.classList.remove('w-64');
        sidebar.classList.add('w-0');
        navItemsMain.forEach(item => {
            item.classList.add('opacity-0');
        });
    }
});
};

