import React, { Component } from 'react'
import items from "../../data/sidebarAdmin.json"
import SidebarAdminItems from './SidebarAdminItems'

export default class Menu extends Component {
    render() {
        return (
            <div className='main'>
                <div className='sidebar'>
                    { items.map((item, index) => <SidebarAdminItems key={index} item={item} />)}
                </div>
          </div>
        )
    }
}