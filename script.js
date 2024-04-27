function search() {
    const search = document.querySelector('.search');
    const sbody = document.querySelector('.sbody').value;

    if(sbody == ""){
        search.classList.remove('active')
    } else{
        search.classList.add('active');
    }
}