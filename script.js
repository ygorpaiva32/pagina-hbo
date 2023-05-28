const video = document.getElementById("video-player")

const videosource = [
  'https://cmaf.fly.latam.hbomaxcdn.com/videos/GYuFxFgzSGcIMvgEAAAAG/v/0_3d5bc3/v12.mp4',
  "https://cmaf.akm.latam.hbomaxcdn.com/videos/GYk7rQgnSAJ25wgEAAAAC/0/cda460/v/v13.mp4",
  "https://cmaf.cf.latam.hbomaxcdn.com/videos/GYZ1KOABV3oydnQEAAAAE/0/f83e29/v/v11.mp4"
]

let currentVideoIndex = 0

video.addEventListener('ended', ()=> {

  if(currentVideoIndex === videosource.length -1){
    currentVideoIndex = 0
  }else{
    currentVideoIndex++
  }

  video.src = videosource[currentVideoIndex]

  video.play()
})

