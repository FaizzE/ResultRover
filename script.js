const submitBTN = document.getElementById('submitBTN');
const enrollmentInput = document.getElementById('enrollment-input');
const studentName = document.getElementById('name');
const nextPageBtn = document.getElementById('nextPageBtn');

// Object to map enrollment numbers to corresponding result page links
const resultPages = {
    '22010900008': { name: 'faizul islam', link: 'page8/index.html' },
    '22010900001': { name: 'vishnu kumar', link: 'page1/index.html' },
    '22010900002': { name: 'khushboo kumari', link: 'page2/index.html' },
    '22010900003': { name: 'mohsin wahdi', link: 'page3/index.html' },
    '22010900004': { name: 'deepak kumar', link: 'page4/index.html' },
    '22010900005': { name: 'gautam kumar singh', link: 'page5/index.html' },
    '22010900006': { name: 'shivam kumar', link: 'page6/index.html' },
    '22010900009': { name: 'atharv kushagra', link: 'page7/index.html' },
    '22010900010': { name: 'kaushal kumar', link: 'page9/index.html' },
    '22010900011': { name: 'suraj kumar', link: 'page10/index.html' },
    '22010900012': { name: 'vikram kumar', link: 'page11/index.html' },
    '22010900014': { name: 'ankit kumar', link: 'page12/index.html' },
    '22010900015': { name: 'ishu kishor', link: 'page13/index.html' },
    '22010900016': { name: 'uttam kumar', link: 'page14/index.html' },
    '22010900017': { name: 'harsh kumar', link: 'page15/index.html' },
    '22010900018': { name: 'rishav ranjan', link: 'page16/index.html' },
    '22010900019': { name: 'rajkumar saw', link: 'page17/index.html' },
    '22010900020': { name: 'vaishnavi kumari', link: 'page18/index.html' },
    '22010900021': { name: 'praveen kumar', link: 'page19/index.html' },
    '22010900022': { name: 'manikant kumar', link: 'page20/index.html' },
    '22010900023': { name: 'md zaka ullah', link: 'page21/index.html' },
    '22010900024': { name: 'jyoti kumari', link: 'page22/index.html' },
    '23010900302': { name: 'ghanshyam kumar', link: 'page23/index.html' },
    '23010900303': { name: 'dipti kumari', link: 'page24/index.html' },
    '23010900304': { name: 'nikhil raj', link: 'page25/index.html' },
    '23010900305': { name: 'sunny kumar', link: 'page26/index.html' },
    '23010900306': { name: 'shahid akhtar', link: 'page27/index.html' },
    '23010900307': { name: 'deepa kumari', link: 'page28/index.html' },
    '23010900309': { name: 'dushyant kumar', link: 'page30/index.html' },

};

submitBTN.addEventListener('click', function() {
    const enteredEnrollment = enrollmentInput.value;
    const studentNames = studentName.value.toLowerCase();

    const result = resultPages[enteredEnrollment];
    
    if (result && result.name === studentNames) {
        
        localStorage.setItem('authToken', enteredEnrollment);

        nextPageBtn.style.display = 'block';
        nextPageBtn.href = result.link; 
    } else {
        alert('Please Enter Correct Name or Enrollment No.');
        nextPageBtn.style.display = 'none';
    }
});

//Prevent right-click and inspect tools
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
document.addEventListener('keydown', function(e) {
    if (e.key === 'F12' || (e.ctrlKey && e.key === 'u') || (e.ctrlKey && e.key === 'I')) {
        e.preventDefault();
    }
});

setInterval(function() {
    if (window.devtools && window.devtools.open) {
        window.location.replace("about:blank");
    }
}, 1000);
