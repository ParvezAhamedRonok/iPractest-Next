//Main dataBase (14/2) Url = https://node-js-express-login-example.onrender.com
//Main data baseUrl or in live mood database url.. = https://node-js-express-login-example.onrender.com
//localstorage url = https://node-js-express-login-example.onrender.com
//OUR ALL URL'S

// Login , signup & counrty set url's
export const LOGIN_URL = "https://node-js-express-login-example.onrender.com/api/auth/signin";

export const SIGNUP_URL = "https://node-js-express-login-example.onrender.com/api/auth/signup";

export const COUNTRY_PUT_URL = "https://node-js-express-login-example.onrender.com/api/auth/updateUserByCountry";


//forgot password url's........
export const FORGOT_PASSWORD_POST_FOR_CHECK_USER_EMAIL = "https://node-js-express-login-example.onrender.com/api/auth/sendMailToTheUser"

export const FORGOT_PASSWORD_PUT_FOR_UPDATE_USER_PASSWORD = "https://node-js-express-login-example.onrender.com/api/auth/updateUserPassword"


//Delete User Account API URl---------
export const DELETE_USER_ACCOUNT_PARMANENTLY = "https://node-js-express-login-example.onrender.com/api/auth/DeleteAccountOftheUser"









//All modules url's

//Speakign url's
export const SPEAKING_POST_FOR_SET_SCORES = "https://node-js-express-login-example.onrender.com/api/user/SpeakingResults";

export const SPEAKING_POST_TO_GET_RESPONSE_USERDATA = "https://ipractest-406204.uc.r.appspot.com/speakingScore";
export const POST_SPEAKING_TO_GET_WITH_PUNCTUATION_DATA = "https://ipractest-406204.uc.r.appspot.com/speakingCorrection";

export const SPEAKING_GET_FOR_COLLECT_USER_DATA = 'https://node-js-express-login-example.onrender.com/api/user/SpeakingResults/';

export const SPEAKING_GET_FOR_COLLECT_SPECIFIC_ALL_USER_DATA = 'https://node-js-express-login-example.onrender.com/api/user/SpeakingResults/'

export const SPEAKING_GET_FOR_COLLECT_SPECIFIC_USER_LIMITED_DATA = 'https://node-js-express-login-example.onrender.com/api/user/SpeakingResults/byAuthorizedUser/'


export const SPEAKING_GET__ALL_USER__DATA_FORM_DATABASE = 'https://node-js-express-login-example.onrender.com/api/user/AllSpeakingResults/Allusers/byAuthorizedUser/'

export const SPEAKING_GET_SPECIFIC_USER_READING_LAST_DATA = "https://node-js-express-login-example.onrender.com/api/user/get-SpecificUser-Speaking-Data-last-One/"







//Writing url's
export const WRITING_POST_FOR_SET_SCORES = "https://node-js-express-login-example.onrender.com/api/user/WritingResults";

export const WRITING_POST_CHECK_ANSWER = "https://ipractest-406204.uc.r.appspot.com/writingScore";

export const WRITING_POST_UPLOAD_IMAGES = "https://ipractest-406204.uc.r.appspot.com/imageUpload";

export const WRITING_POST_IPRACTEST_FEEDBACK = "https://ipractest-406204.uc.r.appspot.com/writingFeedback";

export const WRITING_GET_FOR_COLLECT_USER_DATA = 'https://node-js-express-login-example.onrender.com/api/user/WritingResults/';

export const WRITING_GET_FOR_COLLECT_SPECIFIC_ALL_USER_DATA = 'https://node-js-express-login-example.onrender.com/api/user/WritingResults/'

export const WRITING_GET_FOR_COLLECT_SPECIFIC_USER_LIMITED_DATA = 'https://node-js-express-login-example.onrender.com/api/user/WritingResults/byAuthorizedUser/'


export const WRITING_GET__ALL_USER__DATA_FORM_DATABASE = 'https://node-js-express-login-example.onrender.com/api/user/WritingResults/Allusers/byAuthorizedUser/'

export const WRITING_POST_SAVE_IPRACTEST_FEEDBACK_DATA_TO_DATABASE = "https://node-js-express-login-example.onrender.com/api/user/saveUserWritiniPractestFeedback"

export const WRITING_GET_SINGLE_USER_IPRACTEST_FEEDBACK_DATA = "https://node-js-express-login-example.onrender.com/api/user/getSpecificUserWritingiPractestFeedback/"

export const WRITING_POST_UPLOAD_IMAGE_QUESTION_TO_TRANSFORM_INTO_TEXT = "https://ipractest-406204.uc.r.appspot.com/getInfoAboutQuestion"

export const WRITING_POST_UPLOAD_GCP_IMAGE_TO_GET_TEXT_FROM_IMAGE = "https://ipractest-406204.uc.r.appspot.com/GCPimageToText"

export const WRITING_POST_GET_COHERENCE_SCORES_AFTER_EVALUATION = "https://ipractest-406204.uc.r.appspot.com/coherenceScore"









//READING url's
export const READING_POST_FOR_SET_SCORES = "https://node-js-express-login-example.onrender.com/api/user/ReadingResults"

export const READING_GET_FOR_COLLECT_USER_DATA = 'https://node-js-express-login-example.onrender.com/api/user/AllReadingResults/';

export const READING_GET_FOR_COLLECT_SPECIFIC_ALL_USER_DATA = 'https://node-js-express-login-example.onrender.com/api/user/AllReadingResults/'

