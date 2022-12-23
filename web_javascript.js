const viewProjectButtons = document.querySelectorAll('.view-project-button');
const modal = document.getElementById('modal');

viewProjectButtons.forEach(button => {
  button.addEventListener('click', () => {
    modal.showModal();
  });
});
