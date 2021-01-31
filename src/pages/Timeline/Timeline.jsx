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

    let workIconStyles = { background: "#06D6A0" };
    let schoolIconStyles = { background: "#f9c74f" };
    

    useEffect(() => {
        window.scrollTo(0,4000);
    }, [])

    return (
        <>
        <video className="video" src={coverVideo} autoPlay loop muted />
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
                    key={element.key}
                    date={element.date}
                    dateClassName="date"
                    iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                    icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                    visible={false}
                >
                    <h3 className="vertical-timeline-element-title">
                    {element.title}
                    </h3>
                    <h5 className="vertical-timeline-element-subtitle">
                    {element.location}
                    </h5>
                    <p id="description">{element.description}</p>
                    {showButton && (
                    <a
                        className={`button ${
                        isWorkIcon ? "workButton" : "schoolButton"
                        }`}
                        href="/"
                    >
                        {element.buttonText}
                    </a>
                    )}
                </VerticalTimelineElement>
                );
            })}
              <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={<WorkIcon />}
            /><div class="first"></div>
            </VerticalTimeline>
            <h1 className="title">El camino</h1>
        </div>
        </>
    )
}

export default Timeline
