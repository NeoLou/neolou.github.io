//Rollcage Animation

function myFunction(x) {
  if (x.matches) { // If media query matches
    document.getElementById("rollcageVid").addEventListener("click", function() {
      this.play();
    });
    
    document.getElementById("rollcageVid").addEventListener("click", function() {
      this.stopVideo();
    });
  } else {
    document.getElementById("rollcageVid").addEventListener("mouseover", function() {
      this.play();
    });
    
    document.getElementById("rollcageVid").addEventListener("mouseleave", function() {
      this.stopVideo();
    });
}
}

var x = window.matchMedia("(max-width:600px)")
myFunction(x) // Call listener function at run time
x.addEventListener("change", myFunction()) // Attach listener function on state changes  

//Scroll to top button
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//Contact form

window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Thank you!";
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}

//Preventing # from appearing in URL after clicking sidebar

function scrollSmoothTo(elementId) {
  var element = document.getElementById(elementId);
  element.scrollIntoView({
    block: 'start',
    behavior: 'smooth'
  });
}
