// Document Ready Function
$(document).ready(function() {
    // Owl Carousel initialization
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        },
        navText: [
            "<i class='fas fa-chevron-left'></i>",
            "<i class='fas fa-chevron-right'></i>"
        ]
    });

    // Scrollspy Initialization for smooth scrolling
    $('body').scrollspy({ target: '#navbarNav' });
    
    // Smooth scrolling for navigation links
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    // Form submissions
    $('.newsletter-form').submit(function(e) {
        e.preventDefault();
        // Here you would typically handle the form submission with AJAX
        // For now, we'll just show a success message
        var email = $(this).find('input[type="email"]').val();
        if (email) {
            alert('Teşekkürler! ' + email + ' adresi başarıyla abone oldu.');
            $(this).find('input[type="email"]').val('');
        }
    });

    // Add active class to nav items based on current page
    var path = window.location.pathname;
    var page = path.split("/").pop();
    
    if (page === "") {
        page = "index.html";
    }
    
    $('.navbar-nav .nav-link').each(function() {
        var href = $(this).attr('href');
        if (href === page) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });

    // Back to top button functionality
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });

    $('.back-to-top').click(function() {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

    // Image lazy loading
    $("img").each(function() {
        var src = $(this).data('src');
        if (src) {
            $(this).attr('src', src);
        }
    });

    // Add animations on scroll
    const animateElements = document.querySelectorAll('.animate');

    function checkInView() {
        animateElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            
            if (rect.top <= windowHeight * 0.75) {
                element.classList.add('animated');
            }
        });
    }

    // Initial check on page load
    checkInView();

    // Check on scroll
    window.addEventListener('scroll', checkInView);
}); 