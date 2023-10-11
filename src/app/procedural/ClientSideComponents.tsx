'use client';
import { getCookie, setCookie } from '@/utility/dynamic_utility';
import { GetSubjectComponent, GetTopicComponent, LawLearningJSON, PageIDTable, CoockeTable, LangCodeTable } from '@/static_data';
import { LearningItemComponent, LearningTitleComponent } from './ShareComponents';

export const GetProceduralComponent = (topic_id : string) => {
    let parent_interface = GetSubjectComponent("SUBJECT_LAW_LEARNING");
    let topic_interface = GetTopicComponent(topic_id);

    if (parent_interface == null || topic_interface == null) return (<div></div>);

    let current_lang = getCookie(CoockeTable.Procedural_Language_Code, LangCodeTable.English);
    let learning_components = LawLearningJSON[topic_id].filter(x=>x.language == "" || x.language == current_lang);

    function onLangCallback(code: string) {
        console.log(code);
        setCookie(CoockeTable.Procedural_Language_Code, code, 30);
    }

	return <div>
        <div className='url_content'>
            <LearningTitleComponent parent_interface={parent_interface} topic_interface={topic_interface} lang_code={current_lang} lang_callback={onLangCallback}  ></LearningTitleComponent>
            <br></br>

            { learning_components.map(x => { return <LearningItemComponent topic_interface={x}></LearningItemComponent>}) }
        </div>
	</div>;
}