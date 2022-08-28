document.getElementById('rememberbutton').addEventListener("click", remember);
document.getElementById('showbutton').addEventListener("click", showMessage);

showMessage();

function remember() {
    let message = document.getElementById('messageinput').value;
    setCookie('username', message);
    showMessage();
}

function setCookie(cname, cvalue) {
    const d = new Date();
    d.setTime(d.getTime() + (5*24*60*60*1000));
    let expiration = "expires=" + d.toUTCString;
    document.cookie = cname + "=" + cvalue + ";" + expiration + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');

    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while(c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if(c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function showMessage() {
    const output = document.getElementById('message');
    output.textContent = getCookie('username');
}