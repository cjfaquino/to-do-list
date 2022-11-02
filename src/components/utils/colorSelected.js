function colorSelected(e) {
  const selectable = document.querySelectorAll('.selectable');
  selectable.forEach((el) => {
    el.classList.remove('selected');
  });
  e.currentTarget.classList.add('selected');
}

export default colorSelected;
