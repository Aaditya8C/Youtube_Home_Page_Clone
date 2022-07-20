// const videoCardContainer = document.querySelector('.video-container')

// let api = "AIzaSyD-Vlqi2y98dRNIBWFrR-WDSB9CDG1eUzQ";
// let video_http = "https://www.googleapis.com/youtube/v3/videos?";
// let channel_http = "https://www.googleapis.com/youtube/v3/channels?";

// fetch(video_http + new URLSearchParams({
//     key:api,
//     part:"snippet",
//     chart:"mostPopular",
//     maxResults:1,
//     regionCode:"IN"
// }))
// .then(res => res.json())
// .then(data => {
//     console.log(data);
//     data.items.forEach(item => {
//         getChannelIcon(item);
//     });
// })
// .catch(err => console.log(err))

// const getChannelIcon = (video_data) =>{
//     fetch(video_http + new URLSearchParams({
//         key:api,
//         part:"snippet",
//         id:video_data.snippet.channelId
//     }))
//     .then(res => res.json())
//     .then(data => {
//         // console.log(data);
//         video_data.channelThumbnail = data.items[0].snippet.thumbnail.default.url;
//         console.log(video_data);
//         makeVideoCard(video_data);

//     })
// }


// const makeVideoCard = (data) =>{
//     videoCardContainer.innerHTML += `
//     <div class="video">
//             <img src="${data.snippet.thumbnails.high.url}" class="thumbnail">
//             <div class="content">
//                 <img src="${data.channelThumbnail}" alt="" class="channel-icon">
//                 <div class="info">
//                     <h4 class="title">${data.snippet.title}</h4>
//                     <p class="channel-name">${data.snippet.channelTitle}</p>
//                 </div>
//             </div>
//         </div>
//     `
// }




const videoCardContainer = document.querySelector('.video-container');

let api_key = "AIzaSyD-Vlqi2y98dRNIBWFrR-WDSB9CDG1eUzQ";
let video_http = "https://www.googleapis.com/youtube/v3/videos?";
let channel_http = "https://www.googleapis.com/youtube/v3/channels?";

fetch(video_http + new URLSearchParams({
    key: api_key,
    part: 'snippet',
    chart: 'mostPopular',
    maxResults: 50, /* this is maximum number of videos we want to show on the screen of YT*/
    regionCode: 'IN'
}))
.then(res => res.json())
.then(data => {
    data.items.forEach(item => {
        getChannelIcon(item);
    })
})
.catch(err => console.log(err));

const getChannelIcon = (video_data) => {
    fetch(channel_http + new URLSearchParams({
        key: api_key,
        part: 'snippet',
        id: video_data.snippet.channelId
    }))
    .then(res => res.json())
    .then(data => {
        video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
        makeVideoCard(video_data);
    })
}

const makeVideoCard = (data) => {
    videoCardContainer.innerHTML += `
    <div class="video" onclick="location.href = 'https://youtube.com/watch?v=${data.id}'">
        <img src="${data.snippet.thumbnails.high.url}" class="thumbnail" alt="">
        <div class="content">
            <img src="${data.channelThumbnail}" class="channel-icon" alt="">
            <div class="info">
                <h4 class="title">${data.snippet.title}</h4>
                <p class="channel-name">${data.snippet.channelTitle}</p>
            </div>
        </div>
    </div>
    `;
}




// search bar

const searchInput = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search-btn');
let searchLink = "https://www.youtube.com/results?search_query=";

searchBtn.addEventListener('click', () => {
    if(searchInput.value.length){
        location.href = searchLink + searchInput.value;
    }
})



function music(){
    location.href = searchLink + 'music';
}
function trending(){
    location.href = searchLink + 'trending';
}
function wd(){
    location.href = searchLink + 'web development';
}
function ad(){
    location.href = searchLink + 'android development';
}
function react(){
    location.href = searchLink + 'react js';
}
function ml(){
    location.href = searchLink + 'machine learning';
}
function politics(){
    location.href = searchLink + 'politics';
}
function gaming(){
    location.href = searchLink + 'gaming';
}
function coding(){
    location.href = searchLink + 'coding';
}