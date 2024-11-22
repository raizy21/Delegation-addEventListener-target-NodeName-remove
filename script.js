const tweetForm = document.querySelector("#tweetForm"); //select form
const tweetsContainer = document.querySelector("#tweets"); //select ul
//add event listener submit  file:///C:/tweet?username=&tweet=
tweetForm.addEventListener("submit", function (e) {
  e.preventDefault(); //prevent the submit
  const usernameInput = tweetForm.elements.username; //select element
  const tweetInput = tweetForm.elements.tweet; //select element
  addTweet(usernameInput.value, tweetInput.value); //add the inputs to method
  usernameInput.value = ""; //set empty
  tweetInput.value = ""; //set empty
});

const addTweet = (username, tweet) => {
  //method with inputs
  const newTweet = document.createElement("li"); //create a li
  const bTag = document.createElement("b"); //create a bold tag
  bTag.append(username); //append bold tag to first input
  newTweet.append(bTag); //append bold Tag in li
  newTweet.append(`- ${tweet}`); //append a String with the input
  tweetsContainer.append(newTweet); //append li to ul
};

//add a event listener click to every ul
tweetsContainer.addEventListener("click", function (e) {
  e.target.nodeName === "LI" && e.target.remove(); //remove only clicked li
});
