window.addEventListener('click', () => {
    if (document.getElementById('joker')) {
        return;
    }

    // create joker
    const search = document.querySelector("[aria-label='Search…']");
    if (!search) {
        return;
    }

    let joker = document.createElement('img');
    joker.src = chrome.runtime.getURL('img/joker.svg');
    joker.style.padding = '0.5rem';
    joker.style.height = '1.5rem';
    joker.style.cursor = 'pointer';
    joker.setAttribute('id', 'joker');
    joker.setAttribute('title', 'Joker');
    joker.setAttribute('aria-label', 'Joker');
    joker.addEventListener('click', () => {
        const inputText = document.querySelectorAll(".copyable-text.selectable-text[contenteditable='true']")[1];

        const request = new XMLHttpRequest();
        request.open('GET', 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist&format=txt');
        request.addEventListener('load', () => {
            if (request.status >= 200 && request.status < 300) {
                inputText.innerHTML = request.responseText;
                inputText.dispatchEvent(new Event('input', {bubbles: true}));
                const send = document.querySelector("[data-icon='send']").parentElement;
                send.click();
            } else {
                console.warn(request.statusText, request.responseText);
            }
        });
        request.send();
    });

    // append joker
    const parent = search.parentElement.parentElement;
    parent.appendChild(joker);
})
