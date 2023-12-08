import React from 'react'
import Card from '../Card'
import ImageIcon from "./../../assets/Pic.jpg"

function LeftNav() {
    const items = [
        {
            icon: ImageIcon,
            name: 'Mahmuda Alam Alnur'
        },
        {
            icon: ImageIcon,
            name: 'Friends'
        },
        {
            icon: ImageIcon,
            name: 'Memories'
        },
        {
            icon: ImageIcon,
            name: 'Saved'
        },
        {
            icon: ImageIcon,
            name: 'Groups'
        }
    ]
    return (
        <>
            {items.map((item) => {
                return (<Card item={item}></Card>)
            })}
        </>

    )
}

export default LeftNav