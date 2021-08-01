export function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function cacheKey(questionNumber) {
  return `question_cache_${questionNumber}`;
}

export function getQuestionCache(questionNumber) {
  const objString = localStorage.getItem(cacheKey(questionNumber));
  if (objString) {
    return JSON.parse(objString);
  }
  return null;
}

export function setQuestionCache(questionNumber, questionObject) {
  if (questionObject) {
    localStorage.setItem(
      cacheKey(questionNumber),
      JSON.stringify(questionObject)
    );
  } else {
    localStorage.setItem(cacheKey(questionNumber), "");
  }
}

export function getQuestionNumberFromHash(hash) {
  if (hash.match(/^#[0-9]+$/)) {
    return +hash.slice(1);
  } else {
    return 1;
  }
}
