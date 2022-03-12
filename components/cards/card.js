import React from 'react'

import { BiLike } from "react-icons/bi";


export default function  card  (props) {
    return (
        <>

<a href="/">
  <div className="name">
        <div className='card'>
             <div className='imge' ><img src='/math.png'></img></div>
          </div>
  <h1 className="title3">الرياضيات</h1>
  </div>
</a>


<a href="/">
  <div className="name">
  <div className='card'>
       <div className='imge' ><img src='/computer.png'></img></div>


  </div>
  <h1 className="title3">علوم الحاسوب</h1>
  </div>
</a>


<a href="/">
  <div className="name">
  <div className='card'>
       <div className='imge' ><img src='/physics.png'></img></div>



  </div>
  <h1 className="title3">الفيزياء</h1>
  </div>
</a>
<a href="/">
  <div className="name">
  <div className='card'>
       <div className='imge' ><img src='/chemistry.png'></img></div>

  </div>
  <h1 className="title3">الكيمياء</h1>
  </div>

</a>




        </>
    )
}
