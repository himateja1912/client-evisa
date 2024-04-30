import axios from 'axios'
import {useState} from 'react'

function Applied_users()
{
    const handleAccept = ()=>{
        axios.post('https://mswd-sdp.onrender.com/accepted',r[0]).then((res)=>{
            console.log('Application accepted')
        })
    }
    const handleReject = ()=>{
        let obj = {...r[0]}
        axios.post('https://mswd-sdp.onrender.com/rejected',r[0]).then((res)=>{
            console.log('Application rejected')
        })
    }
    const [ r,setR] = useState([])
    let data =[]
    if(r.length==0)
    {
        axios.get('https://mswd-sdp.onrender.com/appiledusers',{}).then((res)=>{
            console.log(res.data)
            setR(res.data)
            data = {...r}
        })
    }
    
    return(
        <div>
        <table>
           <tr>
            <th> Name</th>
            <th> Email </th>
            <th> email </th>
            <th> Aadhaar </th>
            <th> Father name </th>
            <th> Mother name </th>
            <th> Gender </th>
            <th> Age </th>
            <th>Address</th>           
            <th>Type</th>           
            <th>country</th>           
           </tr>
            {r.map((user)=>{
                return(
                    
                        <tr>
                            <td> {user.name} </td>
                            <td> {user.email} </td>
                            <td> {user.aadhaar} </td>
                            <td> {user.father_name} </td>
                            <td> {user.mother_name} </td>
                            <td> {user.gender} </td>
                            <td> {user.age} </td>
                            <td> {user.address} </td>
                            <td> {user.applied_visa} </td>
                            <td> {user.applied_country} </td>
                        </tr>
                    
                )
            })}
        </table>
        <button onClick={handleAccept}>Accept</button>
        <button onClick={handleReject}>Reject</button>
        </div>
    )
}
export default Applied_users