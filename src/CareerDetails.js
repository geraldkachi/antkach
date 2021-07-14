import React, { Component, useEffect } from 'react'
import { Drawer } from "antd"

const CareerDetails = ({player, visible, onClose}) => {
    useEffect(() => {
        console.log("render")
        return () => console.log("stop render")
    }, [])

    useEffect(() => {
        console.log("mounts")
        return () => {
            console.log("unmounts")
        }
    }, [])
    // React lifeCycle methods you can of useEffect hooks as
    // ComponentDidMount, ComponentDidUpdate, and ComponentWillUnmount

    const dumbyData = {
        "name": "Lord Gerald",
        "team": "Lord ikoojo",
        "age": "25 years of age",
        "born": "17, june",
        "batting": "Right Hand and Left leg",
        "bowling": "i don't giev a fuck", 
    }

    useEffect(() => {
        async function fetchData() {
            await fetch('./' + player.replace('','_')+'.json')
            .then(res => res.json())
            .then(data => console.log(data))
        }
        fetchData()
    },[])

    return (
        <Drawer
        destroyOnClose
        title={player}
        visible={visible}
        width={640}
        onClose={onClose}
        >
            
        </Drawer>
    )
}

export default CareerDetails
