/*!
* Start Bootstrap - Grayscale v7.0.4 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

function peringatan1() {
    alert('assalamualaikum, haloo beautiful princess anzeli rahmadina ♡ or usually i call u jeli hahaha');
    alert('how r u? aku harap kamu bahagia selalu yaaa, harus sih soalnya aku selalu doain supaya kamu bahagia terus.');
    alert('udah makan? kalau sudah, bagaimana lauknya? enak tidak? kalau belum, its ok mungkin belum lapar atau belum mood tp jangan sampai lupa makan yaa ♡ jangan makan hati tp hehe.');
    alert('gimana sekolahnya? lancar-lancar aja kan? kalau banyak tugas atau pelajaran, jgn terlalu dipikirin. bagi porsi waktunya dimana kamu ngurusin hal sekolah dengan dimana kamu harus mengistirahatkan dan menghibur diri kamu sendiri. ♡');
    alert('aku tahu kamu orang hebat. kamu keren loh bisa melewati hal-hal yang berat sekaligus, dan kamu sudah bertahan sejauh ini. terima kasih yaa ♡ orang lain belum tentu bisa sekuat kamu.');
    alert('coba kasih tau aku gimana rasanya jadi bidadari sekaligus wonderwoman? HAHAHA gimana rasanya jadi seseorang yg cantik dan kuat sekaligus?');
    alert('u should stay alive. ♡ u worth of it. u r the reason why im still surviving my life ♡');
    alert('and u know that i have... yaaa u know it wkwk but im oke. everything shouldnt together in the end. because there will be another way to bring happiness.');
    alert('i just wanna say, thank u sm for coming to my life. u r pretty, cute and kind. u r my world. ♡');
    alert('but if someday we will become stranger(?) again. i will be okay, i will accept the fate.');
    alert('one thing for sure u should know that, i love u, forever. u will always have a special place in my heart and nobody will replace it cuz only u that worth to stay there. ♡');
    alert('last but not least, sorry if im being bad person to u. i know i was, thats why im apologize to u. maaf cuma buat susah aja hehe. sorry so sorry.');
    alert('semoga suka sama webnya ya! web jelek sih huhu gabisa bikin web wkwkw');
};

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});