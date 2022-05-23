
Webcam.set({
    width:300,
    height:300,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("webcam");
Webcam.attach(camera);

function Capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='picture' src="+data_uri+">"
    })
}
console.log("ml5 version", ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ttLzTR_V7/model.json",modelloaded)

function modelloaded(){
    console.log("model loaded")
}

function Check()
{
    image=document.getElementById("picture");
    classifier.classify(image,gotResult);
}

function gotResult(error,results){
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result1").innerHTML=results[0].label;
        document.getElementById("result2").innerHTML=results[0].confidence.toFixed(2);




    }
}















