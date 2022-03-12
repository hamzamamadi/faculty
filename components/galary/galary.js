import React from "react"

import { HiOutlineChevronDoubleLeft } from "react-icons/hi";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";

function Galary () {
    return (

<div className='galary' >
  <div className="over"><h1 className="text">كلية العلوم الدقيقة <span> <img src="/math.png" alt="" /></span> </h1>

  </div>
    <div className='thefinal' style={{right:"0vw"}}  >



<img  src="/background.jpg"  ></img>
<img  src="/books.jpg"  ></img>
<img  src="/logo.jpg"  ></img>
<img  src="/background.jpg"  ></img>
<img  src="/books.jpg"  ></img>
<img  src="/logo.jpg"  ></img>




</div>
</div>
      );
}


function MyMoveright( ) {
  const elem = document.getElementsByClassName("thefinal");

       let num= elem[0].style.right
       console.log(num)

     var left = parseInt(num,10);
       console.log(left)
       if(left<=-800)
       left=0


let i=0;
     let id = null;



        clearInterval(id);
        id = setInterval(frame , 30);
        i=0;
        function frame() {

          if (i ==10 ) {          console.log(left)

            clearInterval(id);

return;


          }

          else {++i;


            elem[0].style.right =(-10*i+left) + 'vw';
            console.log(i,typeof(left) )
          }
        }
       }
       function MyMoveleft( ) {
         const elem = document.getElementsByClassName("thefinal");

        let num= elem[0].style.right
        console.log(num)

      var left = parseInt(num,10);
        console.log(left)
        if(left>=-100)
        left=0


 let i=0;
      let id = null;



         clearInterval(id);
         id = setInterval(frame , 30);
         i=0;
         function frame() {

           if (i ==10 ) {          console.log(left)

             clearInterval(id);

 return;


           }

           else {++i;


             elem[0].style.right =(10*i+left) + 'vw';
             console.log(i,typeof(left) )
           }
         }




}

export default Galary;
