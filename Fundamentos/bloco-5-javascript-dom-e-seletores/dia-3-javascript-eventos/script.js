function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
function createDaysOfTheMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  for(indexm = 0; indexm < dezDaysList.length; indexm +=1){
    const monthsDays = dezDaysList[indexm];
    const monthsDaysList = document.createElement("li");
    monthsDaysList.className = "day"
    monthsDaysList.innerHTML = monthsDays
    if(monthsDays === 24 || 25 || 31){
      monthsDaysList.className = "day holiday"
    }else if(monthsDays === 4 || 11 || 18 || 25){
      monthsDaysList.className = "day friday"
    }

    document.querySelector("#days").appendChild(monthsDaysList)

  }
}
createDaysOfTheMonth();

