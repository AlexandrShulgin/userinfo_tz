

const UserProfile = ({props}) => {
    return(
        <>
        <div className="UserName">{props.user.name}</div>
        <div className="MainInfo">
            <div className="infoItem">
                <span className="type">Телефон:</span>
                <span className="content underline">{props.user.phone}</span>
            </div>
            <div className="infoItem">
                <span className="type">Почта:</span>
                <span className="content underline">{props.user.email}</span>
            </div>
            <div className="infoItem">
                <span className="type">Дата приема:</span>
                <span className="content">{props.user.hire_date}</span>
            </div>
            <div className="infoItem">
                <span className="type">Должность:</span>
                <span className="content">{props.user.position_name}</span>
            </div>
            <div className="infoItem">
                <span className="type">Подразделение:</span>
                <span className="content">{props.user.department}</span>
            </div>
        </div>
        <div className="additional">
            <span>Дополнительная информация:</span><br/>
            <span className="content">{props.user.address}</span>
        </div>
        </>
    )
}

export default UserProfile;