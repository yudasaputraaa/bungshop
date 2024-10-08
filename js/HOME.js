// HOME.js

// Mendapatkan referensi elemen navbar dan ikon
const navbar = document.getElementById('navbar');
const navbarLogo = document.getElementById('navbar-icon');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuButton = document.getElementById('close-menu-button'); // Tombol untuk menutup menu

// Menambahkan event listener untuk scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.remove('navbar-transparent');
        navbar.classList.add('navbar-solid');
        navbarLogo.src = "img/LOGOICON2.png"; // Ganti logo saat di-scroll
    } else {
        navbar.classList.remove('navbar-solid');
        navbar.classList.add('navbar-transparent');
        navbarLogo.src = "img/LOGOICON.png"; // Kembali ke logo awal
    }
});

// Menambahkan animasi untuk elemen yang muncul saat di-scroll
const scrollElements = document.querySelectorAll('.animate-scroll-up');
const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};
const displayScrollElement = (element) => {
    element.classList.add('in-view');
};
const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        }
    });
};
window.addEventListener('scroll', handleScrollAnimation);

// Fungsi untuk menampilkan atau menyembunyikan menu mobile
mobileMenuButton.addEventListener('click', function () {
    mobileMenu.classList.remove('hidden'); // Tampilkan menu mobile
});

// Menutup menu mobile saat menekan tombol close
closeMenuButton.addEventListener('click', function () {
    mobileMenu.classList.add('hidden'); // Sembunyikan menu mobile
});

// Menutup menu mobile saat mengklik link
const mobileLinks = document.querySelectorAll('.mobile-menu a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden'); // Sembunyikan menu mobile setelah memilih link
    });
});

// Fungsi untuk animasi elemen saat di-scroll
function onScroll() {
    const elements = document.querySelectorAll('.animate-scroll-up');
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add('in-view');
        } else {
            el.classList.remove('in-view');
        }
    });
}

// Tambahkan event listener untuk scroll dan load
window.addEventListener('scroll', onScroll);
window.addEventListener('load', onScroll); // Panggil saat halaman selesai dimuat
