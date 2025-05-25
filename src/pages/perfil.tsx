import ProfileCard from "../components/profile-card"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Perfil() {
  return (
<div className="perfil">
    <div className="perfdiv1">
     <Header/>
    </div>

    <div className="perfdiv2">
  <ProfileCard name={"Camila Rivas"} address={"Suc. Villa Galaxia Avenida Juan Pablo II No. 1723 Col. Villa Galaxia Suc. Villa verde av. jacarandas #122 col. villa verde Suc. Alarcon av. Delfines #450 inf. Alarcon Suc. Real del Valle Av. oscar perez escobosa #8014 Plaza punto 07 Local 1 y 2 , Mazatlán, Mexico"} email={"camila.rivas.dev@example.com"} occupation={"Diseñadora UX/UI"} skills={["Html","CSS","Javascript", "React", "Figma"]}/>
    </div>
    <div className="perfdiv3">
<Footer/>
    </div>
</div>
    

    
    

  )
}
