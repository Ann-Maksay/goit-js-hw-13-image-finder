import './styles.css';
import galleryTemp from './templates/galleryTemp.hbs';
import fetchService from './js/apiService';

const refs = {
    formRef: document.querySelector('.search-form'),
    inputRef: document.querySelector('.search-form'),
    showMoreRef: document.querySelector('.show-more'),
    galleryRef: document.querySelector('.gallery'),
}

refs.formRef.addEventListener('submit', submitForm);
refs.showMoreRef.addEventListener('click', fetchFunction);


function submitForm(event) {
    event.preventDefault();
    const form = event.currentTarget;
    fetchService.query = form.elements.query.value;
    
    refs.galleryRef.innerHTML = '';
    fetchService.resetPage();

    fetchFunction();
    refs.showMoreRef.classList.remove('is-hidden');
}

function fetchFunction() {
    fetchService.fetchImg().then(data => {
        return createNode(data.hits)
    });
}

function createNode(data) {
    const gallery = galleryTemp(data);

    refs.galleryRef.insertAdjacentHTML('beforeend', gallery);
}
