window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

//------DESDE AQUÍ CONTINUE CON LAS VALIDACIONES DEL FORMULARIO -------//    
    let form = document.querySelector('.form');
    form.title.focus();
    form.addEventListener('submit', (e) => {
        
        let errors = [];

        let title = document.querySelector('#title');
        let rating = document.querySelector('#rating');
        let awards = document.querySelector('#awards');
        let release_date = document.querySelector('#release_date');
        let length = document.querySelector('#length');
        let genre_id = document.querySelector('#genre_id');

        if (title.value == '') {
            errors.push('El campo titulo no puede estar vacío');
            title.classList.add('is-invalid');
        } else {
            title.classList.add('is-valid');
            title.classList.remove('is-invalid');
            form.rating.focus();
        };
        if (rating.value <= 0 || rating.value > 10.0) {
            errors.push('El campo calificación no puede ser menor a cero ni mayor a 10');
            rating.classList.add('is-invalid');
        } else {
            rating.classList.add('is-valid');
            rating.classList.remove('is-invalid');
            form.awards.focus();
        };
        if (awards.value <= 0 || awards.value > 10) {
            errors.push('El campo premios no puede ser menor a cero ni mayor a 10');
            awards.classList.add('is-invalid');
        } else {
            awards.classList.add('is-valid');
            awards.classList.remove('is-invalid');
            form.release_date.focus();
        };
        if (release_date.value == "") {
            errors.push('El campo fecha de creación no puede estar vacio');
            release_date.classList.add('is-invalid');
        } else {
            release_date.classList.add('is-valid');
            release_date.classList.remove('is-invalid');
            form.length.focus();
        };
        if (length.value < 60 || length.value > 360) {
            errors.push('El campo duración no puede ser menor a 60 ni mayor a 360 minutos');
            length.classList.add('is-invalid');
        } else {
            length.classList.add('is-valid');
            length.classList.remove('is-invalid');
            form.genre_id.focus();
        };
        if (genre_id.value == '') {
            errors.push('El campo género no puede estar vacío');
            genre_id.classList.add('is-invalid');
        } else {
            genre_id.classList.add('is-valid');
            genre_id.classList.remove('is-invalid');
        };
        
        //Aquí controlo que es lo que debo hacer si hay o no errores en el formulario

        if (errors.length > 0) {
            e.preventDefault();
            let ulErrors = document.querySelector('.errores');
            ulErrors.classList.add('alert-warning');
            ulErrors.innerHTML = '';
            for (let i = 0; i < errors.length; i++) {
                ulErrors.innerHTML += `<li >  ${errors[i]} </li>`;
            };
        }else{
            alert('La validación fué exitosa')
            form.submit();
        }

    });


}