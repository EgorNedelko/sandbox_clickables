const clickables = [
   document.getElementById('clickableHeading1'),
   document.getElementById('clickableHeading2'),
   document.getElementById('clickableHeading3'),
   document.getElementById('clickableHeading4'),
   document.getElementById('clickableHeading5'),
   document.getElementById('clickableHeading6'),
   document.getElementById('clickableParagraph'),
   document.getElementById('clickableUListItem'),
   document.getElementById('clickableOListItem'),
   document.getElementById('clickableDIV'),
   document.getElementById('clickableSPAN'),
   document.getElementById('clickableIMG')
]

clickables.forEach(el => {
   el.addEventListener('click', () => {
      el.classList.add('pressed')
      setTimeout(()=>{
         el.classList.remove('pressed')
      }, 115)
   })
})