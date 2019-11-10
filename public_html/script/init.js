	(function(){

		// les éléments cibles du listener (les liens du menu) :
		var elem = document.querySelector("body ul" )
//	console.log(location);
		elem.addEventListener("click",function(e){
			e.preventDefault(); // court circuite le comportement par défaut, dans notre cas l'accès au lien
			if (e.target.nodeName == 'A') {
				console.log(e.target);
				ajax(e);
			}
			e.stopPropagation();
		},false);
	})();

 function ajax(e){
	 //https://developer.mozilla.org/fr/docs/Web/API/XMLHttpRequest
	 //https://developer.mozilla.org/fr/docs/Web/API/XMLHttpRequest/Utiliser_XMLHttpRequest
	 const  reqXhr = new XMLHttpRequest();
			reqXhr.open('GET', './json/page'+ e.target.dataset.page	+'.json', true);
			reqXhr.setRequestHeader('Content-Type', 'application/json');
			reqXhr.send(JSON.stringify({
			    page: e.target.dataset.page,
				}));


	 reqXhr.onreadystatechange = function(event) {
    // XMLHttpRequest.DONE === 4
    // injection de aria-busy="true" pendant le chargement ()
    if (this.readyState === XMLHttpRequest.DONE) {
    	if (this.status === 200) {//ok

			var jo = JSON.parse(reqXhr.responseText);
				updatePage(jo);
		    history.pushState({jo, title: jo.Titre},null, jo.Url);

    	} else {

    		console.log("Status de la réponse: %d (%s)", this.status, this.statusText);
    	}
    }
};
}




	function updatePage(jo){
		var div = document.getElementById('result');
		while(div.firstChild){
		    div.removeChild(div.firstChild);
		}
		//info
		var x = document.createElement("p");
		var t = document.createTextNode(jo.info);
		x.appendChild(t);
		document.getElementById("result").appendChild(x)

		//title
		var x = document.createElement("h1");
		var t = document.createTextNode(jo.title);
		x.appendChild(t);
		document.getElementById("result").appendChild(x);

		//text
		for (var i = 0; i<jo.paragrah.length; ++i){
			var x = document.createElement("h3");
			var t = document.createTextNode(jo.paragrah[i].title);
			x.appendChild(t);

			document.getElementById("result").appendChild(x);

			var x = document.createElement("p");
			var t = document.createTextNode(jo.paragrah[i].text);
			x.appendChild(t);

			document.getElementById("result").appendChild(x);
		}
	}


window.onpopstate = function(e) {

	if(e.state != null){
	  var  jo = JSON.stringify(e.state.jo);
		jo = JSON.parse(jo);
		updatePage(jo);
	}

};
