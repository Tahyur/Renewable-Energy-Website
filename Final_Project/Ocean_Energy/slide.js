var slideIndex = 1;
showpic(slideIndex);

/*************************For advantages.html***************************/


/************ when User Clicks on Next or Previous Buttons *********/

function nextappli(n)
{
  showpic(slideIndex += n);
}

function showpic(n)
{
  var i;
  
  var y = document.getElementsByClassName("text3");
  var z = document.getElementsByClassName("text4");

  if (n > y.length) //x.length= how many same classes are associated with this particular element.
  {slideIndex = 1}

  if (n < 1)
  {slideIndex = y.length}

  for (i = 0; i < y.length; i++)
  {
     
     y[i].style.display = "none";
     z[i].style.display = "none";
  }
  
  y[slideIndex-1].style.display = "block";
  z[slideIndex-1].style.display = "block";

}

