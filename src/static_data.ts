import {UICategoryInterface, UITopicInterface, UISubjectInterface} from './data_structure';

export const SUBJECT_LAW_LEARNING = "SUBJECT_LAW_LEARNING";

const PageIDTable = Object.freeze({
    Law_Learning : "law_learning",
    Law_Learning_Topic: "topic",
    Law_Learning_Collection: "topic",
    Law_Learning_Process: "topic",
    Law_Learning_Presentation: "presentation",
    Law_Learning_Conclusion: "topic",
});

export const PageDataJSON : UICategoryInterface = {
    SUBJECT_LAW_LEARNING : {

        id: PageIDTable.Law_Learning,
        path: "/procedural",
        title: "Law Learning",
        description: "For law user to study accelerated",

        topics: [
            {
                id: PageIDTable.Law_Learning_Topic,
                path: "/procedural/field_selection",
                title : "Topic",
                description : "What is your topic about law?"
            } , 
            {
                id: PageIDTable.Law_Learning_Collection,
                path: "/procedural/data_collection",
                title : "Collection",
                description : "What is your topic about law?"
            },
            {
                id: PageIDTable.Law_Learning_Process,
                path: "/procedural/work",
                title : "Process",
                description : "What is your topic about law?"
            },
            {
                id: PageIDTable.Law_Learning_Presentation,
                path: "/proc_edural/report",
                title : "Presentation",
                description : "What is your topic about law?"
            },
            {
                id: PageIDTable.Law_Learning_Conclusion,
                path: "/procedural/note",
                title : "Conclusion",
                description : "What is your topic about law?"
            },
        ]
    }
}

export function GetSubjectComponent(id: string) {
    if (id in PageDataJSON) {
        return PageDataJSON[id];
    }

    console.log(PageDataJSON)

    return null;
}

export function GetTopicComponent(id: string) {

    for (const [key, value] of Object.entries(PageDataJSON)) {

        for (let t in value.topics) {

            if (value.topics[t].id == id )
                return value.topics[t];
        }
    }

    return null;      
}
