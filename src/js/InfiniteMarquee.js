const marquees = document.querySelectorAll('[data-marquee]');

marquees.forEach((marquee) => {
    const direction = marquee.getAttribute('data-marquee');

    gsap.to(marquee, {
        duration: marquee.offsetWidth / 200,
        x: direction == 'reversed' ? '25%' : '-25%',
        ease: 'linear',
        repeat: -1,
    });
});
