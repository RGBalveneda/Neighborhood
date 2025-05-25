import { Mail, MapPin, Briefcase, Wrench } from "lucide-react"
import "../styles/profile-card.css"
import PP from '../assets/perfil.png'


interface ProfileCardProps {
  name: string
  address: string
  email: string
  occupation: string
  skills: string[]
  avatarUrl?: string
  initials?: string
}

export default function ProfileCard2({
  name = "María González",
  address = "Av. Insurgentes Sur 1602, Ciudad de México",
  email = "maria.gonzalez@ejemplo.com",
  occupation = "Diseñadora UX/UI",
  skills = ["Diseño gráfico", "Investigación de usuarios", "Prototipado", "HTML/CSS"],
  avatarUrl = "/placeholder.svg?height=128&width=128",
  initials = "MG",
}: ProfileCardProps) {
  return (
    <div className="profile-card2">
      <div className="profile-header">
        <div className="avatar">
          {avatarUrl ? (
            <img src={PP} alt={name} />
          ) : (
            <div className="avatar-fallback">{initials}</div>
          )}
        </div>
        <h2 className="profile-name">{name}</h2>
        <p className="profile-occupation">
          <Briefcase className="icon" />
          <span>{occupation}</span>
        </p>
      </div>
      <div className="profile-content">
        <div className="profile-info">
          <MapPin className="icon" />
          <p>{address}</p>
        </div>

        <div className="profile-info">
          <Mail className="icon" />
          <a href={`mailto:${email}`} className="email-link">
            {email}
          </a>
        </div>

        <div className="skills-section">
          <div className="skills-header">
            <Wrench className="icon" />
            <h3>Oficios y habilidades</h3>
          </div>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <span key={index} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
