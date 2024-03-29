(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
      body: document.querySelector("[lock]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      refs.body.classList.toggle("lock")
    }
  })();

// const textEl = document.querySelector (".text")
// console.log(textEl);
// window.addEventListener("keydown", (event) => {
//   console.log(event);
//   textEl.textContent += event.key;
//   console.dir(textEl);
// })