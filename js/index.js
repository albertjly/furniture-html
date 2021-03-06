window.addEventListener('load', function () {
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const descTitle = document.getElementById('desc-title');
    const descContent = document.getElementById('desc-content');
    const upperLeftBg = document.getElementsByClassName('upper-left')[0];
    const imgUrl = window.getComputedStyle(upperLeftBg).backgroundImage;

    const descArr = [
        {
            src: "../images/desktop-image-hero-1.jpg",
            title: "Discover innovative ways to decorate",
            content: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
        },
        {
            src: "../images/desktop-image-hero-2.jpg",
            title: "We are available all across the globe",
            content: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
        },
        {
            src: "../images/desktop-image-hero-3.jpg",
            title: "Manufactured with the best materials",
            content: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
        }
    ];

    let num = parseInt(imgUrl.substring(imgUrl.lastIndexOf('.') - 1));
    prevBtn.addEventListener('click', function () {

        if (num <= 1) num = 3;
        else num--;

        upperLeftBg.style.background = `url("${descArr[num - 1].src}") no-repeat`;
        descTitle.innerText = descArr[num - 1].title;
        descContent.innerText = descArr[num - 1].content;

    });

    nextBtn.addEventListener('click', function () {

        if (num === 3) num = 1;
        else num++;

        upperLeftBg.style.background = `url("${descArr[num - 1].src}") no-repeat`;
        descTitle.innerText = descArr[num - 1].title;
        descContent.innerText = descArr[num - 1].content;
    });
});