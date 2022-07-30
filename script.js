
let search = document.getElementById("search")
let searchResults = document.getElementById("searchResults")
let searchButton = document.getElementById("searchButton")

function getData() {
    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search.value}&key=AIzaSyB_0eDhnTPdODs8D2PhQ6vWIPY7IILAAXc`
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        searchResults.textContent = ""
        for(let item of data['items']){
            let link = `https://www.youtube.com/embed/${item['id']['videoId']}`
            let videoBox = document.createElement("div")
            videoBox.classList.add("col-12") 
            videoBox.classList.add("col-md-4") 
            searchResults.appendChild(videoBox)
            let videoIFrame = document.createElement("iframe")
            videoIFrame.src = link 
            videoBox.appendChild(videoIFrame)
        }
      });
}

searchButton.addEventListener("click", getData)

