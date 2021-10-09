const redo=document.querySelector('#reset')
const colorSelector=document.querySelector('#colorselector')
const randomButton= document.querySelector('#colors')
randomButton.addEventListener('click',()=>{
  const  r=Math.floor(Math.random()*255)
  const g=Math.floor(Math.random()*255)
  const b=Math.floor(Math.random()*255)
  const final=`RGB(${r},${g},${b})`
  document.body.style.backgroundColor=final
  colorSelector.innerHTML=final
})
reset.addEventListener('click',()=>{
  const  r=255
  const g=255
  const b=255
  const final=`RGB(${r},${g},${b})`
  document.body.style.backgroundColor=final
  colorSelector.innerHTML=final
  
})
