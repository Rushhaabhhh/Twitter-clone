document.getElementById("tweet-button").addEventListener("click", function () {
    const tweetInput = document.getElementById("tweet-input");
    const tweetText = tweetInput.value.trim();
  
    if (tweetText) {
      const tweet = document.createElement("div");
      tweet.classList.add("tweet");
      tweet.innerHTML = `
        <p>${tweetText}</p>
        <button class="like-button">Like</button>
        <button class="delete-button">Delete</button>
        <div class="comments">
          <div class="comment-list"></div>
          <input type="text" class="comment-input" placeholder="Add a comment...">
          <button class="comment-button">Comment</button>
        </div>
      `;
  
      document.querySelector(".tweets").appendChild(tweet);
      tweetInput.value = "";
    }
  });
  
  document.querySelector(".tweets").addEventListener("click", function (event) {
    if (event.target.classList.contains("like-button")) {
      event.target.textContent = "Liked";
    } else if (event.target.classList.contains("delete-button")) {
      event.target.parentNode.remove();
    } else if (event.target.classList.contains("comment-button")) {
      const commentInput = event.target.previousElementSibling;
      const commentText = commentInput.value.trim();
  
      if (commentText) {
        const commentList = event.target.parentNode.previousElementSibling;
        const comment = document.createElement("div");
        comment.classList.add("comment");
        comment.innerHTML = `
          <p>${commentText}</p>
          <button class="delete-comment-button">Delete</button>
        `;
  
        commentList.appendChild(comment);
        commentInput.value = "";
      }
    } else if (event.target.classList.contains("delete-comment-button")) {
      event.target.parentNode.remove();
    }
  });