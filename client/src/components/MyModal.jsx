import React from "react";

const MyModal = ({children, visible, setVisible}) => {
    
    const rootClasses = ["MyModal"];

    if (visible) {
        rootClasses.push("active")
    }

    return(
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className="closeButton" onClick={() => setVisible(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <path d="M 15,15 l 15,15 M 30,15 l -15,15" stroke="white" stroke-width="1" />
            </svg>
            </div>
            <div className="MyModalContent" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
};

export default MyModal;