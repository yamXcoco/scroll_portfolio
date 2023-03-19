const dimm = document.querySelector(".dimm5");
const end = document.querySelector(".end");
const closeBtn = document.querySelector(".close");
const inputs = document.querySelectorAll("input");

// 경고창만들기
const username = document.getElementById("username");
const email = document.getElementById("email");
const message = document.getElementById("message");

console.log(inputs);

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      if (username.value == "" || email.value == "" || message.value == "") {
        alert("이름, 이메일, 내용을 확인하세요");
        return;
      }
      dimm.classList.add("active");
      this.contact_number.value = (Math.random() * 100000) | 0;
      emailjs.sendForm("service_xl492uj", "template_59j9m42", this).then(
        function () {
          console.log("SUCCESS!");
          end.classList.add("active");
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    });
  closeBtn.addEventListener("click", function () {
    end.classList.remove("active");
    dimm.classList.remove("active");

    inputs.forEach((item) => (item.value = ""));
    // message.value = ''
  });
};
