const form = document.querySelector('#contact-form')
const dimm = document.querySelector('.dimm5')
const end = document.querySelector('.end')
const closeBtn = document.querySelector('.close_bt')
const inputs = document.querySelectorAll('input')

// 경고창만들기
const userName = document.querySelector('#userName')
const email = document.querySelector('#email')
const message = document.querySelector('#message')

function sendEmail() {
  form.addEventListener('submit', function (event) {
    event.preventDefault()

    if (userName.value == '' || email.value == '' || message.value == '') {
      alert('이름, 이메일, 내용을 확인하세요')
      return
    }

    this.contact_number.value = (Math.random() * 100000) | 0
    dimm.classList.add('active')

    emailjs.sendForm('service_xl492uj', 'template_59j9m42', this).then(
      function () {
        end.classList.add('active')
      },
      function (error) {
        console.log('FAILED...', error)
      }
    )
  })

  closeBtn.addEventListener('click', () => {
    end.classList.remove('active')
    dimm.classList.remove('active')

    inputs.forEach(item => (item.value = ''))
    message.value = ''
  })
}

sendEmail()
