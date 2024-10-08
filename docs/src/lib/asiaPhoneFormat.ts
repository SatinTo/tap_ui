export type CountryCode = {
    code: string;
    dialCode: string;
    format: string;
    maxLength: number;
    badge: any;
};

export const asianCountryCodes: { [key: string]: CountryCode } = {
    AF: { code: 'AF', dialCode: '+93', format: '## ### ####', maxLength: 9, badge: require('./flag/AF.png') },
    BD: { code: 'BD', dialCode: '+880', format: '#### ######', maxLength: 10, badge: require('./flag/BD.png') },
    BN: { code: 'BN', dialCode: '+673', format: '### ####', maxLength: 7, badge: require('./flag/BN.png') },
    BT: { code: 'BT', dialCode: '+975', format: '## ### ###', maxLength: 8, badge: require('./flag/BT.png') },
    CN: { code: 'CN', dialCode: '+86', format: '### #### ####', maxLength: 11, badge: require('./flag/CN.png') },
    HK: { code: 'HK', dialCode: '+852', format: '#### ####', maxLength: 8, badge: require('./flag/HK.png') },
    ID: { code: 'ID', dialCode: '+62', format: '### ### ###', maxLength: 9, badge: require('./flag/ID.png') },
    IN: { code: 'IN', dialCode: '+91', format: '##### #####', maxLength: 10, badge: require('./flag/IN.png') },
    JP: { code: 'JP', dialCode: '+81', format: '### ### ####', maxLength: 10, badge: require('./flag/JP.png') },
    KH: { code: 'KH', dialCode: '+855', format: '## ### ###', maxLength: 8, badge: require('./flag/KH.png') },
    KR: { code: 'KR', dialCode: '+82', format: '### #### ####', maxLength: 11, badge: require('./flag/KR.png') },
    LA: { code: 'LA', dialCode: '+856', format: '## ### ###', maxLength: 8, badge: require('./flag/LA.png') },
    LK: { code: 'LK', dialCode: '+94', format: '## ### ####', maxLength: 9, badge: require('./flag/LK.png') },
    MM: { code: 'MM', dialCode: '+95', format: '## ### ###', maxLength: 8, badge: require('./flag/MM.png') },
    MY: { code: 'MY', dialCode: '+60', format: '## ### ####', maxLength: 9, badge: require('./flag/MY.png') },
    NP: { code: 'NP', dialCode: '+977', format: '## ### ###', maxLength: 8, badge: require('./flag/NP.png') },
    PH: { code: 'PH', dialCode: '+63', format: '### ### ####', maxLength: 10, badge: require('./flag/PH.png') },
    PK: { code: 'PK', dialCode: '+92', format: '### ### ####', maxLength: 10, badge: require('./flag/PK.png') },
    SG: { code: 'SG', dialCode: '+65', format: '#### ####', maxLength: 8, badge: require('./flag/SG.png') },
    TH: { code: 'TH', dialCode: '+66', format: '## ### ####', maxLength: 9, badge: require('./flag/TH.png') },
    TW: { code: 'TW', dialCode: '+886', format: '### ### ###', maxLength: 9, badge: require('./flag/TW.png') },
    VN: { code: 'VN', dialCode: '+84', format: '## #### ####', maxLength: 10, badge: require('./flag/VN.png') },
};
