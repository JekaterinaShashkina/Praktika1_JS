export const setStorage = (key, obj) => {
    const trainings = getStorage(key);
    trainings.push(obj);
    return localStorage.setItem(key, JSON.stringify(trainings));
  };
  
  export const getStorage = (key) => JSON.parse(localStorage.getItem(key)) || [];
  
  export const removeStorage = (phone) => {
    let trainings = getStorage('training');
    trainings.forEach((contact) => {
      if (training.phone === phone) {
        trainings.splice(contact, 1);
      }
    });
    localStorage.setItem('training', JSON.stringify(trainings));
  };