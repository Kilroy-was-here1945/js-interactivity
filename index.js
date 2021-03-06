console.log('hello world')

var message = document.querySelector('#message')


function addMovie(event){
    event.preventDefault()
    let inputField = document.querySelector('input')
    let movie = document.createElement('li')

    let movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)

    document.querySelector('ul').appendChild(movie)
    inputField.value = ''
    movie.appendChild(movieTitle)
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'x'

    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    
}  

function crossOffMovie(event) {
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked')){
        message.textContent = 'Movie watched'
    } else {
        message.textContent = 'Movie added back!'
    }
}
function deleteMovie(event){
    event.target.parentNode.remove() 
    message.textContent = 'deleted movie'
}

document.querySelector('form').addEventListener('submit', addMovie)

