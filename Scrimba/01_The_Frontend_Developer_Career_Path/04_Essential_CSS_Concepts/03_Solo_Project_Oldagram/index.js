const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
];

const likesEl = document.getElementById("likes");

for (let i = 0; i < posts.length; i++) {

    postEl.innerHTML +=
        `<main>
        <div class="post">
            <div class="post-header">
                <img class="post-avatar" src="${posts[i].avatar}" alt="post avatar">
                    <div class="post-user">
                        <h3 class="post-username">${posts[i].name}</h3>
                        <p class="post-location">${posts[i].location}</p>
                    </div>
            </div>
            <img id="post-image" class="post-image" src="${posts[i].post}" alt="post image">
        </div>
    </main >
    <footer class="footer">
        <div class="footer-icons">
            <img id="like-icon" class="icon" src="./images/icon-heart.png" alt="like icon">
            <img class="icon" src="./images/icon-comment.png" alt="comment icon">
            <img class="icon" src="./images/icon-dm.png" alt="share icon">
        </div>
        <p class="likes" id="likes" onclick=-"like()">${posts[i].likes} likes</p>
        <p class="comments"><span>${posts[i].username}</span> ${posts[i].comment}</p>
    </footer>`;
}