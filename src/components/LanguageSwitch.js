document.getElementById('langSwitch').addEventListener('change', function() {
    var esp = document.querySelector('.Esp');
    var eng = document.querySelector('.Eng');
    

sessionStorage.setItem('scrollPos',window.pageYOffset);

    if (this.checked) {
      localStorage.setItem('language', 'eng')
      esp.className = 'Esp none';
      eng.className = 'Eng seletect';
      window.location.href= './en';
    } else {
     localStorage.setItem('language','esp')
      esp.className = 'Esp seletect';
      eng.className = 'Eng none';
      window.location.href= '../'
    }
   });


   langSwitch.addEventListener('touchstart', function(e) {
    e.preventDefault();
    if (!this.checked) {
     this.checked = true;
     localStorage.setItem('language', 'eng')
     document.querySelector('.Esp').className = 'Esp none';
     document.querySelector('.Eng').className = 'Eng selectect';
     window.location.href= './en';
    }
   });
   
   langSwitch.addEventListener('touchend', function(e) {
    e.preventDefault();
    if (this.checked) {
     this.checked = false;
     localStorage.setItem('language','esp')
     document.querySelector('.Esp').className = 'Esp selectect';
     document.querySelector('.Eng').className = 'Eng none';
     window.location.href= './'
    }
   });

   window.addEventListener('load',function(){
    var scrollPos = this.sessionStorage.getItem('scrollPos');
    if (scrollPos){
      window.scrollTo(0,scrollPos);
      this.sessionStorage.removeItem('scrollPos');
    }
   })
   
window.onload = function() {
 var lang = localStorage.getItem('language');
 if (lang === 'eng') {
  document.getElementById('langSwitch').checked = true;
  document.querySelector('.Esp').className = 'Esp none';
  document.querySelector('.Eng').className = 'Eng seletect';
 } else {
  document.getElementById('langSwitch').checked = false;
  document.querySelector('.Esp').className = 'Esp seletect';
  document.querySelector('.Eng').className = 'Eng none';
 }
}
