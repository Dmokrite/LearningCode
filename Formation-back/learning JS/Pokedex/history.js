const missedLog = JSON.parse(localStorage.getItem('missedPokemons')) || [];
const successLog = JSON.parse(localStorage.getItem('caughtPokemons')) || [];

function addToCapturedList() {
  const capturedList = document.getElementById('captured-list');

  if (capturedList) {
    successLog.forEach((entry, index) => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `Capturé le ${new Date().toLocaleString()} - ${entry.name}`;
      capturedList.appendChild(listItem);
    });
  }
}

function addToMissedList() {
  const missedList = document.getElementById('missed-list');

  if (missedList) {
    missedLog.forEach((entry, index) => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `Raté le ${new Date().toLocaleString()} - ${entry.name}`;
      missedList.appendChild(listItem);
    });
  }
}

addToCapturedList();
addToMissedList();
