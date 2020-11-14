var inputs = document.querySelectorAll('.input');

function showFocus(){
    let parent = this.parentNode;
    parent.classList.add('focus');
}

function showBlur(){
    let parent = this.parentNode;
    if(this.value == ''){
        parent.classList.remove('focus');
    }
}

inputs.forEach(function(input){
    input.addEventListener('focus', showFocus);
    input.addEventListener('blur', showBlur);
});