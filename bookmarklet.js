javascript:(function(){
  if(window.sq){
     window.sq.closed && window.document.dispatchEvent(new Event('squirt.again'));
  } else {
    window.sq = {};
    window.sq.userId = '--squirtUser--';
    window.sq.progressBarLocation = 'bottom'; /* 'bottom' | 'top' */
    s = document.createElement('script');
    s.src = 'https://rawgit.com/notzoom/SquirtLocal/master/squirt.js';
    s.s = window.location.search;
    s.idx = s.s.indexOf('sq-dev');
    document.body.appendChild(s);
  }
})();
