
const books = [{
	"title":"Odyssee",
	"author":"Homer",
	"publisher":"Gareth Hinds",
	"image":"img/homer.jpg",
	"description":"Mancher Literaturliebhaber behauptet, die Schrift sei nur deswegen erfunden worden, um die epischen Erzählungen Homers niederzuschreiben. Das ist vielleicht ein wenig zu viel der Schmeichelei, aber Fakt ist: Homers Odyssee gehört zu den ältesten, wichtigsten und größten Erzählungen der Weltliteratur. Ein angeblich blinder Dichter, von dem wir heute fast nichts wissen, schenkte uns diese gewaltige Abenteuererzählung: Nach zehn Jahren im Trojanischen Krieg will der Held Odysseus endlich in die geliebte Heimat zurückkehren. Doch er erzürnt den Meergott Poseidon, was ihm manches Ungemach beschert. Mann für Mann verliert er seine Gefährten, er begegnet den menschenfressenden Laistrygonen, dem einäugigen Kyklopen, dem sechsköpfigen Seeungeheuer Skylla, den verlockenden Sirenen, der Zauberin Kirke und landet schließlich auf einem Eiland bei der Nymphe Kalypso. Nur durch den Ratschluss der Götter darf er nach zehnjähriger Irrfahrt in die Heimat zurückkehren, Frau und Thron wieder in Besitz nehmen und Ordnung schaffen im verwahrlosten Königreich. Der französische Schriftsteller George Duhamel empfahl einmal, dass \"ein kultivierter Europäer alle zehn Jahre die Homer'schen Epen wiederlesen\" soll. Es lohnt sich, denn mit Homer beginnt tatsächlich die europäische Literatur.",
	"rating":"&starf;&starf;&starf;&starf;&starf;"
},{
	"title":"Das Bildnis des Dorian Gray",
	"author":"Oscar Wilde",
	"publisher":"Lock and Co.",
	"image":"img/gray.jpg",
	"description":"Die Handlung setzt mit einem Gespräch zweier junger Männer ein, Lord Henry Wotton (genannt Lord Henry oder Harry), eines gebildeten Dandys, und des erfolgreichen Malers Basil Hallward. Ort des Geschehens ist Basils Atelier, das sich in einen Garten öffnet. Es geht um Kunst und Selbstinszenierung.",
	"rating":"&starf;&starf;&starf;&starf;&starf;"
},{
	"title":"Stolz und Vorurteil",
	"author":"Jane Austen",
	"publisher":"Thomas Egerton",
	"image":"img/suv.jpg",
	"description":"Stolz und Vorurteil ist ein Entwicklungsroman, in dem sich die beiden Hauptfiguren Elizabeth Bennet und Fitzwilliam Darcy durch die Überwindung einiger Krisen verändern, um sich in neuer Bescheidenheit und Einsicht in ihre Fehler für eine gemeinsame Zukunft zu finden.",
	"rating":"&starf;&starf;&starf;&starf;&starf;"
}];

const cd = [{
	"title":"Breathe",
	"author":"Jax Jones",
	"publisher":"Universal Music Operations Limited",
	"image":"img/breathe.jpg",
	"genre":"Dance/Electro",
	"rating":"&starf;&starf;&starf;&starf;&starf;"
},{
	"title":"Mad Love",
	"author":"Sean Paul, David Guetta",
	"publisher":"SPJ Productions Ltd, under exclusive licence to Island Records, a division of Universal Music Operations Limited",
	"image":"img/mad-love.jpg",
	"genre":"Dance/Electro/Pop",
	"rating":"&starf;&starf;&starf;&starf;&starf;"
},{
	"title":"One Kiss",
	"author":"Calvin Harris, Dua Lipa",
	"publisher":"SME (im Auftrag von Columbia); UMPG Publishing, ASCAP, Heaven 11, EMI Music Publishing",
	"image":"img/kiss.jpg",
	"genre":"Dance/Electro",
	"rating":"&starf;&starf;&starf;&starf;&starf;"
}];

