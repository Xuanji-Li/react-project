import React from 'react';

const NameCard = (props) => {
    const {name, number, isHuman, tags}=props;
    return (
        <div className='alert alert-success'>
        <h4>{name}</h4>
        <ul>
            <li>电话:{number}</li>
            <li>{isHuman ? '人类' : '外星人'}</li>
            <p>
                {tags.map((tag,index)=>(
                    <span key={index}>{tag}</span>)
                )}
            </p>
        </ul>
    </div>
    )
}
// class NameCard extends React.Component {
//     render(){
//         const {name, number, isHuman, tags}=this.props;
//         return(
//             <div className='alert alert-success'>
//                 <h4>{name}</h4>
//                 <ul>
//                     <li>电话:{number}</li>
//                     <li>{isHuman ? '人类' : '外星人'}</li>
//                     <p>
//                         {tags.map((tag,index)=>(
//                             <span key={index}>{tag}</span>)
//                         )}
//                     </p>
//                 </ul>
//             </div>
//         )
        
        
//     }
// }

export default NameCard;
