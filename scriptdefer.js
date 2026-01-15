

jQuery(document).ready(function() {
    const fullUrl = new URL(window.location.href);

    if (fullUrl.search.includes('openurl')) {
        primoArgs = fullUrl.search.substring(1);
        primoUrl = "https://search.library.oregonstate.edu/discovery" + primoArgs;
    }
    else if (fullUrl.search.includes('docid')) {
        primoArgs = fullUrl.search.substring(1);
        primoUrl = "https://search.library.oregonstate.edu/discovery" + primoArgs;
    } else {
            primoUrl = "no primo url detected";
    }
 console.log(primoUrl);
    document.querySelector('.source-url').value = primoUrl;
});

