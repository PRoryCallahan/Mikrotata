var verses = document.querySelectorAll('ol.verse');

verses.forEach(function(fragment) {
  fragment.classList.add('js');

  if (fragment.hasAttribute('start')) {
    var start = fragment.getAttribute('start');
  } else {
    fragment.setAttribute('start', '1');
  }

  fragment.style.counterReset = 'poem ' + (start - 1);
});