const dvd = [{
	"title":"titanic",
	"author":"James Cameron",
	"image":"img/titanic.jpg",
	"description":"Weltweit unübertroffen ist die bewegende Geschichte und atemberaubende Pracht von Titanic. Ausgezeichnet mit elf Oscars, u.a. für den besten Film, spielte sich die ergreifende Liebesgeschichte überall auf der Welt in die Herzen der Kinobesucher und wurde damit zum populärsten Film aller Zeiten. Der internationale Superstar Leonardo DiCaprio und die Oscar-nominierte Kate Winslet bezaubern auf der Leinwand als die jungen Liebenden Jack und Rose, die auf der Jungfernfahrt der \"Unsinkbaren\" R.M.S. Titanic zueinander finden. Als das schicksalhafte Luxusschiff im eisigen Nordatlantik mit einem Eisberg kollidiert, wird ihre leidenschaftliche Liebe zu einem packenden Wettlauf gegen den Tod..."
	"rating":"&starf;&starf;&starf;&starf;&starf;"
},{
	"title":"E.T.",
	"author":"Steven Spielberg",
	"image":"img/et.jpg",
	"description":"E.T. - ein kleiner Außerirdischer, der sich plötzlich drei Millionen Lichtjahre von seinem Heimatplaneten entfernt befindet. Versehentlich zurück gelassen, wird er von dem 10jährigen Jungen Elliott entdeckt, der ihn direkt in sein Herz schließt und ihm seine Hilfe anbietet. E.T. lebt sich zwar schnell in Elliotts Familie ein, in der er versteckt gehalten wird, leidet aber unter schrecklichem Heimweh. Er versucht mit seinen Verwandten auf seinem Heimatplaneten Kontakt aufzunehmen, um wieder nach Hause fliegen zu können. Doch gleichzeitig erfahren die Behörden von der Anwesenheit dieses kleinen Weltraumbesuchers und setzen alles daran ihn zu finden. Alleine Elliott und seine Geschwister Gertie und Michael können ihm noch helfen und ihre außergewöhnliche Freundschaft unter Beweis stellen..."
	"rating":"&starf;&starf;&starf;&starf;&starf;"
},{
	"title":"Harry Potter und der Stein der Weisen",
	"author":"Chris Columbus",
	"image":"img/hpsw.jpg",
	"description":"Harry erfährt an seinem 11. Geburtstag, dass seine Eltern mächtige Zauberer waren und auch er magische Kräfte besitzt. Und nun soll er nach Hogwarts kommen, das Internat für Hexerei und Zauberei.",
	"rating":"&starf;&starf;&starf;&starf;&starf;"
}];

const comic = [{
	"title":"Batman: Lächeln, bitte!",
	"publisher":"DC Comics",
	"image":"img/batman.jpg",
	"rating":"&starf;&starf;&starf;&starf;&starf;"
},{
	"title":"Venom",
	"publisher":"Marvel",
	"image":"img/venom.jpg",
	"rating":"&starf;&starf;&starf;&starf;&starf;"
},{
	"title":"X-Men Prime",
	"publisher":"Marvel",
	"image":"img/x-men.jpg",
	"rating":"&starf;&starf;&starf;&starf;&starf;"
}];

for(let indexBooks of books) {
	document.getElementById("books").innerHTML += `
		<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 panel">
			<a href="#" class="pop1">
				<img src="${indexBooks.image}" alt="${indexBooks.title}" class="img-responsive center-block">
			</a>
			
			<div class="modal fade" id="imagemodal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			  <div class="modal-dialog">
			    <div class="modal-content">
			      <div class="modal-header">
					<h3>${indexBooks.title}</h3>
			      </div>
			      <div class="modal-body">
			        <img src="${indexBooks.image}" alt="${indexBooks.title}" class="img-responsive center-block">
			      </div>
			      <div class="modal-footer">

			      </div>
			    </div>
			  </div>
			</div>

			<div class="caption align">
				<h3>${indexBooks.title}</h3>
				<span>von <a href="#">${indexBooks.author}</a></span>
				<br>
				<span class="glyphicon glyphicon-star"></span>
				<span class="glyphicon glyphicon-star"></span>
				<span class="glyphicon glyphicon-star"></span>
				<span class="glyphicon glyphicon-star"></span>
				<span class="glyphicon glyphicon-star"></span>
				<span class="small">(980)</span>
			</div>
		</div>
	`
}

for(let indexCd of cd) {
	document.getElementById("cds").innerHTML += `
		<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 panel">

		<a href="#" class="pop2">
				<img src="${indexCd.image}" alt="${indexCd.title}" class="img-responsive center-block">
			</a>
			
			<div class="modal fade" id="imagemodal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			  <div class="modal-dialog">
			    <div class="modal-content">
			      <div class="modal-header">
					<h3>${indexCd.title}</h3>
			      </div>
			      <div class="modal-body">
			        <img src="${indexCd.image}" alt="${indexCd.title}" class="img-responsive center-block">
			      </div>
			      <div class="modal-footer">

			      </div>
			    </div>
			  </div>
			</div>

			<div class="caption align">
				<h3>${indexCd.title}</h3>
				<span>von <a href="#">${indexCd.author}</a></span>
				<br>
				<span class="glyphicon glyphicon-star"></span>
				<span class="glyphicon glyphicon-star"></span>
				<span class="glyphicon glyphicon-star"></span>
				<span class="glyphicon glyphicon-star"></span>
				<span class="glyphicon glyphicon-star"></span>
				<span class="small">(980)</span>
			</div>
		</div>
	`
}

