
function sendMail(contactForm) {
   emailjs.send("gmail", "yummy", {
      "from_name": contactForm.name1.value,
      "from_email": contactForm.emailaddress1.value,
      "recipe_name": contactForm.recipe_name1.value,
      "ingredients": contactForm.ingredients1.value,
      "method": contactForm.method1.value,
      "option1": contactForm.option1.value
   })
      .then(
         function (response) {
            console.log("SUCCESS", response);
         },
         function (error) {
            console.log("FAILED", error);
         });
   return false   
}

var form = document.getElementById("contactForm");
form.reset();

