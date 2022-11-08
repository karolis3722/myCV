let iterations = 0;

setTimeout(() => {
    let circus = document.getElementsByClassName('container')[0];

    const spinning = [
        { transform: 'rotate(0) scale(1) skew(50deg)' },
        { transform: 'rotate(360deg) scale(0) skew(10deg)' }
    ];

    const duration = {
        duration: 5000,
        iterations: 1,
    };

    setTimeout(() => {
        circus.addEventListener('click', () => {
            circus.animate(spinning, duration);
        })
        $(circus).click();

        let goCrazy = setInterval(() => {
            const left = Math.random() * (80 - 20) + 20;
            const top = Math.random() * (80 - 1) + 1;
            const width = Math.random() * (10 - 2) + 2;

            const img = document.createElement("img");
            img.src = "./emoji.png";
            img.className = "emoji";

            img.style = `left: ${left}%; top: ${top}%; width: ${width}%;`;
            document.getElementsByClassName("App")[0].appendChild(img);
            iterations++;
            stopCrazy(iterations);
        },100)

        const stopCrazy = (iterations) => {
            if (iterations === 20) {
                clearInterval(goCrazy);
            }
        }

        goCrazy;


    },30000);
    
    setTimeout(() => {
        emojies = document.getElementsByTagName("img");
        console.log("emojies",emojies);
        while(emojies.length > 0) {
            let iter = emojies.length;
            emojies[iter-1].remove(); 
        }
       circus.replaceWith(circus.cloneNode(true));
    },36000)

}, 1000);








// left: 40%;
// top: 10%;
// width: 10%;