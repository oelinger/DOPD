import React from "react";
import { Link } from "react-router-dom";

class ButtonMailto extends React.Component<{ mailto: string, label: string }> {
    render() {
        let {mailto, label} = this.props;
        return (
            <Link
                to='#'
                onClick={(e) => {
                    window.location.href = mailto;
                    e.preventDefault();
                }}
            >
                {label}
            </Link>
        );
    }
}

export default ButtonMailto;