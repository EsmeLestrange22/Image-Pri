function done() {
   iput= document.getElementById("iput").value;   
   document.getElementById("pic").src= iput;
   document.getElementById("iput").value = "";
}
console.log("ml5 Version-", ml5.version)
classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/tj8UtohSZ/model.json', modelLoaded)

function modelLoaded() {
   console.log("Your Model Has Been Successfully Loaded");
};
function compare_now() {
   image= document.getElementById("pic");
   classifier.classify(image, gotResult);
}
function gotResult(error, results) {
   if(error) {
      console.error(error);
   }
   else {
      console.log(results);
      document.getElementById("obj_name").innerHTML = results[0].label
        document.getElementById("obj_name").style.display= "inline-block"
        per = results[0].confidence.toFixed(3);
        percentage = per * 100;
        document.getElementById("acc").innerHTML = percentage + "%"
        document.getElementById("acc").style.display= "inline-block"
   }
}