import React from 'react';

class Welcome extends React.Component {
    
    render(){
        const toDoList = ['learn react','learn Redux'];
        const isLogin= true;
        return( 
        <div>
            <h1>hello react</h1>;
            <ul>
            {
                toDoList.map(item =>
                    <li>{item}</li>
                )
            }
            </ul>

            {isLogin ? <p>u have login</p> : <p>no</p> }
        </div>
        )
    }
}

export default Welcome;