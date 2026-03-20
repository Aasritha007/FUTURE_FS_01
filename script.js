function openTab(tabName) {
    let tabs = document.getElementsByClassName("tab-content");

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }

    document.getElementById(tabName).style.display = "block";
}

// Default open
document.getElementById("about").style.display = "block";
