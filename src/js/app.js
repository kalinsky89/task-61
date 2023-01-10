import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  var hotCnt=document.querySelectorAll('.hot').length;
for(var i=0;i<hotCnt; i++){
  var emoji= "🔥";
  var hotTxt=document.querySelectorAll('.hot')[i].textContent;
  var currentEl=document.querySelectorAll('.hot')[i];
  currentEl.textContent=hotTxt + emoji;
}
  // This block will be executed once the page is loaded and ready
});
