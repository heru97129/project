'use client'

class Verify{
  constructor(setpos,comp){
   this.setpos = setpos
   this.comp = comp
  }
handleWidth = () => {
    const position = window.innerWidth
 this.setpos(position)
 return position
}

 FindWidth = () => {
    window.addEventListener('resize', this.handleWidth, {passive: false});
    return () => {
        window.removeEventListener('resize', this.handleWidth);
    }; 
}
}

export default Verify