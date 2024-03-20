const availableTimesByDate = {
    '2024-02-01': [],
    '2024-03-29': ['10:00', '11:00', '12:00'],
    '2024-03-01': ['10:00', '11:00', '12:00'],
    '2024-03-02': ['14:00', '15:00', '16:00'],
    '2024-03-03': ['10:00', '11:00', '12:00'],
    '2024-03-04': ['14:00', '15:00', '16:00'],
    '2024-03-05': ['10:00', '11:00', '12:00'],
    '2024-03-06': ['14:00', '15:00', '16:00'],
    '2024-03-07': ['10:00', '11:00', '12:00'],
    '2024-03-08': ['14:00', '15:00', '16:00'],
    '2024-03-09': ['10:00', '11:00', '12:00'],
    '2024-03-10': ['14:00', '15:00', '16:00'],
    '2024-03-11': ['10:00', '11:00', '12:00'],
    '2024-03-12': ['14:00', '15:00', '16:00'],
    '2024-03-13': ['10:00', '11:00', '12:00'],
    '2024-03-14': ['14:00', '15:00', '16:00'],
    '2024-03-15': ['10:00', '11:00', '12:00'],
    '2024-03-16': ['14:00', '15:00', '16:00'],
    '2024-03-17': ['10:00', '11:00', '12:00'],
    '2024-03-18': ['14:00', '15:00', '16:00'],
    '2024-03-19': ['10:00', '11:00', '12:00'],
    '2024-03-20': ['14:00', '15:00', '16:00'],
  };


const fetchAPI = (date) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (availableTimesByDate[date]) {
        resolve(availableTimesByDate[date])
      }
      else {
        reject(new Error('No available times for the selected date.'));
      }
    }, 1000)
  })
};

  const submitAPI = (formData) => {
    
    availableTimesByDate[formData.date] = availableTimesByDate[formData.date].filter(time => time !== formData.time);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (formData) {
          resolve(true); // Simulate successful submission
        } else {
          reject(new Error('Form submission failed.'));
        }
      }, 1000); // Simulate API delay
    });
  };

export { fetchAPI, submitAPI }
