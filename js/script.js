const getName = () => {
  let inputPhone = document.getElementById("phone-name");
  const emptySearch = document.getElementById("empty");
  emptySearch.classList.add('text-center')
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
   <div class="card rounded h-100">
     <img src="${phone.image}" class="card-img-top img-fluid p-5" alt="..." />
     <div class="card-body">
       <h5 class="card-title">${phone.phone_name}</h5>
       <p class="card-text">
         ${phone.brand}.
       </p>
     </div>
     <button onclick="loadPhoneDetail('${phone.slug}')" class="w-25 mx-auto rounded my-4 btn-secondary">Details</button>
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
  <div class="row p-3">
  <div class="col-lg-4">
    <img src="${phone.image}" class="img-fluid rounded-start mx-auto" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${phone.name}</h5>
      <h5 class="card-title">${
        phone?.releaseDate || "Release date not found"
      }</h5>
      <h3>Main Features:</h3>
      <h6>Storage : ${phone.mainFeatures.storage}</h6>
      <h6>Display Size : ${phone.mainFeatures.displaySize}</h6>
      <h6>ChipSet : ${phone.mainFeatures.chipSet}</h6>
      <h6>Memory : ${phone.mainFeatures.memory}</h6>
      <h4>Sensors:${phone.mainFeatures.sensors[0]} , ${
    phone.mainFeatures.sensors[1]
  } ,${phone.mainFeatures.sensors[2]} , ${phone.mainFeatures.sensors[3]} ,${
    phone.mainFeatures.sensors[4]
  } ,${phone.mainFeatures.sensors[5]}.</h4>
  <h4>Others: </h4>
  <h6>WLAN : ${phone.others.WLAN}</h6>
  <h6>Bluetooth : ${phone.others.Bluetooth}</h6>
  <h6>GPS : ${phone.others.GPS}</h6>
  <h6>Radio : ${phone.others.Radio}</h6>
  <h6>USB : ${phone.others.USB}</h6>
    </div>
  </div>
</div>
  `;
  phoneDetail.appendChild(div);
};
