import React from 'react';
import './App.css';
import { useSpeechSynthesis } from "react-speech-kit";

const Speech = () => {
    const [value, setValue] = React.useState('');
    const { speak , cancel} = useSpeechSynthesis();
    
    return (
        <>
        <div >
        <h1>NUMBERS</h1>
       <table>
           <tr>
               <td ><img width="200px" height="200px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Bundesstra%C3%9Fe_1_number.svg/1200px-Bundesstra%C3%9Fe_1_number.svg.png" onClick={() => speak({text: "1"})}></img>
               </td>
               <td ><img width="200px" height="200px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Bundesstra%C3%9Fe_2_number.svg/1200px-Bundesstra%C3%9Fe_2_number.svg.png" onClick={() => speak({text: "2"})}></img>
               </td>
           </tr>
       </table>
       </div>
       </>
    )

}
export default Speech;