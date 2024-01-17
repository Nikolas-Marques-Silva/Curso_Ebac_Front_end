import './perfil.css'

export default () => {
    const user = {
        name: 'Níkolas',
        avatar: 'https://github.com/nikolas-marques-silva.png'
    }

    return (
        <div>
            <img className="perfil-avatar" src={user.avatar} alt="" />
            <h3 className='perfil-title'>{user.name}</h3>
        </div>
    )
}