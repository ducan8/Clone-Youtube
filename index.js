let FullData = [
    {
        id: 1,
        imageVideo: './image/thumbnail/thumbnail1.jpg',
        titleVideo: '3 Hours! You Can Speak Like a Native Speaker',
        lengthVideo: '3:01:27',
        channelName: 'Learn English with EnglishClass101.com',
        channelAvatar: './image/avatarChannel/avatar1.jpg',
        views: '3,1 Tr lượt xem',
        dayUpload: '2 năm trước'
    },
    {
        id: 2,
        imageVideo: './image/thumbnail/thumbnail2.webp',
        titleVideo: 'Christmas Full Album 2024: Soft Piano Music',
        lengthVideo: '24:04:04',
        channelName: 'Soothing Christmas Music',
        channelAvatar: './image/avatarChannel/avatar2.jpg',
        views: '26 N lượt xem',
        dayUpload: '2 tuần trước'
    },
    {
        id: 3,
        imageVideo: './image/thumbnail/thumbnail3.webp',
        titleVideo: 'Do It Today: Overcome Procrastination, Improve Productivity',
        lengthVideo: '3:08:40',
        channelName: 'Waquas Ahmed',
        channelAvatar: './image/avatarChannel/avatar3.jpg',
        views: '478 N lượt xem',
        dayUpload: '10 tháng trước'
    },
    {
        id: 4,
        imageVideo: './image/thumbnail/thumbnail4.webp',
        titleVideo: 'Complete Responsive Food website using HTML, CSS, Bootstrap and JavaScript',
        lengthVideo: '3:48:19',
        channelName: 'Techie Coder',
        channelAvatar: './image/avatarChannel/avatar4.jpg',
        views: '55 N lượt xem',
        dayUpload: '2 năm trước'
    },
    {
        id: 5,
        imageVideo: './image/thumbnail/thumbnail5.jpg',
        titleVideo: "Bruno Mars - That is What I Like [Official Music Video]",
        lengthVideo: '3:31',
        channelName: 'Bruno Mars',
        channelAvatar: './image/avatarChannel/avatar5.jpg',
        views: '2,2 T lượt xem',
        dayUpload: '6 năm trước'
    },
    {
        id: 6,
        imageVideo: './image/thumbnail/thumbnail6.jpg',
        titleVideo: '100+ JavaScript Concepts you Need to Know',
        lengthVideo: '12:24',
        channelName: 'Fireship',
        channelAvatar: './image/avatarChannel/avatar6.jpg',
        views: '1,4 Tr lượt xem',
        dayUpload: '1 năm trước'
    },
    {
        id: 7,
        imageVideo: './image/thumbnail/thumbnail7.jpg',
        titleVideo: 'Learn Flexbox CSS in 8 minutes',
        lengthVideo: '8:16',
        channelName: 'Slaying The Dragon',
        channelAvatar: './image/avatarChannel/avatar7.jpg',
        views: '940 N lượt xem',
        dayUpload: '1 năm trước'
    },
    {
        id: 8,
        imageVideo: './image/thumbnail/thumbnail8.jpg',
        titleVideo: 'How To Speak Fluently In English',
        lengthVideo: '1:49:55',
        channelName: 'EnglishAnyone',
        channelAvatar: './image/avatarChannel/avatar8.jpg',
        views: '1,6 Tr lượt xem',
        dayUpload: '8 tháng trước'
    },
    {
        id: 9,
        imageVideo: './image/thumbnail/thumbnail9.jpg',
        titleVideo: 'You Just Need a Native English Speaker',
        lengthVideo: '59:48',
        channelName: 'Andrej Karpathy',
        channelAvatar: './image/avatarChannel/avatar9.jpg',
        views: '35 N lượt xem',
        dayUpload: '6 giờ trước'
    },
    {
        id: 10,
        imageVideo: './image/thumbnail/thumbnail10.webp',
        titleVideo: 'Data Science Job Interview – Full Mock Interview',
        lengthVideo: '1:25:04',
        channelName: 'freeCodeCamp.org',
        channelAvatar: './image/avatarChannel/avatar10.jpg',
        views: '352 N lượt xem',
        dayUpload: '8 tháng trước'
    },
    {
        id: 11,
        imageVideo: './image/thumbnail/thumbnail11.webp',
        titleVideo: 'chill rainy night lofi',
        lengthVideo: '11:54:57',
        channelName: 'Aethetic Lofi',
        channelAvatar: './image/avatarChannel/avatar11.jpg',
        views: '378 N lượt xem',
        dayUpload: '6 tháng trước'
    },
    {
        id: 12,
        imageVideo: './image/thumbnail/thumbnail12.webp',
        titleVideo: 'Harvard Professor Explains Algorithms in 5 Levels of Difficulty',
        lengthVideo: '25:47',
        channelName: 'WIRED',
        channelAvatar: './image/avatarChannel/avatar12.jpg',
        views: '549 N lượt xem',
        dayUpload: '2 tuần trước'
    },

]


let menuBtn = document.querySelector(".menu-button");

menuBtn.addEventListener("click", () => {
    sidebarLarge = document.querySelector(".full-side-bar-large");
    sidebarMedium = document.querySelector(".full-side-bar-medium");
    if (sidebarMedium.classList.contains("d-lg-none")) {
        sidebarMedium.classList.replace("d-lg-none", "d-lg-block");
        sidebarLarge.classList.replace("d-lg-block", "d-lg-none");

    } else if (sidebarLarge.classList.contains("d-lg-none")) {
        sidebarMedium.classList.replace("d-lg-block", "d-lg-none");
        sidebarLarge.classList.replace("d-lg-none", "d-lg-block");
    }
})


let videos = document.querySelector(".videos");
console.log(videos);
let html = FullData.map((video) => {
    return `
    <div class="col-lg-4 col-md-6 col-sm-12 col-12 pb-3">
        <div class="card card-video border-0">
            <div class="container-fluid p-0" style="position: relative;">
                <img class="card-img-top " src="${video.imageVideo}" alt="">
                <span class="badge badge-dark lengthVideo">${video.lengthVideo}</span>
            </div>
            <div class="card-info mt-2">
                <div class="row">
                    <div class="col-2">
                        <img src="${video.channelAvatar}" class="avt-channel" style="width: 40px; height: 40px;" alt="">
                    </div>
                    <div class="col-10 pl-2">
                        <h5 class="card-title overflow-hidden m-0" style="font-weight:600">${video.titleVideo}</h5>
                            <p class="card-text m-0" style="font-size: 14px; color: #606060">${video.channelName}</p>
                            <div>
                                <span class="d-inline" style="font-size: 14px; color: #606060">${video.views}</span> -
                                <span class="d-inline" style="font-size: 14px; color: #606060">${video.dayUpload}</span>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}).join("")
console.log(html);
videos.innerHTML = html