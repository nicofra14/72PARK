document.querySelector("#show-btn").addEventListener("click", function () {
  document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup .close-btn").addEventListener("click", function () {
  document.querySelector(".popup").classList.remove("active");
});


document.addEventListener("DOMContentLoaded", function () {
  const indicativoSelect = document.getElementById("select_indicativo");
  const telefonoInput = document.getElementById("telefono");

  indicativoSelect.addEventListener("change", function () {
      const selectedIndicativo = indicativoSelect.value;
      const phoneNumber = telefonoInput.value;

      telefonoInput.value = selectedIndicativo + phoneNumber;
  });
});
  
  function validateForm() {
            const emailInput = document.getElementById("Email");
            const telefonoInput = document.getElementById("telefono");
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const telefonoPattern = /^[0-9]+$/;

            if (!emailPattern.test(emailInput.value)) {
                alert("Por favor, ingresa una dirección de correo electrónico válida.");
                return false;
            }

            if (!telefonoPattern.test(telefonoInput.value)) {
                alert("Por favor, ingresa un número de teléfono válido.");
                return false;
            }

            return true;
        }


