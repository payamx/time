export interface TimeData
 {
    unix: {
        fa: string;
        en: number;
    };
    timestamp: {
        fa: string;
        en: number;
    };
    timezone: {
        name: string;
        number: {
            fa: string;
            en: string;
        };
    };
    season: {
        name: string;
        number: {
            fa: string;
            en: string;
        };
    };
    time12: {
        full: {
            short: {
                fa: string;
                en: string;
            };
            full: {
                fa: string;
                en: string;
            };
        };
        hour: {
            fa: string;
            en: string;
        };
        minute: {
            fa: string;
            en: string;
        };
        second: {
            fa: string;
            en: string;
        };
        microsecond: {
            fa: string;
            en: string;
        };
        shift: {
            short: string;
            full: string;
        };
    };
    time24: {
        full: {
            fa: string;
            en: string;
        };
        hour: {
            fa: string;
            en: string;
        };
        minute: {
            fa: string;
            en: string;
        };
        second: {
            fa: string;
            en: string;
        };
    };
    date: {
        full: {
            official: {
                iso: {
                    fa: string;
                    en: string;
                };
                usual: {
                    fa: string;
                    en: string;
                };
            };
            unofficial: {
                iso: {
                    fa: string;
                    en: string;
                };
                usual: {
                    fa: string;
                    en: string;
                };
            };
        };
        other: {
            gregorian: {
                iso: {
                    fa: string;
                    en: string;
                };
                usual: {
                    fa: string;
                    en: string;
                };
            };
            ghamari: {
                iso: {
                    fa: string;
                    en: string;
                };
                usual: {
                    fa: string;
                    en: string;
                };
            };
        };
        year: {
            name: string;
            animal: string;
            leapyear: string;
            agone: {
                days: {
                    fa: string;
                    en: string;
                };
                percent: {
                    fa: string;
                    en: string;
                };
            };
            left: {
                days: {
                    fa: string;
                    en: string;
                };
                percent: {
                    fa: string;
                    en: string;
                };
            };
            number: {
                fa: string;
                en: string;
            };
        };
        month: {
            name: string;
            asterism: string;
            number: {
                fa: string;
                en: string;
            };
        };
        day: {
            name: string;
            events: {
                local: {
                    text: string;
                    holiday: boolean;
                };
                holy: null;
                global: null;
            };
            number: {
                fa: string;
                en: string;
            };
        };
        weekday: {
            name: string;
            champ: string;
            number: {
                fa: string;
                en: string;
            };
        };
    };
}

export  interface showlist {

    city?: string,
    latitude?: number,
    longitude?: number,

}
export interface prayerType {
        azan_sobh: string;
        tolu_aftab: string;
        azan_zohr: string;
        ghorub_aftab: string;
        azan_maghreb: string;
        nimeshab: string;
        month: number;
        day: number;

}
export interface Hadis{
ok: boolean;
result: {
    person?: string;
    text?: string;
    source?: string;
};
}

export interface datetype{
    year?:string ;
    month?:string ;
    day?:string ;

}
