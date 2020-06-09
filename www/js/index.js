document.addEventListener('deviceready', function(event) {
  console.log('initialize')
})

document.addEventListener('init', (event) => {
  // Set click events
  document.getElementById('button_ready1').addEventListener('click', this.onClickReady1, false)
  document.getElementById('button_shout1').addEventListener('click', this.onClickShout1, false)
  document.getElementById('button_ready2').addEventListener('click', this.onClickReady2, false)
  document.getElementById('button_shout2').addEventListener('click', this.onClickShout2, false)
})

function onClickReady1 () {
  onClickButton('standby1.jpg', null)
  return
}

function onClickReady2 () {
  onClickButton('standby2.jpg', null)
  return
}

function onClickShout1 () {
  onClickButton('sht1.jpg', 'sht1.mp3')
  return
}

function onClickShout2 () {
  onClickButton('sht2.jpg', 'sht2.mp3')
  return
}

/**
 * Set Button Click Event
 * @param {String} imageName image file name to show
 * @param {String} soundName sound file name to play
 */
function onClickButton(imageName, soundName) {
  if (!imageName) imageName = 'standby1'
  if (!soundName) soundName = null

  // change image
  const element = document.getElementById('marmot_image')
  element.src = 'img/' + imageName

  // play sound if specified
  if (!soundName) return
  const media = new Media('/android_asset/www/audio/' + soundName, function() {
    console.log('success')
  }, function(err) {
    console.log(err)
  })
  console.log(media)
  media.play()
  setTimeout(function () {
    media.stop()
    media.release()
  }, 5000)

  return
}
