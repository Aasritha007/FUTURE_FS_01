window.onload = function () {
    openTab('about');
};

function openTab(tabName) {
    let tabs = document.getElementsByClassName("tab-content");

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }

    document.getElementById(tabName).style.display = "block";
}
