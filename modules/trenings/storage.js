export const setStorage = (key, obj) => {
    const trainings = getStorage(key);
    trainings.push(obj);
    return localStorage.setItem(key, JSON.stringify(trainings));
  };
  
  export const getStorage = (key) => JSON.parse(localStorage.getItem(key)) || [];
  
  export const removeStorage = (id) => {
    let trainings = getStorage('training');
    trainings.forEach((training) => {
      if (training.id === id) {
        trainings.splice(training, 1);
      }
    });
    localStorage.setItem('training', JSON.stringify(trainings));
  };