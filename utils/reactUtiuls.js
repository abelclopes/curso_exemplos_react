import React from 'react'

function childrenWithProps(children) {
    return React.Children.map(props.children, 
            child => React.cloneElement(child, {...props}))
}

export { childrenWithProps }