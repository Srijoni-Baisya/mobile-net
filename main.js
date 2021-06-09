Webcam.set({
    width:310,
    height:300,
    image_format:'png',
    png_quality:90,

    constraints:{
        facingMode:"environment"
    }
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

//part 1- take a snapshot
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}

//part 2 - check the ml5 version
console.log("ml5 version : ",ml5.version);

//part 3 - import the MobileNet model
classifier = ml5.imageClassifier('MobileNet',modelLoaded);

function modelLoaded(){
    console.log("Model Loaded !");
}

//part 4 - check function
function check(){
    img=document.getElementById("captured_image");
    classifier.classify(img,gotResult);
}

//part 5 - gotResult function, with error and results code
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("object_name").innerHTML=results[0].label;
    }
}