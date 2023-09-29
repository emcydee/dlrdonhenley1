// Function to initialize the page
function initializePage() {
  hideImageInfo(); // Hide image info container on page load
}
function showImageInfo(imageId) {
  const imageInfo = document.getElementById('imageInfo');
  const displayedVideo = document.getElementById('displayedVideo');
  const imageDescription = document.getElementById('imageDescription');

  // Check if the clicked thumbnail is already active
  const isActive = document.querySelector(`.thumbnail.active[data-image="${imageId}"]`);
  if (isActive) {
    // If the clicked thumbnail is active, hide the image info container
    hideImageInfo();
    return;
  }
  // Change the video source and description based on the imageId
  switch (imageId) {
case 1:
      displayedVideo.src = 'videos/video1.mp4';
      imageDescription.innerHTML = `
        <h4 style="font-family: 'alternate-gothic-no-2-d'; font-weight: bold; ">GLOO</h4>
        <p>Enjoy your journey as you explore the fantasy 2D platformer game as "Gloo", a cute and mischievous slime. Unravel the mysteries as Gloo takes you on an adventure filled with challenges and obstacles to overcome. Make your way through a myriad of levels and landscapes, collect coins and rewards along the way. With its addictive gameplay and charming visuals, Gloo is the perfect game for fans of platformers and fantasy genres alike.</p>
<h4 style="font-family: 'alternate-gothic-no-2-d'; font-weight: bold;">SCREENSHOTS</h4>
	<div class="slider-container">
    <div class="slides fade">
        <div class="slider-numbers">1/4</div>
        <div class="slider-image"><img src="screenshots/Gloo/1.png" alt="background_1"></div>
    </div> <!-- slider -->

    <div class="slides fade">
        <div class="slider-numbers">2/4</div>
        <div class="slider-image"><img src="screenshots/Gloo/2.png" alt="background_2"></div>
        
    </div> <!-- slider -->

    <div class="slides fade">
        <div class="slider-numbers">3/4</div>
        <div class="slider-image"><img src="screenshots/Gloo/3.png" alt="background_3"></div>
        
    </div> <!-- slider -->

    <!-- Slider Next and Previous buttons -->
    <a class="prev" onclick="plusIndex(-1)">❮</a>
    <a class="next" onclick="plusIndex(+1)">❯</a>

    <!-- Slider Selection Bullets -->
    <div class="slider-bullets" id="slider-bullets">
        <span class="dots" onclick="currentSlide(1)"></span>
        <span class="dots" onclick="currentSlide(2)"></span>
        <span class="dots" onclick="currentSlide(3)"></span>
    </div> <!-- Slider Bullets -->
	</div>
</section>
		<br>
        <a href="misc/GDD/GDD_GLOO.pdf" target="_blank">GAME DESIGN DOCUMENT: GLOO</a>
      `;
	  
      break;
    case 2:
      displayedVideo.src = 'videos/video2.mp4';
      imageDescription.innerHTML = `
        <h4 style="font-family: 'alternate-gothic-no-2-d'; font-weight: bold;">BLOB</h2>
        <p>"Experience the thrill of collecting crystals and avoiding obstacles in this exciting arcade game for kids aged 8 and up! With just a tap of the screen, navigate your way through chasms and dodge enemies to unlock new game types and characters. Get ready for endless hours of fun and adventure!"</p>
		<h4 style="font-family: 'alternate-gothic-no-2-d'; font-weight: bold;">SCREENSHOTS</h4>
	<div class="slider-container">
    <div class="slides fade">
        <div class="slider-numbers">1/4</div>
        <div class="slider-image"><img src="screenshots/Blob/1.png" alt="background_1"></div>
    </div> <!-- slider -->

    <div class="slides fade">
        <div class="slider-numbers">2/4</div>
        <div class="slider-image"><img src="screenshots/Blob/2.png" alt="background_2"></div>
        
    </div> <!-- slider -->

    <div class="slides fade">
        <div class="slider-numbers">3/4</div>
        <div class="slider-image"><img src="screenshots/Blob/3.png" alt="background_3"></div>
        
    </div> <!-- slider -->

    <!-- Slider Next and Previous buttons -->
    <a class="prev" onclick="plusIndex(-1)">❮</a>
    <a class="next" onclick="plusIndex(+1)">❯</a>

    <!-- Slider Selection Bullets -->
    <div class="slider-bullets" id="slider-bullets">
        <span class="dots" onclick="currentSlide(1)"></span>
        <span class="dots" onclick="currentSlide(2)"></span>
        <span class="dots" onclick="currentSlide(3)"></span>
    </div> <!-- Slider Bullets -->
	</div>
</section>
<br>
        
      `;

      break;
    case 3:
      displayedVideo.src = 'videos/video3.mp4';
      imageDescription.innerHTML = `
        <h4 style="font-family: 'alternate-gothic-no-2-d'; font-weight: bold;">HAUNTED</h4>
        <p>"Get ready to be immersed in a spine-tingling maze adventure with Haunted: Confined! Using the powerful recursive backtracker algorithm, this Unity-developed game will keep you on your toes as you navigate through a mysterious and eerie world. With a chilling horror theme, you must use your wits and strategic thinking to escape the labyrinthine confines and uncover the secrets within. Are you brave enough to face the challenge?"</p>
		<h4 style="font-family: 'alternate-gothic-no-2-d'; font-weight: bold;">SCREENSHOTS</h4>
	<div class="slider-container">
    <div class="slides fade">
        <div class="slider-numbers">1/4</div>
        <div class="slider-image"><img src="screenshots/Haunted/1.png" alt="background_1"></div>
    </div> <!-- slider -->

    <div class="slides fade">
        <div class="slider-numbers">2/4</div>
        <div class="slider-image"><img src="screenshots/Haunted/2.png" alt="background_2"></div>
        
    </div> <!-- slider -->

    <div class="slides fade">
        <div class="slider-numbers">3/4</div>
        <div class="slider-image"><img src="screenshots/Haunted/3.png" alt="background_3"></div>
        
    </div> <!-- slider -->

 <div class="slides fade">
        <div class="slider-numbers">4/4</div>
        <div class="slider-image"><img src="screenshots/Haunted/4.png" alt="background_3"></div>
        
    </div> <!-- slider -->
    <!-- Slider Next and Previous buttons -->
    <a class="prev" onclick="plusIndex(-1)">❮</a>
    <a class="next" onclick="plusIndex(+1)">❯</a>

    <!-- Slider Selection Bullets -->
    <div class="slider-bullets" id="slider-bullets">
        <span class="dots" onclick="currentSlide(1)"></span>
        <span class="dots" onclick="currentSlide(2)"></span>
        <span class="dots" onclick="currentSlide(3)"></span>
		<span class="dots" onclick="currentSlide(4)"></span>
    </div> <!-- Slider Bullets -->
	</div>
</section>
<br>
        
      `;
      break;
    case 4:
      displayedVideo.src = 'videos/video4.mp4';
      imageDescription.innerHTML = `
        <h4 style="font-family: 'alternate-gothic-no-2-d'; font-weight: bold;">KID-VENTURES</h4>
        <p>"Embark on a fun-filled learning adventure with Kid-ventures! Designed specifically for kids, this exciting game combines shape matching and alphabet recognition to make learning fun and engaging. Explore vibrant and colorful environments as you progress through various levels of increasing difficulty, all while building important cognitive and motor skills. With easy-to-use controls and playful graphics, Kid-ventures is the perfect game to help your child grow and learn!"</p>
		<h4 style="font-family: 'alternate-gothic-no-2-d'; font-weight: bold;">SCREENSHOTS</h4>
	<div class="slider-container">
    <div class="slides fade">
        <div class="slider-numbers">1/4</div>
        <div class="slider-image"><img src="screenshots/Kidventures/1.jpg" alt="background_1"></div>
    </div> <!-- slider -->

    <div class="slides fade">
        <div class="slider-numbers">2/4</div>
        <div class="slider-image"><img src="screenshots/Kidventures/2.jpg" alt="background_2"></div>
        
    </div> <!-- slider -->

    <div class="slides fade">
        <div class="slider-numbers">3/4</div>
        <div class="slider-image"><img src="screenshots/Kidventures/3.jpg" alt="background_3"></div>
        
    </div> <!-- slider -->

    <div class="slides fade">
        <div class="slider-numbers">4/4</div>
        <div class="slider-image"><img src="screenshots/Kidventures/4.jpg" alt="background_4"></div>
        
    </div> <!-- slider -->

    <!-- Slider Next and Previous buttons -->
    <a class="prev" onclick="plusIndex(-1)">❮</a>
    <a class="next" onclick="plusIndex(+1)">❯</a>

    <!-- Slider Selection Bullets -->
    <div class="slider-bullets" id="slider-bullets">
        <span class="dots" onclick="currentSlide(1)"></span>
        <span class="dots" onclick="currentSlide(2)"></span>
        <span class="dots" onclick="currentSlide(3)"></span>
        <span class="dots" onclick="currentSlide(4)"></span>
    </div> <!-- Slider Bullets -->
	</div>
</section>
<br>
        <a href="misc/GDD/GDD_KIDVENTURES.pdf" target="_blank">GAME DESIGN DOCUMENT: KID-VENTURES</a>
      `;
      break;
  }
  // Show the image info container
  imageInfo.style.display = 'block';

  // Add the "active" class to the clicked thumbnail
  const thumbnails = document.querySelectorAll('.thumbnail');
  thumbnails.forEach(thumbnail => thumbnail.classList.remove('active'));
  const activeThumbnail = document.querySelector(`.thumbnail[data-image="${imageId}"]`);
  activeThumbnail.classList.add('active');
}

function hideImageInfo() {
  const imageInfo = document.getElementById('imageInfo');
  // Hide the image info container
  imageInfo.style.display = 'none';

  // Remove the "active" class from all thumbnails
  const thumbnails = document.querySelectorAll('.thumbnail');
  thumbnails.forEach(thumbnail => thumbnail.classList.remove('active'));
}

// Initialize the page on load
initializePage();
