document.addEventListener("DOMContentLoaded", function() {
    // Pilih semua elemen yang ingin dianimasikan
    const elements = document.querySelectorAll('.animate-slide-down');
  
    // Buat observer
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Tambahkan kelas animasi ketika elemen masuk viewport
          entry.target.classList.add('animate-slide-down');
          observer.unobserve(entry.target); // Hentikan pemantauan setelah animasi dimulai
        }
      });
    }, {
      threshold: 0.5 // Ketika 50% elemen terlihat di viewport
    });
  
    // Mulai mengamati setiap elemen
    elements.forEach(element => {
      observer.observe(element);
    });
  });
  