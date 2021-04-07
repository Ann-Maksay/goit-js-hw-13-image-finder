const key = '21043240-eb6fd9f55356396981a7f66ac';

export default {
    searchQuery: '',
    page: 1,
    fetchImg() {
        const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${key}`;

        return fetch(url).then(res => {
            this.page += 1;
            return res.json();
        });
    },

    resetPage() {
        this.page = 1;
    },

    get query() {
        return this.searchQuery;
    },
    set query(newQuery) {
        this.searchQuery = newQuery;
    }
} 