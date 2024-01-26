function checkAnimation()
{
    const mainContentTextBox = document.querySelector('.main_content_text_box');
    const positionFromTop = mainContentTextBox.getBoundingClientRect().top;
    const offset = 100;
    const windowHeight = window.innerHeight;
    if (positionFromTop - windowHeight + offset <= 0) {
        mainContentTextBox.classList.add('main_content_text_box_animated');
    }
}

window.addEventListener('scroll', checkAnimation);
window.addEventListener('load', checkAnimation);




function animateOnScroll() {
    const cards = document.querySelectorAll('.contact_details_main_card_item');
    const offset = 100; // Set your desired offset value

    cards.forEach(card => {
        const positionFromTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (positionFromTop - windowHeight + offset <= 0)
        {
            card.classList.add('contact_details_main_box_animated');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('DOMContentLoaded', animateOnScroll);





function whyChooseAnimateOnScroll() {
    const cards = document.querySelectorAll('.why_choose_us_contebt_card');
    const offset = 200; // Set your desired offset value

    cards.forEach(card => {
        const positionFromTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (positionFromTop - windowHeight + offset <= 0) {
            card.classList.add('why_choose_us_contebt_card_animated');
        }
    });
}

window.addEventListener('scroll', whyChooseAnimateOnScroll);
window.addEventListener('DOMContentLoaded', whyChooseAnimateOnScroll);


function joinContentAnimateOnScroll() {
    const heading = document.querySelector('.join_content_main_box_heading');
    const banner = document.querySelector('.join_content_main_banner');
    const offset = 200;

    const positionHeadingFromTop = heading.getBoundingClientRect().top;
    const positionBannerFromTop = banner.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (positionHeadingFromTop - windowHeight + offset <= 0) {
        heading.classList.add('join_content_main_box_heading_animated');
    }

    if (positionBannerFromTop - windowHeight + offset <= 0) {
        banner.classList.add('join_content_main_banner_animated');
    }
}

window.addEventListener('scroll', joinContentAnimateOnScroll);
window.addEventListener('DOMContentLoaded', joinContentAnimateOnScroll);


function howItsAnimateOnScroll() {
    const elements = document.querySelectorAll('.how_its_work_main_content_box > *');
    const offset = 200; // Set your desired offset value

    elements.forEach(element => {
        const positionFromTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (positionFromTop - windowHeight + offset <= 0) {
            element.classList.add('how_its_work_main_content_box_animated');
        }
    });
}

window.addEventListener('scroll', howItsAnimateOnScroll);
window.addEventListener('DOMContentLoaded', howItsAnimateOnScroll);


function animateCountersOnScroll() {
    const counters = document.querySelectorAll('.grow_details_main_progress_heading>span');
    const offset = 200;

    counters.forEach(counter => {
        const positionFromTop = counter.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (positionFromTop - windowHeight + offset <= 0 && !counter.classList.contains('grow_details_main_content_box_animated')) {
            const targetCount = +counter.getAttribute('data-count');
            const duration = 1500;

            let currentCount = 0;
            const increment = Math.ceil(targetCount / duration * 16);

            const updateCounter = () => {
                currentCount += increment;
                if (currentCount < targetCount) {
                    counter.textContent = currentCount;
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = targetCount;
                    counter.classList.add('grow_details_main_content_box_animated');
                }
            };

            updateCounter();
        }
    });
}

window.addEventListener('scroll', animateCountersOnScroll);
window.addEventListener('DOMContentLoaded', animateCountersOnScroll);


function ServiceAnimateBoxOnScroll() {
    const box = document.querySelector('.services_process_main_content_items_box');
    const offset = 200;

    const positionFromTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (positionFromTop - windowHeight + offset <= 0 && !box.classList.contains('services_process_main_content_items_box_animated')) {
        box.classList.add('services_process_main_content_items_box_animated');
    }
}

window.addEventListener('scroll', ServiceAnimateBoxOnScroll);
window.addEventListener('DOMContentLoaded', ServiceAnimateBoxOnScroll);



function advertisersAnimateBoxesOnScroll() {
    const boxes = document.querySelectorAll('.advertisers_main_content_item_box');
    const offset = 200;

    boxes.forEach(box => {
        const positionFromTop = box.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (positionFromTop - windowHeight + offset <= 0 && !box.classList.contains('advertisers_main_content_item_box_animated')) {
            box.classList.add('advertisers_main_content_item_box_animated');
        }
    });
}

window.addEventListener('scroll', advertisersAnimateBoxesOnScroll);
window.addEventListener('DOMContentLoaded', advertisersAnimateBoxesOnScroll);


$(document).ready(function(){
    $(document).on('click', ".menu_btn", function(){
        $(".header_nav_items").animate({'right': '0'});
    });
    $(document).on('click', ".cross_icon", function(){
        $(".header_nav_items").animate({'right': '-100%'});
    });
});

// GSAP animation without jQuery

function animateElements()
{
    gsap.set('.header_logo, .nav_logo, .cross_icon, .header_nav_items ul li, .header_right_box, .header_cta_btn, .menu_btn', { opacity: 0, y: -50 });

    gsap.to('.header_box', { opacity: 1, duration: 1 });

    gsap.to('.header_logo, .nav_logo, .cross_icon, .header_nav_items ul li, .header_right_box, .header_cta_btn', {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        delay: 0.5,
    });

    gsap.to('.menu_btn', {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.8,
    });
}
function animateBasedOnScreenWidth()
{
    const screenWidth = window.innerWidth;

    if (screenWidth <= 768) {
        animateElements();
    }
}
window.addEventListener('load', animateBasedOnScreenWidth);
window.addEventListener('resize', animateBasedOnScreenWidth);