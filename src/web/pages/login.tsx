import * as React from "react";
interface IUser {
    username: string
}
const UserInput = (props: IUser) => {
    const { username } = props;
    return (
        <>
            <label>{username}</label>
        </>
    );
}
class Greeting extends React.Component {

    render() {
        return (
            <div>
                <h4>欢迎欢迎!!!!sssss!</h4>
                <p>login</p>
                <UserInput username="用户名："></UserInput>
            </div>);
    }
}
export default Greeting;