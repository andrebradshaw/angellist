# angellist
backup:

/*/
var jobs = document.getElementsByClassName("djl87 job_listings fbw9 browse_startups_table_row _a _jm");

function vld(elm,n){
	if(elm[n] != undefined){
		return elm[n].innerText.trim();	
	}else{
		return '';
	}
}
function cln(str){
	return str.replace(/\s+PROMOTED/, '').replace(/,/g, ';');
}

for(i=0; i<jobs.length; i++){
	var company = cln(jobs[i].getElementsByClassName("browse-table-row-name js-browse-table-row-name")[0].innerText);
	
	var tagline = cln(jobs[i].getElementsByClassName("tagline")[0].innerText);

	var geo = vld(jobs[i].getElementsByClassName("tag locations tiptip"),0);

	var jobList = jobs[i].getElementsByClassName("collapsed-job-listings")[0].getElementsByClassName("collapsed-listing-row");

	var jobArr = [];
	for(j=0; j<jobList.length; j++){
		var title = vld(jobList[j].getElementsByClassName("collapsed-title"),0);
		var comp = vld(jobList[j].getElementsByClassName("collapsed-compensation"),0);
		jobArr.push(title);
		
	}
	
	console.log(geo);
}

/*/

