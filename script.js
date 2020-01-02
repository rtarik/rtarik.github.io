(function() {
  const image = document.getElementById('avatar');
  image.addEventListener('mousemove', e => {
    if (e.clientX - image.x < image.width / 3) {
      image.src = './res/avatar_left.svg';
    } else if (e.clientX - image.x < 2*image.width / 3) {
      image.src = './res/avatar_middle.svg';
    } else {
      image.src = './res/avatar_right.svg';
    }
  });
  image.addEventListener('mouseleave', e => {
    image.src = './res/avatar_middle.svg';
  });
})();
