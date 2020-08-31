function sendMail(contactForm) {
   emailjs.send("gmail", "yummy", {
      from_name: contactForm.name.value,
      from_email: contactForm.emailaddress.value,
      recipe_name: contactForm.recipe_name.value,
      ingredients: contactForm.ingredients.value,
      method: contactForm.method.value

   })
      .then(
         function (response) {
            console.log("SUCCESS", response);
         },
         function (error) {
            console.log("FAILED", error);
         }
      );
}


