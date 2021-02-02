import React, { useEffect } from 'react';
import { ReactComponent as WorkIcon }  from '../../assets/img/work.svg';
import { ReactComponent as SchoolIcon } from '../../assets/img/school.svg';
import timelineElements from "./TimelineDB";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import './Timeline.scss';
import coverVideo from  '../../assets/media/pexels-desertroad.mp4';

const Timeline = () => {

    let workIconStyles = { background: "#277c6e" };
    let schoolIconStyles = { background: "#c59119" };
    

    useEffect(() => {
        window.scrollTo(0,4000);
    }, [])

    return (
        <>
        <video className="time-video" src={coverVideo} autoPlay loop muted />
        <div className="time-container">
            
            <h1 className="endpoint">^</h1>
            <VerticalTimeline>
            {timelineElements.map((element) => {
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
                            return <li className="roles">{rol}</li>
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
            <h1 className="title">El camino</h1>
        </div>
        </>
    )
}

export default Timeline
