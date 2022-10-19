import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const usePasswordToggle = () => {
    const [visible, setVisiblity] = useState(false);

    const Icon = (
        <FontAwesomeIcon Icon={ visible ? "eye-slash" : "eye"} />
    )

    const InputType = visible ? "text" : "password";

    return [InputType, Icon];
}

export default usePasswordToggle