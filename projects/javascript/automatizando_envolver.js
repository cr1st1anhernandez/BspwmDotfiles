function countHours(year, holidays) {
  let hours = 0;
  for(let holiday of holidays){

  const date = new Date(`${holiday}/${year}`)

    if(![0, 6].includes(date.getDay())){
      hours +=2;
    }

  }

  return hours;
}


