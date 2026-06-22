// Smooth scroll untuk semua link navigasi
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Efek saat scroll: navbar berubah transparan (opsional)
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
    } else {
        nav.style.boxShadow = 'none';
    }
});

// Tampilkan pesan di console (untuk testing)
console.log('Personal Page Rifky siap! 🚀');