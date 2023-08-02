document.getElementById('btn').addEventListener('click', loadData);

function loadData() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users', true);
    xhr.onreadystatechange = function() {
        if(this.readyState==4 && this.status==200){
            console.log(this.responseText);
            var users = JSON.parse(this.responseText);
            var output = '';
            output +=`<h1>github Users</h1>`
            for(var i in users){
                output += `<div class="user">
                <img src="${users[i].avatar_url}" width="70" height="70">
                <ul>
                    <li>ID: ${users[i].id}</li>
                    <li>Login: ${users[i].login}</li>
                    </ul>
                    </div>`
            }
            document.getElementById('users').innerHTML = output;
        }
    }
    xhr.send();
}