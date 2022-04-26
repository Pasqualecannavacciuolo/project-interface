window.addEventListener("load", function () {
    // do things after the DOM loads fully
    let sidebarCollapse = document.getElementById('sidebarCollapse');
    sidebarCollapse.addEventListener('click', () => {
        let sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('active');
        console.log("Desktop menu clicked");
    })
    //
    let sidebarCollapseMobile = document.getElementById('sidebarCollapseMobile');
    sidebarCollapseMobile.addEventListener('click', () => {
        let sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('active');
        console.log("Mobile menu clicked");
    })
});