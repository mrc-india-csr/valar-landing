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
    "header_line_1": "Making Tamil Nadu a trillion dollar economy",
    "header_line_2": "The Government of Tamil Nadu welcomes all Industry 4.0 service providers, researchers, and individuals to come together, collaborate and breakthrough the industrial 4.0 revolution.",
    "sign_up": "SIGN UP TODAY",
    "service_title": "Why Join Us?",
    "service_description": "Easily find and get connected with other service providers, researchers, and subject matter experts with whom you can exchange expertise, research knowledge, services, facilities, and other resources for your business, research or infrastructure needs.",
    "card_title_1": "Reach out for assistance",
    "card_desc_1": "Post a problem statement or challenge you need help with, and search for existing problems / solutions in the areas of your interest",
    "card_title_2": "Offer your expertise",
    "card_desc_2": "Offer your services, share your past projects in the industry, research and infrastructure facilities",
    "card_title_3": "Suggest solutions",
    "card_desc_3": "Offer suggestions to others problem statements / challenges",
    "contact_title": "Contact Us",
    "contact_address": "Department of Information Technology, Government of Tamilnadu, Namakkal Kavignar Maaligai, Fort St George, Secretariat, Chennai-600009",
    "follow_title": "Follow Us"

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
    "header_line_1": "தமிழகத்தை ஒரு டிரில்லியன் டாலர் பொருளாதாரமாக உருவாக்குவது",
    "header_line_2": "தமிழக அரசு அனைத்து தொழில் 4.0 சேவை வழங்குநர்கள், ஆராய்ச்சியாளர்கள் மற்றும் தனிநபர்களை ஆகியோர் ஒன்றிணைந்து உடனுழைக்க மற்றும் தொழில்துறை 4.0 புரட்சியை ஆக்கபூர்வமாக முன்னெடுக்க வரவேற்கிறது.",
    "sign_up": "இன்றே பதிவு செய்யுங்கள்",
    "service_title": "எங்களுடன் ஏன் சேர வேண்டும்?",
    "service_description": "உங்களுக்கு தேவையான சேவை வழங்குநர்கள், ஆராய்ச்சியாளர்கள் மற்றும் பொருள் வல்லுநர்களுடன் இணைய மற்றும் அவர்களுடன் உங்கள் வணிகம், ஆராய்ச்சி, உள்கட்டமைப்பு தேவைகளை பூர்த்தி செய்யக்கூடிய நிபுணத்துவம், வசதிகள், ஆராய்ச்சி கண்டுபிடிப்புகள், மற்றும் பிற வளங்களை பரிமாறிக்கொள்ளலாம்.",
    "card_title_1": "உதவிக்கு அணுகவும்",
    "card_desc_1": "நீங்கள் சந்திக்கும் பிரச்சனை அல்லது சவால் சார்ந்த தலைப்புகளை தேடலாம். மேலும் உங்களுக்கு விருப்பமான துறையில் இருக்கும் பிரச்சனைகள் அல்லது தீர்வுகளை தேடலாம்.",
    "card_title_2": "உங்கள் நிபுணத்துவத்தை வழங்க",
    "card_desc_2": "உங்கள் சேவைகளை வழங்கி, தொழில், ஆராய்ச்சி மற்றும் உள்கட்டமைப்பு வசதிகளில் உங்கள் கடந்தகால திட்டங்களைப் பகிர்ந்து கொள்ளுங்கள்.",
    "card_title_3": "தீர்வுகளை பரிந்துரைக்க",
    "card_desc_3": "மற்றவர்களின் பிரச்சனைகள் / சவால்களுக்கு உங்கள் யோசனையை பரிந்துரையுங்கள்.",
    "contact_title": "எங்களை தொடர்பு கொள்ளவும்",
    "contact_address": "தகவல் தொழில் நுட்பவியல் துறை, தமிழ் நாடு அரசு, நாமக்கல் கவிஞர் மாளிகை, புனித ஜார்ஜ் கோட்டை, தலைமைச் செயலகம், சென்னை - 600009",
    "follow_title": "எங்களை பின்தொடரவும்"
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
