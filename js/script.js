let lizard = [
    {image: 'https://i.ibb.co/zSpS5gg/paper.png' },
    {image: 'https://i.ibb.co/2SXF7yQ/rock.png' },
    {image: 'https://i.ibb.co/Y8c6RGN/scissors.png' }
]
let spoke = [
    {image: 'https://i.ibb.co/VNTqGwn/paper-mirror.png'},
    {image: 'https://i.ibb.co/gPY1wFx/scissors-mirror.png'},
    {image: 'https://i.ibb.co/bXDrJtg/rock-mirror.png'}
]

function getRandomElementOne(arr) {
    let randIndexOne = Math.floor(Math.random() * lizard.length);
    return arr[randIndexOne];
}

function getRandomElementTwo(arr) {
    let randIndexTwo = Math.floor(Math.random() * spoke.length);
    return arr[randIndexTwo];
}

let button = document.querySelector('.button');
let image = document.querySelector('.image-one');
let image_mirror = document.querySelector('.mirror')


button.addEventListener('click', function() {
    let randomElementOne = getRandomElementOne(lizard);
    let randomElementTwo = getRandomElementTwo(spoke);
    smoothly(image, 'src', randomElementOne.image)
    smoothly(image_mirror, 'src', randomElementTwo.image)
})

