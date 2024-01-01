$(document).ready(() => {
    const name = $('#name');
    const username = $('#username');
    const avatar = $('#avatar');
    const repos = $('#repos');
    const followers = $('#followers');
    const following = $('#following');
    const profile = $('#profile-link');

    fetch('https://api.github.com/users/Nikolas-Marques-Silva')
        .then(response => response.json())
        .then(data => {
            name.text(data.name);
            username.text(data.login);
            avatar.attr('src', data.avatar_url);
            repos.text(data.public_repos);
            followers.text(data.followers);
            following.text(data.following);
            profile.attr('href', data.html_url);
        })
})