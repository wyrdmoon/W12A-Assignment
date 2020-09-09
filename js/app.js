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

    }
}
function getFuntimes (){bored.getActivity();}
let bored = new BoredApi();
document.getElementById("funtimes").addEventListener("click", getFuntimes)