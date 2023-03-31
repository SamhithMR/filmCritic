import Img from './Img'
import './card.css'
import dayjs from 'dayjs'
import { CircularProgressbar , buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useState } from 'react';

function Card({result}){
    
const [value, setValue] = useState(result?.vote_average)

    return (<div className='card'>
        <div className='card_img'>
            <Img url={result?.poster_path}/>
            <div style={{ width: 40, height: 40, "position": "absolute", "left":"0.5rem", "bottom":"-1rem"}}>
                <CircularProgressbar
                    maxValue={10} 
                    value={value} 
                    background
                    backgroundPadding={6}
                    styles={
                        buildStyles({
                            backgroundColor: `${value > 6.5  ? "#389438" : value < 3.0 ? "#fe5555" : "#658ac5"}`,
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent"
                        })
                    } 
                    text={`${value * 10}%`}/>
            </div>
        </div>
        <div className='card_content'>
            <p>{result?.title}</p>
            <p className='date'> {dayjs(result.release_Date).format("MMM D, YYYY")}</p>
        </div>
    </div>)
}
export default Card