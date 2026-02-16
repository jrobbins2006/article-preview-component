const shareButton = document.querySelector('.share__button')
const shareTooltip = document.querySelector('.share-tooltip')
const leftSide = document.querySelector('.left__side')

shareButton.addEventListener('click', function () {
  shareTooltip.classList.toggle('active')
  leftSide.classList.toggle('hidden')

  // Toggle between the two SVG sources
  if (shareButton.src.includes('icon-share.svg')) {
    shareButton.src = './images/icon-share-white.svg' // or whatever you named it
  } else {
    shareButton.src = './images/icon-share.svg'
  }
})
