var slideIndex = 1;
showpic(slideIndex);

/*************************For application.html***************************/

/************ when User Clicks on Next or Previous Buttons *********/
function next(n)
{
    showpic(slideIndex+=n);
    
}

function showpic(n)
{
  var i;
  var x = document.getElementsByClassName("slides"); // Identifies the element with class name
  var y = document.getElementsByClassName("text1");
  var z = document.getElementsByClassName("text2");
    
    
  if (n > x.length) //x.length= how many same classes are associated with this particular element.
  {slideIndex = 1}

  if (n < 1)
  {slideIndex = x.length}

  for (i = 0; i < x.length; i++)
  {
      
     x[i].style.display = "none";  //Hides the images
     y[i].style.display = "none";
     z[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block"; // shows the image starting from index value=0, x[0]=first picture.
  y[slideIndex-1].style.display = "block";
  z[slideIndex-1].style.display = "block";

}

