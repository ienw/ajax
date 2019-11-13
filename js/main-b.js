// Create function 'showImages' which
// loads images.json which has links to images as an array.

// create a loop which builds the following HTML from every image in the array:
const ul = document.querySelector('ul');

const getImages = (result) => {
    for(let i=0; i < result.length; i++){
        ul.innerHTML += `
        <li>
            <figure>
                <a href="img/original/${result[i].mediaUrl}"><img src="img/thumbs/${result[i].mediaUrl}"></a>
                <figcaption>
                    <h3>${result[i].mediaTitle}</h3>
                </figcaption>
            </figure>
        </li>`;
    }
}
const getFetchData = async (url) => {
    const response = await fetch(url);
    const result = await response.json();
    getImages(result);
};

getFetchData('images.json');



// After the loop print the HTML into <ul> element using innerHTML.