for(let indexDvd of dvd) {
	document.getElementById("dvds").innerHTML += `
		<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 panel">

		<a href="#" class="pop3">
				<img src="${indexDvd.image}" alt="${indexDvd.title}" class="img-responsive center-block">
			</a>
			
			<div class="modal fade" id="imagemodal3" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			  <div class="modal-dialog">
			    <div class="modal-content">
			      <div class="modal-header">
					<h3>${indexDvd.title}</h3>
			      </div>
			      <div class="modal-body">
			        <img src="${indexDvd.image}" alt="${indexDvd.title}" class="img-responsive center-block">
			      </div>
			      <div class="modal-footer">

			      </div>
			    </div>
			  </div>
			</div>

			<div class="caption align">
				<h3>${indexDvd.title}</h3>
				<span>von <a href="#">${indexDvd.author}</a></span>
				<br>
				<span class="glyphicon glyphicon-star"></span>
				<span class="glyphicon glyphicon-star"></span>
				<span class="glyphicon glyphicon-star"></span>
				<span class="glyphicon glyphicon-star"></span>
				<span class="glyphicon glyphicon-star"></span>
				<span class="small">(980)</span>
			</div>
		</div>
	`
}

for(let indexComic of comic) {
	document.getElementById("comics").innerHTML += `
		<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 panel">

			<a href="#" class="pop4">
				<img src="${indexComic.image}" alt="${indexComic.title}" class="img-responsive center-block">
			</a>
			
			<div class="modal fade" id="imagemodal4" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			  <div class="modal-dialog">
			    <div class="modal-content">
			      <div class="modal-header">
					<h3>${indexComic.title}</h3>
			      </div>
			      <div class="modal-body">
			        <img src="${indexComic.image}" alt="${indexComic.title}" class="img-responsive center-block">
			      </div>
			      <div class="modal-footer">

			      </div>
			    </div>
			  </div>
			</div>

			<div class="caption align">
				<h3>${indexComic.title}</h3>
				<span>von <a href="#">${indexComic.publisher}</a></span>
				<br>
				<span class="glyphicon glyphicon-star"></span>
				<span class="glyphicon glyphicon-star"></span>
				<span class="glyphicon glyphicon-star"></span>
				<span class="glyphicon glyphicon-star"></span>
				<span class="glyphicon glyphicon-star"></span>
				<span class="small">(980)</span>
			</div>
		</div>
	`
}

