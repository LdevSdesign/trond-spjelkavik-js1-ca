const querystring = document.location.search;
const params = new URLSearchParams(querystring);

const randomUserUrl = "https://randomuser.me/api/";
const userUrl = `${randomUserUrl}?seed=`;
const seed = params.get("seed");

const userpage = userUrl + seed;

console.log(userpage);

async function getUserDetails() {
  try {
    const response = await fetch(userpage);
    const user = await response.json();

    const userResults = user.results;

    randomUserId(userResults);
  } catch (error) {
    console.log(error);
  }
}

getUserDetails();

function randomUserId(userResults) {
  console.log(userResults);

  const result = document.querySelector(".detail-container");

  let html = "";

  for (let i = 0; i < userResults.length; i++) {
    document.title = userResults[i].name.first;

    html += `
    <img class="details-image" src="${userResults[i].picture.large}" alt="Title/Name" />
    <div class="detail-details">
        <h1>${userResults[i].name.title} ${userResults[i].name.first} ${userResults[i].name.last}</h1>
        <p>Email: <span class="value" id="propertyName">${userResults[i].email}</span></p>
        <p>Phone: <span class="value" id="propertyName">${userResults[i].phone}</span></p>
        <p>City: <span class="value" id="propertyName">${userResults[i].location.city}</span></p>
        <p>State: <span class="value" id="propertyName">${userResults[i].location.state}</span></p>
    </div>
        `;
  }
  result.innerHTML = html;
}
