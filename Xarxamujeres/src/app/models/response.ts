export interface Employee {
    EMAIL:   string;
    NAME:    string;
    PROFILE: string;
    IMAGE:   string;
}

export interface Associated {
    NAME: string;
    MAIL: null;
    TELF: null;
    LOC:  string;
    PROV: string;
    DATE: string;
}

export interface Remark {
    ID:     number;
    TITLE:  string;
    DESC:   string;
    AUTHOR: string;
    DATE:   string;
}
