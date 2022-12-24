const refs = {
    openModalBtn: document.querySelector('[data-open-modall]'),
    closeModalBtn: document.querySelector('[data-close-modall]'),
    backdrop: document.querySelector('[data-backdropp]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  refs.backdrop.addEventListener('click', logBackdropClick);

  function toggleModal() {
    refs.backdrop.classList.toggle('is-hidden');
  }

  function logBackdropClick() {
    console.log('Це клік в бекдроп');
  }