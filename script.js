document.addEventListener('DOMContentLoaded', function () {
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const commentsContainer = document.getElementById('comments-container');

    // Function to add a new comment
    function addComment(commentText) {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.textContent = commentText;
        commentsContainer.appendChild(commentDiv);
    }

    // Function to handle comment submission
    function submitComment(event) {
        event.preventDefault();
        const newComment = commentInput.value.trim();

        if (newComment !== '') {
            addComment(newComment);
            commentInput.value = '';
        }
    }

    commentForm.addEventListener('submit', submitComment);
});
