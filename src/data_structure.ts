export interface UICategoryInterface {
    [subject: string]: UISubjectInterface;
}

export interface UISubjectInterface extends UITopicInterface{
    topics: UITopicInterface[],
}

export interface UITopicInterface {
    id: string,
    path: string,
    title: string,
    description: string
}