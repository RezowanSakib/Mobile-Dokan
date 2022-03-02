const getName = () => {
  let inputPhone = document.getElementById("phone-name");
  const emptySearch = document.getElementById("empty");
  if (inputPhone.value === "") {
    emptySearch.innerHTML = `<h2>Please input a phone name</h2>`;
  } else {
    let inputPhoneText = inputPhone.value.toLowerCase();
    emptySearch.innerHTML = "";
    inputPhone.value = "";
    const url = ` https://openapi.programming-hero.com/api/phones?search=${inputPhoneText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => displayPhone(data.data));
  }
};

const displayPhone = (phones) => {
  const searchResult = document.getElementById("result");
  searchResult.innerHTML = ``;
  phones.forEach((phone) => {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `<div class="col">
   <div class="card h-100">
     <img src="${phone.image}" class="card-img-top" alt="..." />
     <div class="card-body">
       <h5 class="card-title">${phone.phone_name}</h5>
       <p class="card-text">
         ${phone.brand}.
       </p>
     </div>
     <button onclick="loadPhoneDetail('${phone.slug}')" class="w-25 mx-auto">Details</button>
   </div>
 </div>`;
    searchResult.appendChild(div);
  });
};
const loadPhoneDetail = (phoneSlug) => {
  const url = `https://openapi.programming-hero.com/api/phone/${phoneSlug}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPhoneDetail(data.data));
};
const displayPhoneDetail = (phone) => {
  console.log(phone);
  const phoneDetail = document.getElementById("phone-detail");
  phoneDetail.innerHTML = ``;
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
  <div class="row g-0">
  <div class="col-md-4">
    <img src="${phone.image}" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${phone.name}</h5>
      <h5 class="card-title">${
        phone?.releaseDate || "Release date not found"
      }</h5>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
  `;
  phoneDetail.appendChild(div);
};
