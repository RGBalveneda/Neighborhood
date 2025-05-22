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
  <ProfileCard name={"sexo2"} address={"sexo3"} email={"sexo4"} occupation={"sexo5"} skills={["sexo","sexito"]}/>
    </div>
    <div className="perfdiv3">
<Footer/>
    </div>
</div>
    

    
    

  )
}
