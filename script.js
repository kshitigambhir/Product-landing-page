class Slideshow {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.slides = this.container.querySelectorAll('.slide');
        this.currentIndex = 0;
        this.showSlide(this.currentIndex);
        this.startSlideshow(); 
    }

    showSlide(index) {
        if (index < 0) {
            this.currentIndex = this.slides.length - 1;
        } else if (index >= this.slides.length) {
            this.currentIndex = 0;
        } else {
            this.currentIndex = index;
        }

        for (let i = 0; i < this.slides.length; i++) {
            this.slides[i].style.display = 'none';
        }
        this.slides[this.currentIndex].style.display = 'block';
    }

    startSlideshow() {
        setInterval(() => {
            this.showSlide(this.currentIndex + 1);
        }, 3000); 
    }
}
const heroSlideshow = new Slideshow('heroSlideshow');