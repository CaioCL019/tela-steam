document.querySelectorAll('.galeria img').forEach(img => {
    img.style.transition = 'transform 0.3s ease'

    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.05)';
    });

    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
    });
});

window.addEventListener('load', () => {
    document.querySelectorAll('.galeria img').forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 1s ease';
        setTimeout(() => {
            img.style.opacity = '1';
        }, 100);
    });
});

document.querySelector('h1').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelectorAll('.img-box-pequena').forEach(box => {
    box.style.transition = 'border-color 0.3s ease';

    box.addEventListener('mouseenter', () => {
        box.style.borderColor = '#e2b27a';
    });

    box.addEventListener('mouseleave', () => {
        box.style.borderColor = 'rgba(226, 178, 122, 0.5)';
    });
});

window.addEventListener('load', () => {
    document.querySelectorAll('.galeria img').forEach((img, index) => {
        setTimeout(() => {
            img.classList.add('aparecendo');
        }, index * 100); 
    });
});

function scrollToTop(duration = 1200) {
    const start = window.scrollY;
    const startTime = performance.now();

    function scrollStep(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3); 

        window.scrollTo(0, start * (1 - ease));

        if (progress < 1) {
            requestAnimationFrame(scrollStep);
        }
    }

    requestAnimationFrame(scrollStep);
}

const btnTopo = document.getElementById('voltar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        btnTopo.classList.add('show');
    } else {
        btnTopo.classList.remove('show');
    }
});

btnTopo.addEventListener('click', () => {
    scrollToTop(1200);
});