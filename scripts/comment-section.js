let comments = JSON.parse(localStorage.getItem("comments")) || [];

const form = document.getElementById("form");
const commentsContainer = document.getElementById("comments-container");

function formatDate(dateString) {
  const date = new Date(dateString);
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}

function dynamicTimestamp(date) {
  const currentDate = new Date();
  const seconds = Math.floor((currentDate - date) / 1000);
  const intervals = [
    { label: "year", timestamp: 31536000 },
    { label: "month", timestamp: 2592000 },
    { label: "day", timestamp: 86400 },
    { label: "hour", timestamp: 3600 },
    { label: "minute", timestamp: 60 },
  ];

  for (const interval of intervals) {
    const timestamp = seconds / interval.timestamp;
    if (timestamp >= 1) {
      return `${Math.floor(timestamp)} ${interval.label}${
        Math.floor(timestamp) === 1 ? "" : "s"
      } ago`;
    }
  }

  return seconds > 0 && seconds < 60
    ? `${Math.floor(seconds)} second${Math.floor(seconds) === 1 ? "" : "s"} ago`
    : "just now";
}

function renderComment(comment) {
  const commentBlock = document.createElement("div");
  commentBlock.classList.add("comments__card");

  const commentInfo = document.createElement("div");
  commentInfo.classList.add("comments__card__info");
  commentBlock.appendChild(commentInfo);

  const commentName = document.createElement("p");
  commentName.classList.add("comments__card__info--name");
  commentName.textContent = comment.name;
  commentInfo.appendChild(commentName);

  const commentDate = document.createElement("p");
  commentDate.classList.add("comments__card__info--date");
  commentDate.textContent = dynamicTimestamp(new Date(comment.timestamp));
  commentInfo.appendChild(commentDate);

  const commentText = document.createElement("p");
  commentText.classList.add("comments__card__text");
  commentText.textContent = comment.text;
  commentBlock.appendChild(commentText);

  commentsContainer.appendChild(commentBlock);
}

function sortCommentsByDate(comments) {
  return comments.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
}

function updateErrorField(field, value) {
  if (value === "") {
    field.classList.add("error");
  } else {
    field.classList.remove("error");
  }
}

const handleFormSubmit = (e) => {
  e.preventDefault();

  let nameInput = form.name.value;
  let commentInput = form.comment.value;

  updateErrorField(form.name, nameInput);
  updateErrorField(form.comment, commentInput);

  if (nameInput !== "" && commentInput !== "") {
    const newComment = {
      name: nameInput,
      timestamp: new Date(),
      text: commentInput,
    };

    comments.push(newComment);
    localStorage.setItem("comments", JSON.stringify(comments));
    commentsContainer.innerHTML = "";
    sortAndRender();
    form.reset();
  }
};

const sortAndRender = () => {
  sortCommentsByDate(comments).forEach(renderComment);
};

sortAndRender();

form.addEventListener("submit", handleFormSubmit);
