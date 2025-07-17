import {RxChevronRight} from 'react-icons/rx'
import myInfo from '../_lib/myInfo'
function InfoList() {
    return (
        myInfo.map(info=> <li key={info.id}>
            <span><RxChevronRight /></span>
            <p>{info.label}: </p>
            <p>{info.info}</p>
        </li>)
        
    )
}

export default InfoList
