document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('button');
  const titles = document.getElementsByClassName('card__input-title');
  const inputs = document.getElementsByClassName('card__input');
  const error = document.getElementById('invalidDate');

  btn.addEventListener('click', function() {
    console.log("testing...")
    validation();
  })

  const validateDate = (date) => isNaN(Date.parse(date))


  function getDurationBetweenDateAndNow(date) {
    // Obtenemos la fecha actual
    let currentDate = new Date();
    // Obtenemos la diferencia entre ambas fechas
    let diff = currentDate.getTime() - date.getTime();
    // Realizamos la operación matemática para obtener el resultado en días
    const yearMs = 1000 * 60 * 60 * 24 * 365;
    const monthMs = 1000 * 60 * 60 * 24 * 30.44;
    const dayMs = 1000 * 60 * 60 * 24;
    // Convertimos los dias en años meses y dias
    const years = Math.floor(diff / yearMs);
    const months = Math.floor(diff % yearMs / monthMs);
    const days = Math.floor(diff % monthMs / dayMs);
    return {
      years: years,
      months: months,
      days: days
    };
  }




  function validation() {

    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    const dateString = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    const date = new Date(dateString);

    for (let i = 0; i < titles.length; i++) {
      let input = inputs[i];
      let title = titles[i];
      if (input.value === "" || input.value == 0) {
        title.classList.add("card__text-error");
        input.classList.add("card__input-error");
      } else {
        title.classList.remove("card__text-error");
        input.classList.remove("card__input-error");
      }
    }


    if (validateDate(date)) {
      error.classList.add("card__error-active");
      return;
    }


    error.classList.remove("card__error-active");
    

    const duration = getDurationBetweenDateAndNow(date);
    document.getElementById("years").textContent = duration.years;
    document.getElementById("months").textContent = duration.months;
    document.getElementById("days").textContent = duration.days;

  }



})



