//Zastosowaliśmy algorytm BFS do przeszukiwania drzewa binarnego w szerz.
//Wybraliśmy go ze względu na prostotę zastosowania jak i na to że osiąga on taką samą złożonośc jak algorytm DFS.
//Drzewo binarne wymaga najpierw postowania elementu kluczy aby moc sie miedzy nimi poruszac
//Plik w jsonie sam numeruje elementy (klucze) które zawiera co pozwala nam bez sorotwania wykkonać przejście  w szerz po danych danych do sortowania
//Przyklad wykorzystania numeracji "json[i].keys[d]"

class BinaryTreeSearchingBSF {//Deklaruję klasę do której pobieram dwa argumenty do konstruktora.
	//Argumentami są dane do przeszukania w json i wyszukiwany klucz którego dane chcemy uzyskać
    constructor(file, keyword) {
        this.file = file;  	//plik
        this.keyword = keyword; 				// szukany klucz
    }
}
const Searching = function (file, keyword){						//file=plik json ktory otwieram w celu 
	const json = require(file); 								//Używam globalnej funkcji require ktora synchronizuje plik JSON w Node.
	let result = [];	
	let testo = [];												//Tablica do ktorej zbieram wyniki 
	let timerStart = new Date(); 								//Start mierzenia czasu algorytmu
	for (let element = 0; element < json.length; element++)
	{															//Petla przeszukuje wszystkie pozycje ktore sa juz ponumerowane w jsonie skad mamy numery wezlow
		if(json[element].keys[0]==keyword) 						//Dlugosc petli osiagamy dzieki json.lenth co spradza wielkosc pliku
		{	result.push(json[element].value);}
	}															//jesli klucz pasuje umieszczamy value w tablicy zawierajacej wyniki wyszukiwania
	let timerStop = new Date(); 								//Zakończenie  pomiaru czasu algorytmu
	let timerValue = (timerStop.getTime() - timerStart.getTime()); 									 //Przeliczenie czasu poczatkowego i kon
	
	return JSON.stringify({"result":result,"query":keyword,"time":timerValue}); //zwrocenie wynikow
	
}
module.exports.search = Searching;								//module.exports pozwala na wyexportowanie danych z tego pliku do pliku zawierającego serwer
//console.log(Searching("./Dane.json", "Olga"));
