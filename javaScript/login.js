function getXMLHttpRequest() 
{
    var xhr = null;
    
    if (window.XMLHttpRequest || window.ActiveXObject) 
    {
        if (window.ActiveXObject) 
        {
            try 
            {
                xhr = new ActiveXObject("Msxml2.XMLHTTP");
            } 
            catch(e)
            {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
        } 
        else 
        {
            xhr = new XMLHttpRequest(); 
        }
    } 
    else 
    {
        alert("Votre navigateur ne supporte pas l'objet XMLHTTPRequest...");
        return null;
    }
    
    return xhr;
}


function requestLogin()
{
    var xhr = getXMLHttpRequest();
    var loginUser = encodeURIComponent(document.getElementById('username').value);
    var password = encodeURIComponent(document.getElementById('userpwd').value);
    
    xhr.addEventListener('readystatechange', function()  
                                            {
                                                if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) 
                                                {
                                                    //callback(xhr.responseText);
                                                     document.getElementById('fileContent').innerHTML = '<span>' + xhr.responseText + '</span>';
                                                }
                                            });
    xhr.open("POST", "../htbin/login.py", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send('username=' + loginUser + '&userpwd=' + password);
}

document.getElementById('login').addEventListener('focus',function()
                                                            {
                                                                requestLogin();
                                                            }
                                                 )
