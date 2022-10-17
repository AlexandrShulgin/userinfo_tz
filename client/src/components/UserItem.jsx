import React from "react";
import phone from "./../assets/phone.png"
import mail from "./../assets/mail.png"
import MyModal from "./MyModal";
import { useState } from "react";
import UserProfile from "./UserProfile";
const UserItem = (props) => {

const [modal, setModal] = useState(false)

const showModal = () => {
    setModal(true);
}

    return (
        <>
        <div className="UserItem" onClick={() => showModal()}>
            <div className="UserName">{props.user.name}</div>
            <div className="UserPhone"><img src={phone} alt="Phone"/>{props.user.phone}</div>
            <div className="UserEmail"><img src={mail} alt="Mail"/>{props.user.email}</div>
        </div>
        {modal &&
            <MyModal visible={modal} setVisible={setModal}>
                <UserProfile props={props}/>
            </MyModal>
        }
        </>
    )
}

export default UserItem