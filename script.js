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

// Efek saat scroll: navbar berubah transparan
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 4px 30px rgba(0,0,0,0.4)';
        nav.style.background = 'rgba(11, 12, 30, 0.85)';
    } else {
        nav.style.boxShadow = '0 4px 30px rgba(0,0,0,0.3)';
        nav.style.background = 'rgba(255, 255, 255, 0.05)';
    }
});

// Form handler (menampilkan alert saat submit)
document.querySelector('.contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert(`Terima kasih ${name}! Pesan Anda telah terkirim. Saya akan segera merespon.`);
        this.reset();
    } else {
        alert('Mohon isi semua field yang tersedia.');
    }
});

console.log('🚀 Personal Page Rifky Yogaswara siap digunakan!');
