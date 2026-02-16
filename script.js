const shareButton = document.querySelector('.share__button')
const shareTooltip = document.querySelector('.share-tooltip')

shareButton.addEventListener('click', function () {
  shareTooltip.classList.toggle('active')
})
