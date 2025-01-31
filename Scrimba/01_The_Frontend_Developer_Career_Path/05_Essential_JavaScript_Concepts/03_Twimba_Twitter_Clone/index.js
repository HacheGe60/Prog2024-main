import { tweetsData } from "./data.js";

const tweetInput = document.getElementById('tweet-input');
const tweetBtn = document.getElementById('tweet-btn');

tweetBtn.addEventListener('click', function () {
    console.log(tweetInput.value);
});

function getFeedHTML() {
    let feedHTML = '';
    tweetsData.forEach(function (tweet) {
        feedHTML += `<div class="tweet">
                        <div class="tweet-inner">
                            <img src="${tweet.profilePic}" class="profile-pic">
                            <div>
                                <p class="handle">${tweet.handle}</p>
                                <p class="tweet-text">${tweet.tweetText}</p>
                                <div class="tweet-details">
                                <i class="fa-solid fa-comment-dots"></i>
                                    <span class="tweet-detail">                                       
                                        ${(tweet.replies).length}
                                    </span>
                                    <span class="tweet-detail">
                                        ${tweet.likes}
                                    </span>
                                    <span class="tweet-detail">
                                        ${tweet.retweets}
                                    </span>
                                </div>   
                            </div>            
                        </div>
                    </div>`;
    });
    return feedHTML;
}

function render() {
    document.getElementById('feed').innerHTML = getFeedHTML();
}

render();