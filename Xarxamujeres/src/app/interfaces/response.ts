export interface Response {
    message: string;
    path:    string;
}
export interface Response {
    word:       string;
    phonetic:   PhoneticEnum;
    phonetics:  PhoneticElement[];
    meanings:   Meaning[];
    license:    License;
    sourceUrls: string[];
}

export interface License {
    name: Name;
    url:  string;
}

export enum Name {
    BySa30 = "BY-SA 3.0",
    BySa40 = "BY-SA 4.0",
    CcBySa30 = "CC BY-SA 3.0",
}

export interface Meaning {
    partOfSpeech: string;
    definitions:  Definition[];
    synonyms:     string[];
    antonyms:     any[];
}

export interface Definition {
    definition: string;
    synonyms:   any[];
    antonyms:   any[];
    example?:   string;
}

export enum PhoneticEnum {
    Lɪst = "/lɪst/",
}

export interface PhoneticElement {
    text:      PhoneticEnum;
    audio:     string;
    sourceUrl: string;
    license:   License;
}