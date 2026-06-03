document.addEventListener("DOMContentLoaded", function() {
    const tanitimSlider = document.getElementById("tanitimSlider");

    if (tanitimSlider) {
        const sliderImages = tanitimSlider.querySelectorAll("img");
        let currentSlide = 0;

        setInterval(function() {
            currentSlide = (currentSlide + 1) % sliderImages.length;
            tanitimSlider.style.transform = `translateX(-${currentSlide * 100}%)`;
        }, 3000);
    }

    const commentForm = document.getElementById("commentForm");

    if (!commentForm) {
        return;
    }

    commentForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const adSoyad = document.getElementById("adSoyad").value.trim();
        const email = document.getElementById("email").value.trim();
        const yorum = document.getElementById("yorum").value.trim();

        const errorAd = document.getElementById("errorAd");
        const errorEmail = document.getElementById("errorEmail");
        const errorYorum = document.getElementById("errorYorum");
        const successMsg = document.getElementById("successMsg");

        errorAd.textContent = "";
        errorEmail.textContent = "";
        errorYorum.textContent = "";
        successMsg.textContent = "";

        let isValid = true;

        if (adSoyad === "") {
            errorAd.textContent = "Lutfen adinizi ve soyadinizi giriniz.";
            isValid = false;
        } else if (adSoyad.length < 3) {
            errorAd.textContent = "Ad soyad en az 3 karakter olmalidir.";
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            errorEmail.textContent = "Lutfen e-posta adresinizi giriniz.";
            isValid = false;
        } else if (!emailRegex.test(email)) {
            errorEmail.textContent = "Gecerli bir e-posta adresi giriniz (Orn: isim@mail.com).";
            isValid = false;
        }

        if (yorum === "") {
            errorYorum.textContent = "Lutfen bir yorum veya oneri yaziniz.";
            isValid = false;
        } else if (yorum.length < 10) {
            errorYorum.textContent = "Yorumunuz biraz daha aciklayici olmalidir (en az 10 karakter).";
            isValid = false;
        }

        if (isValid) {
            successMsg.textContent = "Tesekkurler! Yorumunuz basariyla gonderildi (simule edildi).";
            commentForm.reset();
        }
    });
});

const modal = document.getElementById("galleryModal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("modalCaption");
const closeBtn = document.getElementById("modalClose");
const galleryItems = document.querySelectorAll(".galeri-ogesi");

if (galleryItems.length > 0 && modal) {
    galleryItems.forEach(item => {
        item.addEventListener("click", function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.textContent = this.alt;
        });
    });

    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}
