function checkForAds() {
  console.log("YouTube Ad Skipper is running");

  const adContainer = document.querySelector(".ad-showing");
  const skipButton = document.querySelector(".ytp-ad-skip-button");

  if (adContainer) {
    document.querySelector("video").playbackRate = 16;
    console.log("Speeding up the ad");
  }

  if (skipButton) {
    skipButton.click();
  }
}

setInterval(checkForAds, 1000);
