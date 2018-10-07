var jobs = document.getElementsByClassName("djl87 job_listings fbw9 browse_startups_table_row _a _jm");

function vld(elm,n){ if(elm[n] != undefined){ return elm[n].innerText.trim(); }else{ return ''; } } 

var tagArr = [];

  for (i = 0; i < jobs.length; i++) {
	var geo = vld(jobs[i].getElementsByClassName("tag locations tiptip"),0);
	var regXgeo = new RegExp(geo.replace(/,\s+/g, '|'), "g");

	var titleList = jobs[i].getElementsByClassName("details-row jobs")[0].getElementsByClassName("title");
	var compList = jobs[i].getElementsByClassName("details-row jobs")[0].getElementsByClassName("compensation");
	var tagList = jobs[i].getElementsByClassName("details-row jobs")[0].getElementsByClassName("tags");
	for(t=0; t<titleList.length; t++){
		var title = vld(titleList,t);
		var comp = vld(compList,t);
		var tags = '"'+vld(tagList,t).replace(regXgeo, '').replace(/United States · |Full Time\s+·\s+|Remote OK\s+·\s+|Remote ·\s+/g, '').replace(/^OK\W+/, '').replace(/^\W+/, '').replace(/\s+·\s+/g, '","')+'"';
		tagArr.push('{"title":"'+title+'","comp":"'+comp+'","tags":['+tags+']}')
	} 
	
  }
var jaySon = '['tagArr.toString()+']';
