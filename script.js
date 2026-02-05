// Logic to switch the iframe Source
const videoFrame = document.getElementById('mainVideoFrame');
const lessonTitle = document.getElementById('lessonTitle');
const buttons = document.querySelectorAll('.video-btn');

function playVideo(link, title) {
    // Change the source of the Iframe
    videoFrame.src = link;
    // Change the title below the video
    lessonTitle.textContent = title;
}

// Active button styling
buttons.forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons
        buttons.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
    });
});