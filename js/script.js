const getName=()=>{
   let inputPhone= document.getElementById('phone-name');
   let inputPhoneText= document.getElementById('phone-name').value;
  inputPhone.value='';
  return inputPhoneText;
}
const loadPhone = () => {
   const url=` https://openapi.programming-hero.com/api/phones?search=${getName()}`
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));
};
