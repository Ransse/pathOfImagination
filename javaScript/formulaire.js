var firstName = document.getElementById("firstname");
var lastName = document.getElementById("lastname");
var birth = document.getElementById("birthdate");
var userName = document.getElementById("username");
var password = document.getElementById("userpwd");
var email =  document.getElementById("useremail");
document.getElementById("submit").disabled = true;

var firstNameB = false;
   var lastNameB = false;
   var birthB = false;
   var userNameB = false;
   var passwordB = false;
   var emailB = false;


function ableSubmit()
{
   if (firstNameB && lastNameB && birthB && userNameB && passwordB && emailB)
      document.getElementById("submit").disabled = false;
    else
        document.getElementById("submit").disabled = true;
}

function surligne(champ,teste){
  if(teste===true){
    champ.style.background="#F08080";
  }
  else{
    champ.style.background="#C2F732";
  }
}



function check_firstName(champ)
{
   if(champ.value.length != "")
   {
      surligne(champ,false);
      document.getElementById('errorFirstname').style.display = 'none';
      return true;
   }
   else
   {
      surligne(champ,true);
      document.getElementById('errorFirstname').style.display = 'block';
      return false;
   }
}



function check_lastName(champ)
{
   if(champ.value.length < 1)
   {
      surligne(champ,true);
      document.getElementById('errorLastname').style.display = 'block';
      return false;
   }
   else
   {
      surligne(champ,false);
      document.getElementById('errorLastname').style.display = 'none';
      return true;
   }
}



function check_birth(champ)
{
   var day = parseInt(champ.value.substring(0,2));
   var month = parseInt(champ.value.substring(3,5));
   var year = parseInt(champ.value.substring(6));

   date = new Date(year, month-1, day);

   if( !isNaN(day) && champ.value.charAt(2) === '/' && !isNaN(month) && champ.value.charAt(5) === '/' && !isNaN(year))
   {
        surligne(champ,false);
        document.getElementById('errorBirthdate').style.display = 'none';
        return true;
   }
  
   surligne(champ,true);
   document.getElementById('errorBirthdate').style.display = 'block';
   return false;
   
}

function check_pseudo(champ)
{
   if(champ.value.length < 6)
   {
      surligne(champ,true);
      document.getElementById('errorUsername').style.display = 'block';
      return false;
   }
   else
   {
      surligne(champ,false);
      document.getElementById('errorUsername').style.display = 'none';
      return true;
   }
}



function check_password(champ)
{
   var min = false;
   var maj = false;
   var num = false;
   var taille = false;

   if(/[a-z]/.test(champ.value))
      min = true;

   if(/[A-Z]/.test(champ.value))
      maj = true;

   if(/[0-9]/.test(champ.value))
      num = true;

   if(champ.value.length >= 8)
      taille = true;
   
   if (min && maj && num && taille)
   {
      surligne(champ,false);

      document.getElementById('errorPassword').style.display = 'none';
      return true;
   }

      surligne(champ,true);

      document.getElementById('errorPassword').style.display = 'block';
      return false;
}



function check_mail(champ)
{
   var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
  if(regex.test(champ.value))
  {
      surligne(champ,false);
      document.getElementById('errorUsermail').style.display = 'none';
      return true;
  }

      surligne(champ,true);
      document.getElementById('errorUsermail').style.display = 'block';
      return false;
}




firstName.addEventListener('keyup', function()
                                    {
                                      firstNameB = check_firstName(firstName);    
                                      ableSubmit();
    
                                    },true);

lastName.addEventListener('keyup', function()
                                   {
                                      lastNameB = check_lastName(lastName); 
                                      ableSubmit();
                                   },true);


userName.addEventListener('keyup', function()
                                   { 
                                      userNameB = check_pseudo(userName);
                                       ableSubmit();
                                   },true);


password.addEventListener('keyup', function()
                                   { 
                                     passwordB = check_password(password);  
                                     ableSubmit();
                                   },true);



email.addEventListener('keyup', function()
                                { 
                                  emailB = check_mail(email);
                                  ableSubmit();
                                },true);


birth.addEventListener('keyup', function()
                                { 
                                    birthB = check_birth(birth);
                                    ableSubmit();
                                },true);



