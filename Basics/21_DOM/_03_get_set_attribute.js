// Get the elements
const h1Element = document.getElementsByTagName('h1')[0].attributes.title
console.log(h1Element)
console.log(h1Element.value)
const h1TitleId = document.querySelector('h1').id
const h1TitleClass = document.querySelector('h1').className
console.log(h1TitleId)
console.log(h1TitleClass)
document.querySelector('h1').className = 'header-class-edited'
document.querySelector('h1').id = 'header-id-edited'

const imageElement = document.querySelector('#mainImage');
const linkElement = document.querySelector('#myLink');
const userInfoElement = document.querySelector('#userInfo');
const changeButton = document.querySelector('#changeButton');

// Get the span elements that will display current attribute details
const currentImageSrc = document.querySelector('#currentImageSrc');
const currentLinkHref = document.querySelector('#currentLinkHref');
const currentUserId = document.querySelector('#currentUserId');
const currentCustomRole = document.querySelector('#currentCustomRole');

// Function to update the displayed information
function updateAttributes() {
    // Access the current values of different attributes
    const imageSrc = imageElement.getAttribute('src');
    const linkHref = linkElement.getAttribute('href');
    const userId = userInfoElement.getAttribute('data-user-id');
    const productName = userInfoElement.getAttribute('data-product-name');
    const linkRole = linkElement.getAttribute('custom-role');
    const userRole = userInfoElement.getAttribute('custom-role');
    const buttonCustomData = changeButton.getAttribute('custom-data');

    currentImageSrc.textContent = imageSrc;
    currentLinkHref.textContent = linkHref;
    currentUserId.textContent = userId + ' (Product: ' + productName + ')';
    currentCustomRole.textContent = 'Link Role: ' + linkRole + ' | User Role: ' + userRole + ' | Button Custom Data: ' + buttonCustomData;
}

// Initially update the attributes when the page loads
updateAttributes();

// Add event listener for the button to modify attributes
changeButton.addEventListener('click', function () {
    // Modify the 'src' and 'alt' attributes of the image
    imageElement.setAttribute('src', 'https://dummyimage.com/hd1080');
    imageElement.setAttribute('alt', 'Updated Placeholder Image');

    // Modify the 'href' attribute of the link
    linkElement.setAttribute('href', 'https://www.new-url.com');

    // Modify the custom data attributes
    userInfoElement.setAttribute('data-user-id', '67890');
    userInfoElement.setAttribute('data-product-name', 'Updated Gadget Y');

    // Modify a non-standard custom attribute
    userInfoElement.setAttribute('custom-role', 'admin');

    // Modify the 'title' attribute of the button
    changeButton.setAttribute('title', 'Attributes have been changed!');

    // Modify the custom attribute of the button
    changeButton.setAttribute('custom-data', 'button2');

    // Update the displayed information with the new attribute values
    updateAttributes();
});
