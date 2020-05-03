const randomUserUrl = "https://randomuser.me/api/";

async function getUser() {
  try {
    const response = await fetch(randomUserUrl);
    const user = await response.json();

    const userResults = user.results;
    const userSeed = user.info;

    createRandomUser(userResults, userSeed);
  } catch (error) {
    console.log(error);
  }
}

getUser();

function createRandomUser(userResults, userSeed) {
  console.log(userResults);

  const result = document.querySelector(".results");

  let html = "";

  for (let i = 0; i < userResults.length; i++) {
    html += `
    <div class="col-sm-6 col-md-4 col-lg-3">
    <div class="card">
        <img class="image" src="${userResults[i].picture.large}" alt="Title/Name" />
        <div class="details">
            <h4 class="name">${userResults[i].name.first} ${userResults[i].name.last}</h4>
            <p><b>Gender:</b> ${userResults[i].gender}</p>
            <p><b>Age: </b> ${userResults[i].dob.age}</p>
            <p><b>Country: </b> ${userResults[i].location.country}</p>
            <a class="btn btn-primary" href="details.html?seed=${userSeed.seed}">Details</a>
        </div>
    </div>
        `;
  }
  result.innerHTML = html;
}
