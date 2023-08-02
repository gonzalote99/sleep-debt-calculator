const getSleepHours = (day) => {
if(day === 'monday') {
  return 8;
} else if (day === 'tuesday') {
  return 7;
}
else if (day === 'wednesday') {
  return 6;
}
else if (day === 'thursday') {
  return 7;
}
else if (day === 'friday') {
  return 3;
}
else if (day === 'saturday') {
  return 3;
}
else if (day === 'sunday') {
  return 6;
}
};

const getActualSleepHours = () =>{
return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
};


const getIdealSleepHours =() => {
const idealHours = 8;
return idealHours * 7;
};


const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if(actualSleepHours === idealSleepHours) {
    console.log(`got ${idealSleepHours - actualSleepHours} hours of sleep`)
  } else if(actualSleepHours > idealSleepHours) {
    console.log(`got ${idealSleepHours - actualSleepHours} more hours of sleep`)
  } else if(actualSleepHours < idealSleepHours) {
    console.log(`got ${  idealSleepHours - actualSleepHours } less hours of sleep`)
  }
};

calculateSleepDebt();