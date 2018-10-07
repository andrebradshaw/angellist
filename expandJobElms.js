var jobs = document.getElementsByClassName("djl87 job_listings fbw9 browse_startups_table_row _a _jm");
function expandElms() {
  for (i = 0; i < jobs.length; i++) {
    var clsnme = jobs[i].getAttribute("class");
    if (/expanded/.test(clsnme) === false) {
      jobs[i].click();
    }
  }
}
expandElms();
