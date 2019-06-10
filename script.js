function up() {
    var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
   if(top > 0) {
    window.scrollBy(0,((top+100)/-10));
    t = setTimeout('up()',40);
   } else clearTimeout(t);
   return false;
  }

  window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 20) {
        document.getElementById('up').style.display = 'block';
    } else {
        document.getElementById('up').style.display = 'none';
    }
  }