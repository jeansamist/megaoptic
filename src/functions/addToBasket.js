export default function addToBasket(id, cover, color, price, name) {
  const basketbtn = document.querySelector(".basket-btn");
  const payload = {
    id,
    cover,
    color,
    price,
    name,
  };
  basketbtn.classList.add("active");
  let localstorageContent;
  localstorageContent = JSON.parse(localStorage.getItem("basket"));
  if (!localstorageContent) localstorageContent = [];
  for (let content in localstorageContent) {
    if (content == payload) return;
  }
  localstorageContent.push(payload);
  localStorage.setItem("basket", JSON.stringify(localstorageContent));
}
