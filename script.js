const userProfile = {
  name: "Akerke",
  birthYear: 2007,
  isDeveloper: true,
  hobbies: ["Reading", "Coding", "Football"]
};

const nameText = document.getElementById("p-name");
const ageText = document.getElementById("p-age");
const monthsText = document.getElementById("p-months");
const devText = document.getElementById("p-dev");
const countText = document.getElementById("p-count");
const message = document.getElementById("form-msg");
const list = document.getElementById("hobby-list");

function showInfo() {
  const currentYear = new Date().getFullYear();
  const age = currentYear - userProfile.birthYear;
  const months = age * 12;
  const count = userProfile.hobbies.length;

  nameText.textContent = userProfile.name;
  ageText.textContent = age;
  monthsText.textContent = months;
  devText.textContent = userProfile.isDeveloper;
  countText.textContent = count;

  console.log("Age:", age, "| Months:", months, "| Hobbies:", count);
}

document.getElementById("profile-form").addEventListener("submit", function (event) {
  event.preventDefault();

  userProfile.name = document.getElementById("username").value;
  userProfile.birthYear = Number(document.getElementById("birthYear").value);

  showInfo();
  message.textContent = "Profile updated!";
  message.style.color = "green";
});

document.getElementById("add-btn").addEventListener("click", function () {
  const input = document.getElementById("new-item");
  const itemText = input.value.trim();

  if (itemText === "") return;

  const li = document.createElement("li");
  li.textContent = itemText;
  list.appendChild(li);

  userProfile.hobbies.push(itemText);
  input.value = "";
  showInfo();
});


document.getElementById("remove-btn").addEventListener("click", function () {
  if (list.children.length === 0) return;
  list.lastElementChild.remove();
  userProfile.hobbies.pop();
  showInfo();
});

showInfo();