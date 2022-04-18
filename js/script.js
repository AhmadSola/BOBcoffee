/* بسم الله الرحمن الرحيم */
/* BY AHMAD ESMAIL */
btn.onclick = function(){
    sider.classList.toggle('active');
}
document.onclick = function(e){
    if(e.target.id != 'btn')
    {
        sider.classList.remove('active');
    }
}

// -------------------------------------------------
window.addEventListener('scroll', function() {
    var scrollbtn = document.getElementById('scrollbtn');
    scrollbtn.classList.toggle('nohiden', window.scrollY >100);
});
