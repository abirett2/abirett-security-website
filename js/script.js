const mobileBtn = document.getElementById('mobile-cta')
              nav = document.querySelector('nav')
              mobileBtnExit = document.getElementById('mobile-exit');

        mobileBtn.addEventListener('click', () => {
            nav.classList.add('menu-btn');
        })

        mobileBtnExit.addEventListener('click', () => {
            nav.classList.remove('menu-btn');
        })




function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick=function(event) {
    if(!event.target.matches('.dropbtn')) {
        var dropdowns=document.getElementsByClassName("dropdown-content");
        var i;
        for (i=0; i<dropdowns.length;i++) {
            var openDropdown=dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


// Modal
var modal=document.getElementById("myModal");
var btn=document.getElementById("myBtn");
var span=document.getElementsByClassName("close")[0];
btn.onclick= function() {
    modal.style.display="block";
}
span.onclick= function() {
    modal.style.display="none";
}
window.onclick= function(event) {
if (event.target==modal) {
    modal.style.display="none";
}
}