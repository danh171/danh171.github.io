/* Style link to currently active page */
const url = document.URL;
const slug = url.slice(url.indexOf("/", 8)).startsWith("/blog/") ? "/blog/" : "/";
const currentLinks = document.querySelectorAll('a[href="' + slug + '"]');
currentLinks.forEach((link) => (link.className += " current-link"));
