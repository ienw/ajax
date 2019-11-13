// Create function 'showImages' which
// loads images.json which has links to images as an array.

// create a loop which builds the following HTML from every image in the array: 


const ul = document.querySelector('ul');

const showImages = async (code) => {
    const mediaArray = await code;
    mediaArray.forEach(image => {
        const li = document.createElement('li');
        const figure = document.createElement('figure');
        const a = document.createElement('a');
        const figcap = document.createElement('figcap');
        const h3 = document.createElement('h3');
        const img = document.createElement('img');
        a.href = `img/original/${image.mediaUrl}`;
        a.appendChild(img);
        img.src = `img/thumbs/${image.mediaUrl}`;
        figure.appendChild(a);
        figure.appendChild(figcap);
        figcap.appendChild(h3);
        h3.innerHTML = image.mediaTitle;
        li.appendChild(figure);
        ul.appendChild(li);
    });
}
const getFetchData = async (url) => {
    const response = await fetch(url);
    const result = await response.json();
    showImages(result);
};


getFetchData('images.json');


// Make the above HTML by using DOM methods.
// Create elements with createElement()
// Add attributes with setAttribute()
// Add elements with appendChild
// When the above HTML is ready append it to the <ul> element
