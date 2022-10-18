var Name="https://teachablemachine.withgoogle.com/models/-9rXpscXe/model.json";
function StartClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    Classify=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/-9rXpscXe/model.json', modelReady);
}

function modelReady(){
    Classify.classify(gotResults);
}

function gotResults(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("result_label").innerHTML= "I can hear " + results[0].label;
        document.getElementById("result_accuracy").innerHTML="Accuracy " + results[0].confidence.toFixed(3);
         
        img= document.getElementById("alien1_image");
        img2= document.getElementById("alien2_image");
        img3= document.getElementById("alien3_image");
        img4= document.getElementById("alien4_image");

        if(results[0].label=="Snapping"){
            img.src= 'aliens-01.gif';
            img2.src= 'aliens-02.png';
            img3.src= 'aliens-03.png';
            img4.src= 'aliens-04.png';
        }
        else if(results[0].label=="Clapping"){
            img.src= 'aliens-01.png';
            img2.src= 'aliens-02.gif';
            img3.src= 'aliens-03.png';
            img4.src= 'aliens-04.png';
        }
        else  if(results[0].label=="Drum Sounds"){
            img.src= 'aliens-01.png';
            img2.src= 'aliens-02.png';
            img3.src= 'aliens-03.gif';
            img4.src= 'aliens-04.png';
        }
        else  if(results[0].label=="Background Noise"){
            img.src= 'aliens-01.png';
            img2.src= 'aliens-02.png';
            img3.src= 'aliens-03.png';
            img4.src= 'aliens-04.gif';
        }
        else{
            img.src= 'aliens-01.png';
            img2.src= 'aliens-02.png';
            img3.src= 'aliens-03.png';
            img4.src= 'aliens-04.png';
        }

    }


}