const getName = () => {
  let inputPhone = document.getElementById("phone-name");
  let inputPhoneText = document.getElementById("phone-name").value;
  inputPhone.value = "";
  const url = ` https://openapi.programming-hero.com/api/phones?search=${inputPhoneText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPhone(data.data));
};

const displayPhone = (phones) => {
 
  const searchResult=document.getElementById('result');
  phones.forEach(phone=>{
   console.log(phone);
   const div=document.createElement('div');
   div.classList.add('col');
   div.innerHTML=`<div class="col">
   <div class="card h-100">
     <img src="${phone.image}" class="card-img-top" alt="..." />
     <div class="card-body">
       <h5 class="card-title">${phone.phone_name}</h5>
       <p class="card-text">
         ${phone.slug}.
       </p>
     </div>
   </div>
 </div>`;
 searchResult.appendChild(div);
  })
 
};
