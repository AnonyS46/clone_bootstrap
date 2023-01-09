function changeIndex() {
    document.getElementById('current').innerHTML = '0' + document.querySelector('.carousel-item.active').dataset.index;
}
setInterval(changeIndex,1)