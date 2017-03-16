function defer() {
  const deferred = {};
  const promise = new Promise(function(resolve, reject) {
    deferred.resolve = resolve;
    deferred.reject = reject;
  });
  deferred.then = promise.then.bind(promise);
  deferred.catch = promise.catch.bind(promise);
  return deferred;
}

function callbackPromise() {
  const deferred = defer();
  const callback = function(err, result) {
    if (err) {
      deferred.reject(err);
    } else {
      deferred.resolve(result);
    }
  };
  callback.then = deferred.then;
  callback.catch = deferred.catch;
  return callback;
}

module.exports = callbackPromise;
