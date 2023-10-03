import {ShareSubjectComponent, ShareTopicComponent} from "./ShareComponents";
import {PageDataJSON, GetSubjectComponent, SUBJECT_LAW_LEARNING} from '../../static_data';

export default function DrawLawLearningPage() {
    
    const cards_dom_list = [];
    const page_data = GetSubjectComponent(SUBJECT_LAW_LEARNING);
    const page_data_lens = (page_data?.topics == undefined) ? 0 : page_data.topics.length;

    if (page_data != null && page_data.topics != null) {

        for (let i = 0; i < page_data_lens; i++) {
            cards_dom_list.push(<ShareTopicComponent topic={page_data.topics[i].title} content={page_data.topics[i].description}></ShareTopicComponent> );
        }        
    }

    return (

        <div>
            <ShareSubjectComponent image_path="" topic="Law Learning" content="For law user to study accelerated"></ShareSubjectComponent>

            <section>
                {cards_dom_list}
            </section>
        </div>
    );
}