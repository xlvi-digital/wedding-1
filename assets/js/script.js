var popup = document.getElementById("popup");
var closeBtn = document.getElementsByClassName("close")[0];
// var isAudioPlaying = true;
// var logo = document.getElementById("logo");

// Fungsi untuk menampilkan popup
function showPopup() {
  popup.style.display = "flex";
  document.body.style.overflow = "hidden";
  setTimeout(function () {
    popup.style.transform = "translateY(0)";
    popup.style.opacity = 1;
  }); // Tambahkan penundaan agar animasi berfungsi dengan baik
}

// Fungsi untuk menyembunyikan popup
function hidePopup() {
  // var popupAudio = document.getElementById("popupAudio");
  // popupAudio.play(); // Menghentikan audio
  popup.style.transform = "translateY(-100%)";
  document.body.style.overflow = "auto";
  popup.style.opacity = 0;
  setTimeout(function () {
    popup.style.display = "none";
    popup.style.opacity = 1;
    popup.style.transform = "translateY(0)"; // Reset transformasi saat popup disembunyikan
  }, 5000); // Waktu yang sesuai dengan durasi transisi
}

// function pause() {
//   var popupAudio = document.getElementById("popupAudio");
//   if (isAudioPlaying) {
//     popupAudio.pause(); // Menghentikan lagu jika sedang diputar
//     isAudioPlaying = false;
//   } else {
//     popupAudio.play(); // Memulai kembali lagu jika tidak sedang diputar
//     isAudioPlaying = true;
//   }
// }

// Tambahkan event listener pada tombol tutup
closeBtn.addEventListener("click", hidePopup);
// logo.addEventListener("click", pause);
// Tampilkan popup setelah halaman dimuat
window.onload = showPopup;

document.addEventListener("DOMContentLoaded", function () {
  // Ambil elemen slide dan atur slide pertama sebagai aktif
  var slides = document.querySelectorAll(".bride-image");
  var currentSlide = 0;
  slides[currentSlide].classList.add("active");

  // Fungsi untuk pindah ke slide berikutnya
  function nextSlide() {
    // Sembunyikan slide saat ini
    slides[currentSlide].classList.remove("active");

    // Pindah ke slide berikutnya
    currentSlide = (currentSlide + 1) % slides.length;

    // Tampilkan slide berikutnya
    slides[currentSlide].classList.add("active");
  }

  // Atur interval perpindahan slide
  setInterval(nextSlide, 5000);
});

// fitur Hitung Mundur
// Mengatur waktu akhir perhitungan mundur
var countDownDate = new Date("feb 16, 2025 10:00:00").getTime();

// Memperbarui hitungan mundur setiap 1 detik
var x = setInterval(function () {
  // Untuk mendapatkan tanggal dan waktu hari ini
  var now = new Date().getTime();

  // Temukan jarak antara sekarang dan tanggal hitung mundur
  var distance = countDownDate - now;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = document.getElementById("days").innerHTML = 0;
    document.getElementById("hours").innerHTML = 0;
    document.getElementById("minutes").innerHTML = 0;
    document.getElementById("seconds").innerHTML = 0;
    return;
  }

  // Perhitungan waktu untuk hari, jam, menit dan detik
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Keluarkan hasil dalam elemen dengan id = "demo"
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // Jika hitungan mundur selesai, tulis beberapa teks
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// Show Cards
const showCardButton = document.getElementById("show-cards");
const cardContainer = document.getElementById("card-container");
const cards = document.querySelectorAll(".card");

showCardButton.addEventListener("click", function () {
  cardContainer.classList.toggle("show");
  if (cardContainer.classList.contains("show")) {
    showCardsSequentially();
  } else {
    resetCardStyles();
  }
});

function showCardsSequentially() {
  cards.forEach((card, index) => {
    card.style.animation = `cardFadeIn 0.2s ease ${index * 0.2 + 0.2}s forwards`;
  });
}

function resetCardStyles() {
  cards.forEach((card) => {
    card.style.animation = "";
  });
}
