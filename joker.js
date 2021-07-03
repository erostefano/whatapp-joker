window.addEventListener('click', () => {
    if (document.getElementById('joker')) {
        return;
    }

    // create joker
    const search = document.querySelector("#main > header > div._1IeOz > div > div._2n-zq > div");
    if (!search) {
        return;
    }

    const joker = search.cloneNode(true);
    joker.setAttribute('id', 'joker');
    joker.addEventListener('click', () => {
        const inputText = document.querySelector("#main > footer > div.vR1LG._3wXwX.copyable-area > div._2A8P4 > div > div._2_1wd.copyable-text.selectable-text");

        const request = new XMLHttpRequest();
        request.open("GET", "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=religious,political,racist,sexist,explicit&format=txt");
        request.addEventListener('load', () => {
            if (request.status >= 200 && request.status < 300) {
                inputText.innerHTML = request.responseText;
                inputText.dispatchEvent(new Event('input', {bubbles: true}));
                const send = document.querySelector("#main > footer > div.vR1LG._3wXwX.copyable-area > div:nth-child(3) > button");
                send.click();
            } else {
                console.warn(request.statusText, request.responseText);
            }
        });
        request.send();
    });

    const svg = joker.childNodes[0].childNodes[0];
    svg.setAttribute('viewBox', '0 0 27 32');
    svg.style.color = 'red';
    svg.children[0].attributes[1].nodeValue = 'M28.405,14.7c-0.479,0-0.897,0.228-1.172,0.576c-1.56-1.127-4.992-2.994-7.975-0.271c0,0-3.021-4.168-0.982-7.569    c0.246,0.178,0.547,0.286,0.875,0.286c0.827,0,1.5-0.671,1.5-1.5s-0.673-1.5-1.5-1.5c-0.828,0-1.502,0.671-1.502,1.5    c0,0.168,0.032,0.327,0.084,0.478c-2.141,0.819-5.836,2.858-6.39,7.307c0,0-3.429-4.541-8.573-1.594    c-0.265-0.425-0.732-0.711-1.27-0.711c-0.829,0-1.501,0.672-1.501,1.5s0.672,1.5,1.501,1.5c0.828,0,1.499-0.672,1.499-1.5    c0-0.047-0.01-0.091-0.014-0.137c1.794,0.14,4.67,1.726,5.461,10.151l0.09,0.688c0,0.707,2.858,1.279,6.382,1.279    c3.526,0,6.383-0.574,6.383-1.279c0,0,0.229-5.78,5.611-7.623c0.041,0.791,0.688,1.423,1.491,1.423c0.83,0,1.5-0.673,1.5-1.5    C29.907,15.371,29.235,14.7,28.405,14.7z';

    // append joker
    const parent = document.querySelector("#main > header > div._1IeOz > div")
    parent.appendChild(joker);
})
