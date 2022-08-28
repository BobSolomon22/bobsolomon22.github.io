function bigger() {
    document.getElementById('textarea').style.fontSize = '24px';
}

function radioHandler() {
    let radios = document.querySelectorAll('input[type="radio"][name="styleRadio"]');
    alert('WHO DARES MESS WITH MY RADIO BUTTONS?');
    for(const element of radios) {
        if(element.id == 'fancy' && element.checked == true) {
            fancyShmancy();
        }
        else if(element.id == 'boring' && element.checked == true) {
            boringBetty();
        }
    }
}

function fancyShmancy() {
    let ta = document.getElementById('textarea');
    ta.style.fontFamily = 'Brush Script MT, Brush Script Std, cursive';
    ta.style.fontWeight = 'bold';
}

function boringBetty() {
    let ta = document.getElementById('textarea');
    ta.style.fontFamily = 'initial';
    ta.style.fontWeight = 'normal';
}

function moo() {
    let ta = document.getElementById('textarea');
    ta.value = ta.value.toUpperCase();
    let parts = ta.value.split(".");
    for(let index = 0; index < parts.length - 1; index++) {
        parts[index] = parts[index] + '-Moo';
    }
    console.log(parts);
    ta.value = parts.join('.');
}