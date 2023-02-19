export interface Employee {
    EMAIL:   string;
    NAME:    string;
    PROFILE: string;
    IMAGE:   string;
}

export interface Associated {
    ID:    number;
    DATE:  string;
    NAME:  string;
    PHOTO: string;
    MAIL:  string;
    PC:    number;
    LOC:   string;
    PROV:  string;
    BD:    string;
    DD:    number;
    DT:    string;
    PHONE: string;
}

export interface Remark {
    ID:     number;
    TITLE:  string;
    DESC:   string;
    AUTHOR: string;
    DATE:   string;
}
