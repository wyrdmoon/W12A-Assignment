class BoredApi {
   content = ""; 
    
   
    getActivity(){
                      
        let ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             let randomActivity = JSON.parse(this.responseText);
             document.getElementById("activity").innerHTML = randomActivity.activity;
         } else if (this.readyState !=4) {
             document.getElementById("activity").innerHTML = "LOODING!";
         } else {
             document.getElementById("activity").innerHTML = "Error!!"
         }

        }

        ajax.open ("GET", "http://www.boredapi.com/api/activity/", true);
        ajax.send();
        ajax.open ("GET", "http://www.boredapi.com/api/activity?participants=1", true);
        ajax.send();
        ajax.open ("GET", "http://www.boredapi.com/api/activity?price=0.0", true);
        ajax.send();
        ajax.open ("GET", "", true);
        ajax.send();

    }
}
function getFuntimes (){bored.getActivity();}
let bored = new BoredApi();
document.getElementById("funtimes").addEventListener("click", getFuntimes)
document.getElementById("funtimes2").addEventListener("click", getFuntimes)
document.getElementById("funtimes3").addEventListener("click", getFuntimes)
document.getElementById("funtimes4").addEventListener("click", getFuntimes)