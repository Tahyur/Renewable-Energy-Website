// Get the modal
var modal = document.getElementById('myModal');
var modal2 = document.getElementById('myModal11');


// Get the image and insert it inside the modal - use its "alt" text as a caption

var img = document.getElementById('myImg');
var img1 =document.getElementById('myImg1');
var img2 =document.getElementById('myImg2');
var img3 =document.getElementById('myImg3');
var img4 =document.getElementById('myImg4');
var img5 =document.getElementById('myImg5');
var img6 =document.getElementById('myImg6');


var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var modalImg2 = document.getElementById("img0111");
var captionText2 = document.getElementById("caption11");


    img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    }
    img1.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    }
    img2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    }
    img3.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    }
    img4.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    }
    img5.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    }
    img6.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    }
    

    
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close11")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
span2.onclick = function() { 
    modal2.style.display = "none";
}
console.log(img1);