// Code your orbitCircumference function here:
let orbitCircumference = (radius) => {
  return Math.round(Math.PI * 2 * radius)
}

// Code your missionDuration function here:
let missionDuration = (numberOfOrbits, orbitRadius, orbitSpeed) => {
  orbitRadius = 2000
  orbitSpeed = 28000
  let planetCircumference = orbitCircumference(orbitRadius)
  let distance = planetCircumference * numberOfOrbits
  let time = distance / orbitSpeed
  time = Math.round(time * 100) / 100
  return time

}

//console.log(missionDuration(3));


// Copy/paste your selectRandomEntry function here:

function selectRandomEntry(arr) {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

// Code your oxygenExpended function here:
let oxygenExpended = (crewMember,numberOfOrbits, orbitRadius, orbitSpeed) => {
  let duration = missionDuration(numberOfOrbits, orbitRadius, orbitSpeed);
  let o2Used = Math.round(crewMember.o2Used(duration) * 1000) / 1000;
  return  `${crewMember.name} will perform the spacewalk, which will last ${duration} hours and require ${o2Used} kg of oxygen.`

}

// Candidate data & crew array.
let candidateA = {
  'name': 'Gordon Shumway',
  'species': 'alf',
  'mass': 90,
  'o2Used': function (hrs) {
    return 0.035 * hrs
  },
  'astronautID': 414
};
let candidateB = {
  'name': 'Lassie',
  'species': 'dog',
  'mass': 19.1,
  'o2Used': function (hrs) {
    return 0.030 * hrs
  },
  'astronautID': 503
};
let candidateC = {
  'name': 'Jonsey',
  'species': 'cat',
  'mass': 3.6,
  'o2Used': function (hrs) {
    return 0.022 * hrs
  },
  'astronautID': 796
};
let candidateD = {
  'name': 'Paddington',
  'species': 'bear',
  'mass': 31.8,
  'o2Used': function (hrs) {
    return 0.047 * hrs
  },
  'astronautID': 291
};
let candidateE = {
  'name': 'Pete',
  'species': 'tortoise',
  'mass': 417,
  'o2Used': function (hrs) {
    return 0.010 * hrs
  },
  'astronautID': 599
};
let candidateF = {
  'name': 'Hugs',
  'species': 'ball python',
  'mass': 2.3,
  'o2Used': function (hrs) {
    return 0.018 * hrs
  },
  'astronautID': 890
};

let animals = [candidateA, candidateB, candidateC, candidateD, candidateE, candidateF];
let walker = selectRandomEntry(animals);
let o2Statement = oxygenExpended(walker);
console.log(o2Statement);
