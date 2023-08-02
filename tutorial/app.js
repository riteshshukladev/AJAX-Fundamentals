document.getElementById('btn-2').addEventListener('click',loadusers);
function loadusers(){

  var xhr = new XMLHttpRequest();
    xhr.open('GET','index.json',true);
    xhr.onload =function(){
        if(this.status==200){
            var user=JSON.parse(this.responseText);
            
            if(Array.isArray(user)){

                var output =''
                user.forEach((obj) =>{
                    console.log(obj.id,obj.email,obj.name);
                    output +=`<ul>
                    <li>${obj.id}</li>
                    <li>${obj.name}</li>
                    <li>${obj.email}</li>
                    </ul>`
                    
                });
                document.getElementById('users').innerHTML=output;

            }
                else{
                    console.log('Invalid response data format: Expected an array.')
                }
            }
            else{
                console.log('Request failed with status:', xhr.status);
            }
        };

        xhr.send();
 }

// 
document.getElementById('btn-1').addEventListener('click',loaduser);

function loaduser(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET','index.json',true);
    xhr.onload =function(){
        if(this.status==200){
            var user=JSON.parse(this.responseText);
            console.log(user);
            var output =''
            output +='<ul>'+
            '<li>'+user[0].id+'</li>'+
            '<li>'+user[0].name+'</li>'+
            '<li>'+user[0].email+'</li>'+
            '</ul>';
            document.getElementById('user').innerHTML=output;
        }
    }

    xhr.send();
}