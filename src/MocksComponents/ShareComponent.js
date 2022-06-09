import React from "react";
import InstallCom  from './InstallComponent';
import UserCom from './UserComponent';

export default class ShareCom extends React.Component {
    render() {
        return (
            <div>
                <InstallCom para1='title1'/>
                <UserCom para2='title2' />
            </div>
        )
    }
}