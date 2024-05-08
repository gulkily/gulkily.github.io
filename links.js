// Get a reference to the container for the links
const linkContainer = document.getElementById('linkContainer');

// Sample links 
const commonLinks = [
    { text: "Dima's Page", url: "https://sirni4ek.github.io/" },
    { text: "Danya's Page", url: "https://danil357345.github.io/" },
    { text: "Solomiia's Page", url: "https://solomiia2098.github.io/" },
    { text: "Ilya's Page", url: "https://gulkily.github.io/" },
    { text: "Source Code", url: "https://github.com/gulkily/gulkily.github.io" }
];

// Function to create links
function createLinkElement(linkData) {
  const link = document.createElement('a'); 
  link.href = linkData.url; 
  link.textContent = linkData.text; 
  return link;
}

// Add the links to the page
commonLinks.forEach(linkData => {
    const linkElement = createLinkElement(linkData);
    linkContainer.appendChild(linkElement);

    // Add a space for readability
    linkContainer.appendChild(document.createTextNode(' '));
});
