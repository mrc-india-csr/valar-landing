const MSG_DOC = {
    "@metadata": {
        "authors": [
            "Deepag"
        ]
    },
    "welcome": "A welcoming message displayed on the main page of the site. Should be friendly, informal, and, ummm, welcoming."
}

const EN = {
    "@metadata": {
        "authors": [
            "Deepag"
        ],
        "last-updated": "2021-09-04",
        "locale": "en",
        "message-documentation": MSG_DOC
    },
    "home": "HOME",
    "about": "ABOUT US",
    "contact": "CONTACT",
    "login": "LOGIN",
    "header_line_1": "Making Tamil Nadu a trillion dollar manufacturing hub",
    "header_line_2": "The Government of Tamil Nadu welcomes all Industry 4.0 service providers, researchers, and individuals to come together, collaborate and breakthrough the industrial 4.0 revolution.",
    "sign_up": "SIGN UP TODAY"

}


const TA = {
    "@metadata": {
        "authors": [
            "Deepag"
        ],
        "last-updated": "2021-09-04",
        "locale": "ta",
        "message-documentation": MSG_DOC
    },
    "home": "முகப்பு",
    "about": "எங்களை பற்றி",
    "contact": "தொடர்பு கொள்ளுங்கள்",
    "login": "உள்நுழையவும்",
    "header_line_1": "தமிழகத்தை ஒரு டிரில்லியன் டாலர் உற்பத்தி மையமாக உருவாக்குவது",
    "header_line_2": "தமிழக அரசு அனைத்து தொழில் 4.0 சேவை வழங்குநர்கள், ஆராய்ச்சியாளர்கள் மற்றும் தனிநபர்களை ஆகியோர் ஒன்றிணைந்து உடனுழைக்க மற்றும் தொழில்துறை 4.0 புரட்சியை ஆக்கபூர்வமாக முன்னெடுக்க வரவேற்கிறது.",
    "sign_up": "இன்றே பதிவு செய்யுங்கள்"
}


jQuery(function ($) {
    var do_translate = function() {
        $('html').i18n();
    }
    
    $.i18n().load({
        'en': EN,
        'ta': TA
    }).done(function () {
        $('.locale-switcher').on('click', 'a', function (e) {
            e.preventDefault();
            console.log($(this).data('locale'));
            $.i18n().locale = $(this).data('locale');
            do_translate();
        });
    });

    
});
