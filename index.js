// JS File

document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('github-form');
    const searchField = document.getElementById('search');
    const searchBtn = document.getElementById('searchBtn');
    const userList = document.getElementById('user-list');
    const userHead = document.getElementById('user-header');
    const repoList = document.getElementById('repo-list');
    const repoHead = document.getElementById('repo-header');

    searchBtn.disabled = false;

    function fetchUsers(userE) {
        const URL = `https://api.github.com/search/users?q=${userE}`;
        clearForm();
        fetch(URL, {headers:{'Accept': 'application/vnd.github.v3+json'}})
            .then(resp => resp.json())
            .then(results => {
                userHead.classList.remove('hidden');
                results.items.forEach(user => renderUser(user));
            })
            .catch(err => console.log(err));
    }
    
    function renderUser(user) {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${user.login}: </strong>Github: ${user.url} `;
        const avatar = document.createElement('img')
        li.style.cursor = "pointer"
        avatar.src = user.avatar_url
        avatar.style.width = "20px"
        li.innerHTML = `<strong>${user.login}: </strong>Github: ${user.url} `;
        li.addEventListener('click', () => fetchRepos(user.login));
        li.appendChild(avatar);
        userList.appendChild(li);
    }
    
    function fetchRepos(repoE) {
        const URL = `https://api.github.com/users/${repoE}/repos`;
        clearForm();
        fetch(URL, {headers:{'Accept': 'application/vnd.github.v3+json'}})
            .then(resp => resp.json())
            .then(results => {
                repoHead.classList.remove('hidden');
                results.forEach(repo => renderRepo(repo));
            })
            .catch(err => console.log(err));
    }
    
    function renderRepo(repo) {
        const li = document.createElement('li');
        const a = document.createElement('a')
        a.href = repo.html_url
        a.target = "_blank"
        a.innerText = "Link to Repository"
        li.innerText = repo.name + " - "
        li.appendChild(a)
        repoList.appendChild(li)
    }
    
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (searchField.value !== "") fetchUsers(searchField.value);
    })

    function clearForm() {
        userList.innerHTML = '';
        repoList.innerHTML = '';
        userHead.classList.add('hidden');
        repoHead.classList.add('hidden');
    }
});

/* Attributions:

Viewing and using code from these user's public
repositories have helped me write the code in this file.  I have 
made some changes to the files in terms of document content loading,
using fetch instead of axios, and have implemented a dedicated, catch-all
clearForm(), and made other changes with respect to some other of the
solutions I viewed.  However, starting from these solutions have 
definitely helped this solution which is why I attribute them here 

https://github.com/ekhu94/js-github-project
https://github.com/dwisecar/js-github-project
https://github.com/dpolcari18/js-github-project/tree/master/js

There were no license files in these repos at the time I accessed them
on 4/15/2021.

*/

