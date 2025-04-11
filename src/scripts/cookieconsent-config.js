import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.umd.js';

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "box",
            position: "bottom left",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        },
        analytics: {}
    },
    language: {
        default: "en",
        autoDetect: "browser",
        translations: {
            en: {
                consentModal: {
                    title: "We Value Your Privacy",
                    description: "We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking 'Accept all', you consent to our use of cookies.",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    showPreferencesBtn: "Manage preferences",
                },
                preferencesModal: {
                    title: "Cookie Preferences",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: 'Reject all',
                    closeIconLabel: "Close modal",
                    serviceCounterLabel: "Service|Services",
                    sections: [
                        {
                            title: "Cookie Usage",
                            description: "Cookies are small text files that can be used by websites to make a user's experience more efficient."
                        },
                        {
                            title: "Strictly Necessary Cookies <span class=\"pm__badge\">Always Enabled</span>",
                            description: "These cookies are essential for the website to function and cannot be switched off in our systems.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Analytics Cookies",
                            description: "These cookies help us understand how visitors interact with our website, providing information about areas visited, time spent, and any issues encountered, such as error messages.",
                            linkedCategory: "analytics"
                        },
                    ]
                }
            }
        }
    }
});