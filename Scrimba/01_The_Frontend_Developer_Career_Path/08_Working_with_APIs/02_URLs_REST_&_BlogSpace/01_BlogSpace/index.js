let postsArray = [];
const titleInput = document.getElementById("post-title");
const bodyInput = document.getElementById("post-body");
const form = document.getElementById("new-post");

function renderPosts() {
    let html = "";
    for (let post of postsArray) {
        html += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr />
            `;
    }
    document.getElementById("blog-list").innerHTML = html;
}

/* #1 */
fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    /* #2 */
    .then(data => {
        postsArray = data.slice(0, 5);
        renderPosts();
    });


/* #6 */

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const postTitle = titleInput.value;
    const postBody = bodyInput.value;
    const data = {
        title: postTitle,
        body: postBody
    };

    /* #7 */
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        },
    };

    fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
        .then(res => res.json())
        /* 8 */
        .then(post => {
            postsArray.unshift(post);
            renderPosts();
            /* titleInput.value = "";
            bodyInput.value = ""; */
            form.reset();
        });
});
