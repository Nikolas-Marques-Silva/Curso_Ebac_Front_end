import './perfil.css'

export default ({avatar, name}) => {
 return (
        <div>
            <img className="perfil-avatar" src={avatar} alt="" />
            <h3 className='perfil-title'>{name}</h3>
        </div>
    )
}