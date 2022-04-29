import React, { useEffect, useState } from 'react';
import { ReactComponent as WorkIcon }  from '../../assets/img/work.svg';
import { ReactComponent as SchoolIcon } from '../../assets/img/school.svg';
import timelineElements from "./TimelineDB";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import './Timeline.scss';

const Timeline = () => {


    //  fetch("https://api.pexels.com/videos/search?query=desert road",{
    //    headers: {
    //      Authorization: "563492ad6f91700001000001d20ca99003274a02bf19e94857197fc8"
    //    }
    //  })
    //     .then(resp => {
    //       return resp.json()
    //     })
    //     .then(data => {
    //       console.log(data);
    //     })


    let workIconStyles = { background: "#277c6e" };
    let schoolIconStyles = { background: "#c59119" };
    const [element, setElement] = useState(timelineElements);

    const showSchool = async () => {
        await setElement(timelineElements.filter(elem => elem.icon === 'school'));
        window.scrollTo(0,6000);
    }
    const showWork = async () => {
        await setElement(timelineElements.filter(elem => elem.icon === 'work'));
        window.scrollTo(0,6000);
    }
    const showAll = async () => {
        await setElement(timelineElements.filter(elem => elem.icon));
        window.scrollTo(0,6000);
    }
    

    useEffect(() => {
        window.scrollTo(0,7000);
    }, [])

    return (
        <>
        <video className="time-video" src="https://player.vimeo.com/external/365471710.hd.mp4?s=d991fb487e8e3b3cc26d8d065300f83454215757&profile_id=175&oauth2_token_id=57447761" autoPlay loop muted />
        <div className="time-container">
            
            <h1 className="endpoint">^</h1>
            <div className="btnfiltro">
                <button className="btnfiltro btnfiltro__todo btnfiltro--black" onClick={()=> showAll()}>Ver Todo</button>
                <button className="btnfiltro btnfiltro__laboral btnfiltro--black" onClick={()=> showWork()}>Laboral</button>
                <button className="btnfiltro btnfiltro__academico btnfiltro--black" onClick={()=> showSchool()}>Académico</button>
            </div>
            <VerticalTimeline>
            {element.map((element) => {
                let isWorkIcon = element.icon === "work";
                let showButton =
                element.buttonText !== undefined &&
                element.buttonText !== null &&
                element.buttonText !== "";
                return (
                <VerticalTimelineElement
                    key={element.id}
                    date={element.date}
                    dateClassName="date"
                    iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                    icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                    visible={false}
                >
                    <h3 className="vertical-timeline-element-title">
                    <img className="flag" src={element.src} alt={element.src}/>&nbsp;{element.title}
                    </h3>
                    <h5 className="vertical-timeline-element-subtitle">
                    {element.institution}
                    </h5>
                    <h5 className="vertical-timeline-element-subtitle">
                    {element.location}
                    </h5>
                    <p id="description">{element.description}</p>
                    <ol className="rolelist">
                        {element.role && element.role.map((rol) => {
                            return <li className="roles" key={rol.tech}>
                                        <a 
                                        className={`${rol.href ? "button" : "" }`} 
                                        href={rol.href} 
                                        target="_blank"
                                        rel="noreferrer"
                                        >{rol.tech}
                                        </a>
                                    </li>
                        })}
                    </ol>              
                    {showButton && (
                    <a
                        className={`button ${
                        isWorkIcon ? "workButton" : "schoolButton"
                        }`}
                        href={element.href}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {element.buttonText}
                    </a>
                    )}
                </VerticalTimelineElement>
                );
            })}
            </VerticalTimeline>
            <div className="btnfiltro">
                <button className="btnfiltro btnfiltro__todo" onClick={()=> showAll()}>Ver Todo</button>
                <button className="btnfiltro btnfiltro__laboral" onClick={()=> showWork()}>Laboral</button>
                <button className="btnfiltro btnfiltro__academico" onClick={()=> showSchool()}>Académico</button>
            </div>
            <h1 className="title">El camino</h1>
        </div>
        </>
    )
}

export default Timeline