submit.onclick = function getData() {
	var title = document.getElementById("title").value;
	var author = document.getElementById("author").value;
	var publisher = document.getElementById("publisher").value;
	var img = document.getElementById("img").value;
	var description = document.getElementById("description").value;	
	var a = document.getElementById("selectType");
	var tempType = a.options[a.selectedIndex].text;
	var b = document.getElementById("selectGenreMusic");
	var tempGenreMusic = b.options[b.selectedIndex].text;
	var c = document.getElementById("selectGenreGeneral");
	var tempGenreGeneral = c.options[c.selectedIndex].text;

	if(tempType == "Book"){
		if(author == "Danielle Steel" || author == "danielle steel" || author == "Danielle steel" || author == "danielle Steel") {
			document.getElementById('alertBook').innerHTML = `
			<div class="alert alert-success">
  				<span class="glyphicon glyphicon-ban-circle"></span><strong>ERROR!  I do not want to save a book from ${author}.</strong> 
			</div>
			`
		} else {
			document.getElementById("books").innerHTML += `
				<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 panel">

				<a href="#" class="pop5">
				<img src="${img}" alt="${title}" class="img-responsive center-block">
				</a>
				
				<div class="modal fade" id="imagemodal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
				  <div class="modal-dialog">
				    <div class="modal-content">
				      <div class="modal-header">
						<h3>${title}</h3>
				      </div>
				      <div class="modal-body">
				        <img src="${img}" alt="${title}" class="img-responsive center-block">
				      </div>
				      <div class="modal-footer">

				      </div>
				    </div>
				  </div>
				</div>

					<div class="caption align">
						<h3>${title}</h3>
						<span>von <a href="#">${author}</a></span>
						<br>
						<span class="glyphicon glyphicon-star"></span>
						<span class="glyphicon glyphicon-star"></span>
						<span class="glyphicon glyphicon-star"></span>
						<span class="glyphicon glyphicon-star"></span>
						<span class="glyphicon glyphicon-star"></span>
						<span class="small">(980)</span>
					</div>
				</div>
			`
		}
		
	} else if(tempType == "DVD"){
		if(author == "Roland Emmerich" || author == "roland emmerich" || author == "Roland emmerich" || author == "roland Emmerich") {
			document.getElementById('alertDvd').innerHTML = `
			<div class="alert alert-success">
  				<span class="glyphicon glyphicon-ban-circle"></span><strong>ERROR! I do not want to save a movie from ${author}.</strong> 
			</div>
			`
		} else{
			document.getElementById("dvds").innerHTML += `
				<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 panel">
					<a href="#" class="pop5">
				<img src="${img}" alt="${title}" class="img-responsive center-block">
				</a>
				
				<div class="modal fade" id="imagemodal5" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
				  <div class="modal-dialog">
				    <div class="modal-content">
				      <div class="modal-header">
						<h3>${title}</h3>
				      </div>
				      <div class="modal-body">
				        <img src="${img}" alt="${title}" class="img-responsive center-block">
				      </div>
				      <div class="modal-footer">

				      </div>
				    </div>
				  </div>
				</div>
					<div class="caption align">
						<h3>${title}</h3>
						<span>von <a href="#">${author}</a></span>
						<br>
						<span class="glyphicon glyphicon-star"></span>
						<span class="glyphicon glyphicon-star"></span>
						<span class="glyphicon glyphicon-star"></span>
						<span class="glyphicon glyphicon-star"></span>
						<span class="glyphicon glyphicon-star"></span>
						<span class="small">(980)</span>
					</div>
				</div>
			`
		}
		
	} else if(tempType == "Comic"){
		document.getElementById("comics").innerHTML += `
		<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 panel">
			<a href="#" class="pop5">
				<img src="${img}" alt="${title}" class="img-responsive center-block">
				</a>
				
				<div class="modal fade" id="imagemodal5" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
				  <div class="modal-dialog">
				    <div class="modal-content">
				      <div class="modal-header">
						<h3>${title}</h3>
				      </div>
				      <div class="modal-body">
				        <img src="${img}" alt="${title}" class="img-responsive center-block">
				      </div>
				      <div class="modal-footer">

				      </div>
				    </div>
				  </div>
				</div>
				<h3>${title}</h3>
				<span>von <a href="#">${author}</a></span>
				<br>
				<span class="glyphicon glyphicon-star"></span>
				<span class="glyphicon glyphicon-star"></span>
				<span class="glyphicon glyphicon-star"></span>
				<span class="glyphicon glyphicon-star"></span>
				<span class="glyphicon glyphicon-star"></span>
				<span class="small">(980)</span>
			</div>
		</div>
	`
	} else{
		document.getElementById("cds").innerHTML += `
		<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 panel">
			<a href="#" class="pop3">
				<img src="${img}" alt="${title}" class="img-responsive center-block">
				</a>
				
				<div class="modal fade" id="imagemodal5" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
				  <div class="modal-dialog">
				    <div class="modal-content">
				      <div class="modal-header">
						<h3>${title}</h3>
				      </div>
				      <div class="modal-body">
				        <img src="${img}" alt="${title}" class="img-responsive center-block">
				      </div>
				      <div class="modal-footer">

				      </div>
				    </div>
				  </div>
				</div>
			<div class="caption align">
				<h3>${title}</h3>
				<span>von <a href="#">${author}</a></span>
				<br>
				<span class="glyphicon glyphicon-star"></span>
				<span class="glyphicon glyphicon-star"></span>
				<span class="glyphicon glyphicon-star"></span>
				<span class="glyphicon glyphicon-star"></span>
				<span class="glyphicon glyphicon-star"></span>
				<span class="small">(980)</span>
			</div>
		</div>
	`
	}

}

$(".pop1").on("click", function() {
   $('#imagepreview').attr('src', $('#imageresource').attr('${indexBooks.image}')); // here asign the image to the modal when the user click the enlarge link
   $('#imagemodal1').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
});

$(".pop2").on("click", function() {
   $('#imagepreview').attr('src', $('#imageresource').attr('${indexDvd.image}')); // here asign the image to the modal when the user click the enlarge link
   $('#imagemodal2').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
});

$(".pop3").on("click", function() {
   $('#imagepreview').attr('src', $('#imageresource').attr('${indexComic.image}')); // here asign the image to the modal when the user click the enlarge link
   $('#imagemodal3').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
});

$("pop4").on("click", function() {
   $('#imagepreview').attr('src', $('#imageresource').attr('${indexCd.image}')); // here asign the image to the modal when the user click the enlarge link
   $('#imagemodal4').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
});

$("pop5").on("click", function() {
   $('#imagepreview').attr('src', $('#imageresource').attr('${img}')); // here asign the image to the modal when the user click the enlarge link
   $('#imagemodal5').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
});