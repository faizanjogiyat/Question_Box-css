const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const yesbtn = document.querySelector(".yes-btn");
const nobtn = document.querySelector(".no-btn");

const wrapperRect = wrapper.getBoundingClientRect();
const nobtnRect = nobtn.getBoundingClientRect();

yesbtn.addEventListener("click", () =>{
  question.innerHTML= "(: I LOVE YOU TOO :)"
});


nobtn.addEventListener("click", () =>{
  const i = Math.floor(Math.random() * (wrapperRect.width - nobtnRect.width + 1)) + 1;
  const j = Math.floor(Math.random() * (wrapperRect.height - nobtnRect.height + 1)) + 1;

  nobtn.style.left = i + "px";
  nobtn.style.top = j + "px";
});