// More info about initialization & config:
// - https://revealjs.com/initialization/
// - https://revealjs.com/config/
Reveal.initialize({
    hash: true,
		// Learn about plugins: https://revealjs.com/plugins/
		plugins: [ RevealMarkdown, RevealHighlight, RevealNotes ]
})

Reveal.on('slidechanged', event => {
    let audio = new Audio ('./quack_5.mp3');
    audio.play();

    console.log(event.currentSlide);
} );
