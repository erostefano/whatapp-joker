window.addEventListener('click', () => {
    if (document.getElementById('joker')) {
        return;
    }

    // create joker
    const search = document.querySelector("#main > header > div._1IeOz > div > div._2n-zq > div");
    const joker = search.cloneNode(true);
    joker.setAttribute('id', 'joker');
    joker.addEventListener('click', () => {
        const inputText = document.querySelector("#main > footer > div.vR1LG._3wXwX.copyable-area > div._2A8P4 > div > div._2_1wd.copyable-text.selectable-text");
        inputText.innerHTML = 'text';
        inputText.dispatchEvent(new Event('input', {bubbles: true}));
        const send = document.querySelector("#main > footer > div.vR1LG._3wXwX.copyable-area > div:nth-child(3) > button");
        send.click();
    });

    // append joker
    const parent = document.querySelector("#main > header");
    parent.appendChild(joker);
})
