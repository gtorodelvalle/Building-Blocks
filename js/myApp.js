var legends = document.querySelectorAll('legend');
for (var i = 0; i < legends.length; i++) {
  legends[i].addEventListener('click', function (ev) {
    ev.target.parentNode.classList.toggle('removed');
  });
}
