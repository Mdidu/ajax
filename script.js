//requête AJAX
var xhttp = new XMLHttpRequest();

//partie à adapter jusqu'à ..
xhttp.onreadystatechange = function () {
    //test si la requête à bien été envoyé (4) et bien été chargé si l'on met 200
    if(this.readyState === 4 && this.status === 200){
        // document.getElementById('main').innerHTML = this.responseText;
        var text = this.responseText;
        var text2 = JSON.parse(text);
        //alert(text2.name);
    }
};
// true = asynchrone
xhttp.open("GET", "ajax.php?name=robert", true);
// .. ici
xhttp.send();
