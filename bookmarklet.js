javascript:(function(){
  if(window.sq){
     window.sq.closed && window.document.dispatchEvent(new Event('squirt.again'));
  } else {
    window.sq = {};
    window.sq.userId = '--squirtUser--';
    s = document.createElement('script');
    s.src = 'https://rawgit.com/rstudios/SquirtLocal/master/squirt.js';
    s.s = window.location.search;
    s.idx = s.s.indexOf('sq-dev');
    document.body.appendChild(s);
  }
})();
