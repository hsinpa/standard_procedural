
export function ShareSubjectComponent({image_path, topic, content} : {image_path: string, topic: string, content: string}) {
    return (
        <div className="subject_component">
            <img src="./texture/icon/law_learning.jpg" alt={topic}></img>
            <div className="component_content">
                <h2 className="title is-4">{topic}</h2>
                <p>{content}</p>
            </div>
        </div>
    );
}

export function ShareTopicComponent({topic, content} : {topic: string, content: string}) {
    return (
        <div className="topic_component">
                <h2 className="title is-5">{topic}</h2>
                <p>{content}</p>
        </div>
    );
}