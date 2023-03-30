import Img from './Img'
import './card.css'
import dayjs from 'dayjs'
import { CircularProgressbar , buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Card({result}){
    return (<div className='card'>
        <div className='card_img'>
            <Img url={result?.poster_path}/>
            <div style={{ width: 40, height: 40, "position": "absolute", "left":"0.5rem", "bottom":"-1rem"}}>
                <CircularProgressbar maxValue={10} value={result?.vote_average} background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "#3e98c7",
          textColor: "#fff",
          pathColor: "#fff",
          trailColor: "transparent"
        })} text={`${result?.vote_average * 10}%`}/>
            </div>
        </div>
        <div className='card_content'>
            <p>{result?.title}</p>
            <p className='date'> {dayjs(result.release_Date).format("MMM D, YYYY")}</p>
        </div>
    </div>)
}
export default Card