import { FC } from "react"

type Props = {
    img: string,
    title: string,
    desc: string,
}
const CustomServiceCards: FC<Props> = ({img, title, desc}) => {
  return (
    <div className="service-card">
      <img src={img} alt="" className="service-card-img"/>
      <h3 className="service-card-title">{title}</h3>
      <p className="service-card-desc">{desc}</p>
    </div>
  )
}

export default CustomServiceCards
