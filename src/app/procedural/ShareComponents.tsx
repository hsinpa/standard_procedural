import { LearingResourceInterface, UITopicInterface } from "@/data_structure";
import { LangCodeTable } from '@/static_data';
import Link from "next/link";

// export function GetContentLanguage() : string {
//     let id = "item_language";
//     const cookieStore = cookies();

//     if (cookieStore.has(id)) {
//         let cookie = cookieStore.get(id);
//         if (cookie != undefined) cookie.value;
//     }
    
//     return "en";
// }

export function ShareSubjectComponent({topic_interface} : {topic_interface: UITopicInterface}) {
    return (
        <div className="subject_component">
            <img src={topic_interface.thumbnail == undefined ? "" : topic_interface.thumbnail} alt={topic_interface.title}></img>
            <div className="component_content">
                <h2 className="title is-4">{topic_interface.title}</h2>
                <p>{topic_interface.description}</p>
            </div>
        </div>
    );
}

export function ShareTopicComponent({topic_interface, is_link} : {topic_interface: UITopicInterface, is_link: boolean}) {
    let content = (
        <div>
            <h2 className="title is-5">{topic_interface.title}</h2>
            <p>{topic_interface.description}</p>
        </div>);

    let link_dom = (<Link className="topic_component" href={topic_interface.path}>{content}</Link>);
    let none_link_dom = (<div className="topic_component">{content}</div>);

    return ((is_link) ? link_dom : none_link_dom);
}


export function LearningTitleComponent({parent_interface, topic_interface, lang_code, lang_callback} : 
    {parent_interface : UITopicInterface, topic_interface: UITopicInterface, lang_code: string, lang_callback: (code: string) => void }) {

    let en_btn_class = "button is-info";
    if (lang_code == LangCodeTable.English) en_btn_class += " is-focused";

    let cn_btn_class = "button is-info";
    if (lang_code == LangCodeTable.Mandarin_TW) cn_btn_class += " is-focused";

    let kr_btn_class = "button is-info";
    if (lang_code == LangCodeTable.Korean) kr_btn_class += " is-focused";

    return (
        <div className="learng_title_component">
            <div className="component_parent"><img src={parent_interface.thumbnail == undefined ? "" : parent_interface.thumbnail}></img></div>
            <Link href={parent_interface.path}><img src="\texture\other\back.png"></img></Link>
            <ShareTopicComponent is_link={false} topic_interface={topic_interface}></ShareTopicComponent>
            <div className="component_langs">
                <Link className={en_btn_class} href={topic_interface.path} onClick={ () => lang_callback(LangCodeTable.English)}>CN</Link>
                <Link className={cn_btn_class} href={topic_interface.path} onClick={ () => lang_callback(LangCodeTable.Mandarin_TW)}>EN</Link>
                <Link className={kr_btn_class} href={topic_interface.path} onClick={ () => lang_callback(LangCodeTable.Korean)}>KR</Link>
            </div>
        </div>
    );
}

export function LearningItemComponent({topic_interface} : {topic_interface: LearingResourceInterface}) {
    return (
        <div className="learng_item_component" style={{backgroundImage: `url(${topic_interface.thumbnail})`}}>
                <h2 className="title is-3">{topic_interface.title}</h2>
                <p>{topic_interface.description}</p>

                <section>
                    <Link href="" className="video_button button is-primary is-rounded"><img src="\texture\other\video_player.svg"></img><span>Learning Video</span></Link>
                </section>
        </div>
    );
}

