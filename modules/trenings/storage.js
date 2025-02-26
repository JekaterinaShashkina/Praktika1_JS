export const setStorage = (key, obj) => {
    const trainings = getStorage(key);
    trainings.push(obj);
    return localStorage.setItem(key, JSON.stringify(trainings));
  };
  
  export const getStorage = (key) => JSON.parse(localStorage.getItem(key)) || [];
  
  export const removeStorage = (id) => {
    let trainings = getStorage('training');
    const index = trainings.findIndex((training) => training.id === id);

    if (index !== -1) {
        trainings.splice(index, 1); 
    }

    localStorage.setItem('training', JSON.stringify(trainings));
  };

  export const getStorageItem = (id) => {
    const trainings = getStorage("training")
    const training = trainings.find((item) => item.id === id);

    return training ? training : null;
};

export const changeStorageItem = (id, key, string) => {
  let trainings = getStorage(key);
  console.log(trainings);

  trainings.forEach((t) => {
    if (t.id === id) {
      t.statue = string;
    }
  });
  
  localStorage.setItem(key, JSON.stringify(trainings));
};