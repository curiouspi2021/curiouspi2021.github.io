
let search = document.getElementById("search")
let searchResults = document.getElementById("searchResults")
let searchButton = document.getElementById("searchButton")
let videoId = document.getElementById("videoId")
let playButton = document.getElementById("playButton")
let youtubeAudio = document.getElementById("youtube-audio")

function playAudio(){
    // youtubeAudio.setAttribute("data-video", videoId.value) 
    youtubeAudio.classList.remove("d-none")
}

function getData() {
    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${search.value}&key=AIzaSyB_0eDhnTPdODs8D2PhQ6vWIPY7IILAAXc`
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        searchResults.textContent = ""
        for(let item of data['items']){
            let thumbnailUrl = item["snippet"]["thumbnails"]["default"]["url"]
            let videoBox = document.createElement("div")
            videoBox.classList.add("d-flex") 
            videoBox.classList.add("align-items-center") 
            videoBox.classList.add("border") 
            videoBox.classList.add("mx-2") 
            searchResults.appendChild(videoBox)
            let thumbnailImg = document.createElement("img")
            thumbnailImg.src = thumbnailUrl 
            videoBox.appendChild(thumbnailImg)
            let contentBox = document.createElement("div")
            contentBox.classList.add("mx-2")
            videoBox.appendChild(contentBox)
            let title = document.createElement("h5")
            title.textContent = item["snippet"]["title"]
            let id = document.createElement("p")
            id.textContent = item['id']['videoId']
            contentBox.appendChild(title)
            contentBox.appendChild(id)
        }
      });
}

searchButton.addEventListener("click", getData)
playButton.addEventListener("click", playAudio)

