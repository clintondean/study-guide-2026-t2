interface StudyQuestionDiagram {
    svg: string;
    alt: string;
    caption?: string;
}

interface StudyQuestionBase {
    id: string;
    topic: string;
    q: string;
    diagram?: StudyQuestionDiagram;
    help?: {
        rule?: string;
        steps?: string[];
    };
}

interface StudyMcq extends StudyQuestionBase {
    options: string[];
    answer: number;
    explain?: string;
}

interface StudyWrittenQuestion extends StudyQuestionBase {
    sample: string;
    marks?: number;
}

type StudyQuestion = StudyMcq | StudyWrittenQuestion;

interface StudyTopic {
    id: string;
    name?: string;
    [key: string]: unknown;
}

interface StudyPracticeTopic {
    id: string;
    name: string;
    sourceTopics: string[];
    outcomes?: string;
    examIds?: string[];
}

interface StudyExam {
    id: string;
    name: string;
    questionIds: string[];
    topicId?: string;
    topicName?: string;
    focus?: string;
    duration?: number;
    isMock?: boolean;
}

interface SubjectData {
    id?: string;
    name: string;
    topics: StudyTopic[];
    mcqs?: StudyMcq[];
    short?: StudyWrittenQuestion[];
    long?: StudyWrittenQuestion[];
    practiceTopics?: StudyPracticeTopic[];
    practiceExams?: StudyExam[];
    mockExams?: StudyExam[];
    [key: string]: unknown;
}

interface StudyMiniGame {
    start(root: HTMLElement, opts?: Record<string, unknown>): void;
    stop(): void;
}

interface BreakSessionApi {
    start(...args: unknown[]): unknown;
    end(...args: unknown[]): unknown;
    elapsed(...args: unknown[]): unknown;
    remaining(...args: unknown[]): unknown;
    isActive(...args: unknown[]): boolean;
    hasExpired(...args: unknown[]): boolean;
    BREAK_MS: number;
}

interface Window {
    SUBJECT_DATA: Record<string, SubjectData>;
    Cats: Record<string, unknown>;
    Clan: Record<string, unknown>;
    Park: StudyMiniGame;
    BreakSession: BreakSessionApi;
    CatTetris: StudyMiniGame;
    CatInvaders: StudyMiniGame;
    Catanoid: StudyMiniGame;
    DangerNoodle: StudyMiniGame;
    AI: Record<string, unknown>;
    Calc: Record<string, unknown>;
    drawCanvasCat?: (...args: unknown[]) => unknown;
}
