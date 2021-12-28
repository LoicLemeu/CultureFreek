console.log("JS en route")

const typeBox = document.getElementById("type");
const bookForm = document.getElementById("bookForm");
const movieForm = document.getElementById("movieForm");
const songForm = document.getElementById("songForm");
const submitBtn = document.getElementById("submitBtn");

typeBox.addEventListener('change', () => {
    submitBtn.style.display = 'block';
    switch (typeBox.value) {
        case '' : 
            bookForm.style.display = 'none';
            movieForm.style.display = 'none';
            songForm.style.display = 'none';
            submitBtn.style.display = 'none';
            break;
        case 'book':
            bookForm.style.display = 'block';
            movieForm.style.display = 'none';
            songForm.style.display = 'none';
            break;
        case 'movie':
            bookForm.style.display = 'none';
            movieForm.style.display = 'block';
            songForm.style.display = 'none';
            break;
        case 'song':
            bookForm.style.display = 'none';
            movieForm.style.display = 'none';
            songForm.style.display = 'block'; 
            break;
    }
})