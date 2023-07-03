import React from "react";

const Title = ({children, as}) => {
    const Tag = as;
    return(
        <React.Fragment>
            <Tag>{children}</Tag>
            <style jsx>{`
                ${Tag} {
                    color: red;
                }
            `}</style>
        </React.Fragment>
    )
}

Title.defaultProps = {
    styleSheet: {},
  };
export default Title;