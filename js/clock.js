
function startTime() {
  var months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var mi = today.getMilliseconds();
  var mo = today.getMonth();
  var dy = today.getDate();
  var yr = today.getFullYear();
  m = checkTime(m);
  s = checkTime(s);
  ms = checkTime(mi);
  document.getElementById("y").innerHTML = yr;
  document.getElementById("mon").innerHTML = months[mo];
  document.getElementById("dy").innerHTML = dy;
  document.getElementById("h").innerHTML = h;
  document.getElementById("m").innerHTML = m;
  document.getElementById("s").innerHTML = s;
  document.getElementById("mi").innerHTML = Math.floor(mi/10);
  var t = setTimeout(startTime, 2);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}