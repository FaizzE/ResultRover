(function () {
  var _0xabc1 = {
    'a': 'click', 'b': 'getElementById', 'c': 'value', 'd': 'toLowerCase',
    'e': 'style', 'f': 'display', 'g': 'block', 'h': 'href', 'i': 'setItem',
    'j': 'authToken', 'k': 'none', 'l': 'Please Enter Correct Name or Enrollment No.',
    'm': 'contextmenu', 'n': 'preventDefault', 'o': 'keydown',
    'p': 'F12', 'q': 'u', 'r': 'I', 's': 'ctrlKey', 't': 'key',
    'u': 'open', 'v': 'replace'
  };

  const resultPages = {
    '22010900008': { name: 'faizul islam', link: 'page8/index.html' },
    '22010900001': { name: 'vishnu kumar', link: 'page1/index.html' },
    // ... (rest of the entries)
  };

  const submitBTN = document[_0xabc1['b']]('submitBTN');
  const enrollmentInput = document[_0xabc1['b']]('enrollment-input');
  const studentName = document[_0xabc1['b']]('name');
  const nextPageBtn = document[_0xabc1['b']]('nextPageBtn');

  submitBTN.addEventListener(_0xabc1['a'], function () {
    const enteredEnrollment = enrollmentInput[_0xabc1['c']];
    const studentNames = studentName[_0xabc1['c']][_0xabc1['d']]();
    const result = resultPages[enteredEnrollment];
    if (result && result.name === studentNames) {
      localStorage[_0xabc1['i']](_0xabc1['j'], enteredEnrollment);
      nextPageBtn[_0xabc1['e']][_0xabc1['f']] = _0xabc1['g'];
      nextPageBtn[_0xabc1['h']] = result.link;
    } else {
      alert(_0xabc1['l']);
      nextPageBtn[_0xabc1['e']][_0xabc1['f']] = _0xabc1['k'];
    }
  });

  document.addEventListener(_0xabc1['m'], function (e) {
    e[_0xabc1['n']]();
  });

  document.addEventListener(_0xabc1['o'], function (e) {
    if (e[_0xabc1['t']] === _0xabc1['p'] || (e[_0xabc1['s']] && e[_0xabc1['t']] === _0xabc1['q']) || (e[_0xabc1['s']] && e[_0xabc1['t']] === _0xabc1['r'])) {
      e[_0xabc1['n']]();
    }
  });

  setInterval(function () {
    if (window.devtools && window.devtools[_0xabc1['u']]) {
      window.location[_0xabc1['v']]("about:blank");
    }
  }, 1000);
})();
