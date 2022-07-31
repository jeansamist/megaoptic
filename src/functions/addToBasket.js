export default function addToBasket(id) {
  const basketbtn = document.querySelector('.basket-btn')
  basketbtn.classList.add('active')
  let localstorageContent
  localstorageContent = JSON.parse(localStorage.getItem('basket'))
  if (!localstorageContent) localstorageContent = []
  for (let content in localstorageContent) {
    if (content == id) return
  }
  localstorageContent.push(id)
  localStorage.setItem('basket', JSON.stringify(localstorageContent))
}