let panel = document.querySelector(".panel");
let panel_li = panel.querySelectorAll("li");
let btns = document.querySelectorAll(".btns li");
//유사 배열로 li를 바인딩해서 반환한값이 btns
btns.forEach(function (el, index) {
  el.addEventListener("click", function (e) {
    e.preventDefault();

    // 모든 버튼을 반복을 돌면서 비활성화 시킨 뒤
    for (let el of btns) {
      el.classList.remove("on");
    }
    // 클릭한 순간의 버튼만 활성화를 시킨다

    panel.style.marginLeft = "-100" * index + "%";
  });
});
