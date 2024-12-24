function checkForAds() {
  console.log("YouTube extension 'UT_Sk' is running");

  const adContainer = document.querySelector(".ad-showing");
  const video = document.querySelector("video");
  if (adContainer && video) {
    const playbackRate = 3.9 + Math.random() * 0.2;
    video.playbackRate = playbackRate;
    console.log(`Speeding up the speed to ${playbackRate.toFixed(2)}x`);
  }

  function findSkipButton() {
    let skipButton = document.querySelector(
      ".ytp-skip-ad-button, .ytp-skip-ad-button-modern"
    );

    if (!skipButton) {
      skipButton = document.querySelector(
        ".ytp-skip-ad-button-container button"
      );
    }

    return skipButton;
  }

  const skipButton = findSkipButton();

  if (skipButton) {
    console.log("Button found");
    simulateHumanClick(skipButton);
  }
}

function simulateHumanClick(button) {
  const delay = Math.random() * 500 + 200;
  setTimeout(() => {
    const event = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    button.dispatchEvent(event);
    console.log("Button clicked");
  }, delay);
  console.log("Simulating human-like click with delay");
}

function observeDOMChanges() {
  const observer = new MutationObserver(() => {
    checkForAds();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  console.log("Started observing DOM changes");
}

observeDOMChanges();
