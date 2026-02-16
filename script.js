const shareButton = document.querySelector('.share__button')
const shareTooltip = document.querySelector('.share-tooltip')
const leftSide = document.querySelector('.left__side')

shareButton.addEventListener('click', function () {
  shareTooltip.classList.toggle('active')
  leftSide.classList.toggle('hidden')
  shareButton.classList.toggle('active')
})
