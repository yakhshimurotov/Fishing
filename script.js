// Google SHeets Script URL 🔗

function handleSubmit() {
  const form = document.getElementById("myForm");
//   const body = document.querySelector("body");
  const button = document.querySelector(".btn");
  const errorMessage = document.getElementById("error-message");
  const error = document.querySelector(".error");

    // Formani yuborishdan oldin hodisani to'xtatamiz
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzO1Sht14LT8YZMQXgFF06tLi_WurwA_rrUxRXLYknGlS00NvmWA4gYy_1FMdpkPs82/exec"; // Formani qabul qiluvchi manzil

    errorMessage.textContent = "";

    if (!form.checkValidity()) {
        errorMessage.textContent = "Iltimos, barcha maydonlarni to'ldiring :(";
       
          gsap.from(".error", {
	      scale: -.2,
          duration: 1,
          ease: "elastic",
		  });
     
		errorMessage.style.display = "block"; 
        return;
    }

  // Formani yuborish
  fetch(scriptURL, {
    method: "POST",
    body: new FormData(form),
  })
    .then((response) => {
      console.log("Form yuborildi");
      // Sahifani o'zgartirish
      window.location.href = "https://66f20597096a383a5b26dc5e--sparkly-hotteok-b6ad27.netlify.app/";
    })

    .catch(error => {
        errorMessage.textContent = "Xatolik yuz berdi. Qaytadan urinib ko'ring!";
        console.error("Xatolik yuz berdi", error);
    });
}
