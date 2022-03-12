import Gab from "../components/galary/galary"
import Heb from "../components/header/header"



function MyApp({ children }) {
  return(<>
    <Heb></Heb>
    <Gab></Gab>
    {children}
</>


  )
}

export default MyApp
