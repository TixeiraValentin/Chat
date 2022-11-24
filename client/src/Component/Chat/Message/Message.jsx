import "./message.css"

export default function Message({own}) {
  
  
  return (
    <>
    <div className={own ? "message own" : "message"}>
        <div className="messageTop">
            <img
                className="messageImg" 
                src="https://res.cloudinary.com/blackhound/image/upload/v1669295485/WhatsApp_Image_2022-11-18_at_4.22.23_PM_uj8maz.jpg" 
                alt=""
            />
            <p className="messageText">Hola este es un mensaje</p>
        </div>
        <div className="messageBottom">Hace 1 hora</div>
    </div>
    </>
  )
}
