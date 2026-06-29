const resolvedWrapper = (value) => {
  return Promise.resolve(value);
};

const rejectedWrapper = (errorMessage) => {
  return Promise.reject(new Error(errorMessage));
};

const handleResolvedPromise = (promise) => {
  return promise.then((message) => {
    console.log(message);
    return message.toUpperCase();
  });
};

const handleResolvedOrRejectedPromise = (promise) => {
  return promise
    .then((message) => {
      console.log(message);
      return message.toUpperCase();
    })
    .catch((err) => {
      console.error(`Your error message was: ${err.message}`);
      return null;
    });
};

const pauseForMs = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

module.exports = {
  resolvedWrapper,
  rejectedWrapper,
  handleResolvedPromise,
  handleResolvedOrRejectedPromise,
  pauseForMs,
};
