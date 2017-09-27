//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_regexp_test2
<!DOCTYPE html>
<html>
<body>

<p>The test() method returns true if it finds a match, otherwise it returns false.</p>
<p>Click the button to search a string for the character "e".</p>


<button onclick="Saisie()">C'est parti</button>
<p id="demo"></p>

<script>


   function Saisie() 
{
       var chiffre1 = prompt("Saisissez un premier nombre entier :", "")
       var chiffre2 = prompt("Saisissez un deuxième nombre entier :", "")
       
       alert('L addition de nombre est égale à : '+(parseInt(chiffre1)+parseInt(chiffre2) ) );
       alert('Sinon c est une concaténation : '+(chiffre1+chiffre2));
	
}







</script>

</body>
</html>
