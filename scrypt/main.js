async function searchGit(form) {
    let str = form.schString.value;
    let alert = 'Поле является обязательным';
    document.getElementById('resultSch').innerHTML = '';
    if (str == ''){
        document.getElementById('errStr').innerText = alert;
        document.getElementById('errStr').classList.add('errLabel');
        document.getElementById('schString').classList.add('errBox');
    }
    else if (str !== '') {
        document.getElementById('errStr').innerText = '';
        document.getElementById('schString').classList.remove('errBox');
        let url = 'https://api.github.com/search/repositories?q='+str;
        let response = await fetch(url)
        let commits = await response.json();
        if (commits.total_count == 0)
        document.getElementById("resultSch").innerText='Ничего не найдено';
        else{
            for (let i = 0; i<10; i++){
                let newDiv = document.createElement('div');
                newDiv.innerHTML = '<div class="flexResult"><div class="itemTitle"><div><h2><a href="'+commits.items[i].svn_url+'" target="_blank">'+commits.items[i].name+'</a></h2></div><div>'+commits.items[i].created_at+'</div></div><div>'+commits.items[i].description+'</div><div>'+commits.items[i].owner.login+'</div></div>'//;
                document.getElementById("resultSch").append(newDiv);
            }
        }
       
}
return false;
}