export const READING_GET_FOR_COLLECT_SPECIFIC_USER_LIMITED_DATA = 'https://node-js-express-login-example.onrender.com/api/user/AllReadingResults/byAuthorizedUser/'


export const READING_GET__ALL_USER__DATA_FORM_DATABASE = 'https://node-js-express-login-example.onrender.com/api/user/AllReadingResults/Allusers/byAuthorizedUser/'

export const READING_GET_SPECIFIC_USER_READING_LAST_DATA = "https://node-js-express-login-example.onrender.com/api/user/get-SpecificUser-Reading-Data-last-One/"








//LISTENING url's
export const LISTENING_POST_FOR_SET_SCORES = "https://node-js-express-login-example.onrender.com/api/user/ListeningResults"

export const LISTENING_GET_FOR_COLLECT_USER_DATA = 'https://node-js-express-login-example.onrender.com/api/user/ListeningResults/';

export const LISTENING_GET_FOR_COLLECT_SPECIFIC_ALL_USER_DATA = 'https://node-js-express-login-example.onrender.com/api/user/ListeningResults/'

export const LISTENING_GET_FOR_COLLECT_SPECIFIC_USER_LIMITED_DATA = 'https://node-js-express-login-example.onrender.com/api/user/ListeningResults/byAuthorizedUser/'

export const LISTENING_GET__ALL_USER__DATA_FORM_DATABASE = 'https://node-js-express-login-example.onrender.com/api/user/ListeningResults/Allusers/byAuthorizedUser/'

export const LISTENING_GET_SPECIFIC_USER_READING_LAST_DATA = "https://node-js-express-login-example.onrender.com/api/user/get-SpecificUser-Listening-Data-last-One/"








// SOP URLS....
export const SOP_GET_SPECIFIC_USER_DATA = 'https://node-js-express-login-example.onrender.com/api/user/getSpecificUserSop/'

export const SOP_POST_FOR_GET_BACKENDFEEDBACK = "https://ipractest-406204.uc.r.appspot.com/makingSOP"

export const SOP_POST_FOR_STORE_USER_DATA_IN_BACKEND = 'https://node-js-express-login-example.onrender.com/api/user/saveUserAllSOPToDatabase'



//Comment Url's......
export const COMMENT_POST_FOR_STORE_USER_DATA = "https://node-js-express-login-example.onrender.com/api/user/Comments"


//Notification Url's.........
export const NOTIFICATION_POST_FOR_STORE_USER_DATA = "https://node-js-express-login-example.onrender.com/api/user/ForNotifications"


//PAYMENT URL'S.....

//aamarPay Url's....
export const AAMARPAY_POST_FOR_OPEN_CHECKOUTPAGE = "https://node-js-express-login-example.onrender.com/api/user/aamarPayPaymentMethods"

export const AAMARPAY_POST_REQUEST_FOR_UPGRADE_USER_PAYMENT_INFO = "https://node-js-express-login-example.onrender.com/api/user/UpgradeaamarPayPaymentMethods"

export const AAMARPAY_GET_USER_DATA_FROM_DATABASE = 'https://node-js-express-login-example.onrender.com/api/user/checkforDBAmerPayAccess/'





//Paypal Url's....
export const PAYPAL_POST_FOR_OPEN_CHECKOUTPAGE = "https://node-js-express-login-example.onrender.com/api/user/PaypalPay"

export const PAYPAL_POST_FOR_UPGRADE_USER_PAYMENT_INFO_WITH_AMOUNT= "https://node-js-express-login-example.onrender.com/api/user/upgrade-Paypay-Payment-Infor"

export const PAYPAL_GET_USER_DATA_FROM_DATABASE = 'https://node-js-express-login-example.onrender.com/api/user/AccesPaypalPaid/'



//Save user who Clicked for payment & cancel that ...not users in yet in Billing component have to do
export const SaveUserWhoClickedForPaymentButDonnot = "https://node-js-express-login-example.onrender.com/api/user/saveUserWhoClickedForPayment"


//get country name by time Zone with the help of backend of this url----------
export const GET_COUNTRY_BY_TIMEZONE_FROM_COMMENTS_API = "https://node-js-express-login-example.onrender.com/getUsersCountryByTimeZone"


//Referral's URL's
export const GET_REFERRALS_USERS_FROM_DATABASE = "https://node-js-express-login-example.onrender.com/api/user/Get-Allusers-WhoAre-Refered-By-Someone/"

export const POST_REFERRALS_USER_INTO_DATABASE = "https://node-js-express-login-example.onrender.com/api/user/Post-&-SaveUser-IfIt-Refered-By-Someone"





//Explanation URL's for reading && listening---
export const POST_EXPLANATIONS_DATA_FOR_STORE_INTO_DATABASE = "https://node-js-express-login-example.onrender.com/api/user/PostRequestion-For-Store-user-Explanaion-data"

export const GET_EXPLANATIONS_USER_DATA_FOR_CHECK_WITH_CONDITIONS = "https://node-js-express-login-example.onrender.com/api/user/Get-Request-for-Get-user-Explanation-data/"





//ALL 3RD PARTY URL'S
export const GET_ALL_COUNTRY = "https://restcountries.com/v3.1/all";

export const SIMPLE_API_FOR_POST = "https://jsonplaceholder.typicode.com/posts"