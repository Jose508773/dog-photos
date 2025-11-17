let showDogPhoto = document.getElementById('showDogPhoto');
let newDogPhoto = document.getElementById('newDogPhoto');
async function dogPhoto() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        
        const data = await response.json();

        showDogPhoto.src = data.message;

        /*
        console.log(data);                 // Log the entire response   
        console.log(data.message);         // Log just the image URL
        console.log(data.status)
        */

        return data

    }
    catch (error) {
        console.error('Error:', error);
    }
}


document.addEventListener('DOMContentLoaded', dogPhoto);

newDogPhoto.addEventListener('click', dogPhoto);
//dogPhoto();