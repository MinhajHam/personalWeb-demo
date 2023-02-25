const formName = document.getElementById("name");
const email = document.getElementById("email");
const form = document.getElementById("submit-form");
const subject = document.getElementById("subject");
const formMessage = document.getElementById("form-msg");
const errorEl = document.getElementsByClassName("error-msg");

function containsNumbers(str) {
  return /\d/.test(str);
}

form.addEventListener("submit", (e) => {
  let message = [];
  if (formName.value === "" || formName.value == null) {
    message.push("value");
    alert("Name is required");
  }

  if (containsNumbers(formName.value) == true) {
    message.push("value");
    alert("Name shouldn't contain numbers");
  }

  if (subject.value === "" || subject.value == null) {
    message.push("value");
    alert("Subject is required");
  }

  if (formMessage.value === "" || formMessage.value == null) {
    message.push("value");
    alert("Message is required");
  }

  if (message.length > 0) {
    e.preventDefault();
  } else {
    //submition

    e.preventDefault();
    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbyrmkBH-5kCAXWo5n1hpZUzVuCxfrVwHtVPj0_Mmx8iqY8_ZUiqpQPvP2SfwcOfVCw/exec",
      data: $(form).serialize(),
      method: "post",
      success: function (response) {
        alert("Form submitted successfully");
        window.location.reload();
        // window.location.href="https://google.com"
      },
      error: function (err) {
        alert("Something Error");
      },
    });
  }
});
