//JS conditional statements behind the responses - with regex

function getBotResponse(input) {
    if (input === 'hi' || input === "Hi" || input === "HI") {
        return "Hi there! How are you?"
    } else if (input.match(/hey/gi) || input.match(/hello/gi) || input.match(/holla/gi) || input.match(/how are you/gi)) {
        return "Hi there! How are you?";
    } else if (input.match(/fine/gi) || input.match(/good/gi) || input.match(/great/gi) || input.match(/cool/gi)) {
        return "Great to know! How may I help you today?";
    } else if (input.match(/kedu/gi)) {
        return "O di  mma &#128512;";
    } else if (input.match(/ni bo lo wa/gi) || input.match(/nibo lo wa/gi) || input.match(/nibo lowa/gi)) {
        return "Mo wa pa &#128512;";
    } else if (input.match(/need support/gi) || input.match(/want support/gi)) {
        return "I am always here. What kind of support do you need?";
    } else if (input.match(/contact details/gi) || input.match(/change contact/gi)) {
        return "Thanks for asking. Please update your details using this form: www.xyz.klm/update-forms";
    } else if (input.match(/offers/gi) || input.match(/special offer/gi)) {
        return "Our latest offers could be found here: www.xyz.klm/offers";
    } else if (input.match(/product/gi) || input.match(/solutions/gi) || input.match(/service/gi) || input.match(/offerings/gi)) {
        return "Glad you asked! You may visit the online shop at www.xyz.klm for more about our products and services";
    } else if (input.match(/pay/gi) || input.match(/payment/gi)) {
        return "Payment is seamless. You could pay via PayPal or a credit card";
    } else if (input.match(/signup/gi) || input.match(/sign up/gi) || input.match(/signing up/gi) || input.match(/onboard/gi)) {
        return "Signing up is quite simple. Please follow the steps on this link: www.xyz.klm/sign-up";
    } else if (input.match(/password/gi) || input.match(/reset password/gi)) {
        return "It's so easy to do that. Check out this link to reset your password: www.xyz.klm/pw-reset";
    } else if (input.match(/subscription/gi) || input.match(/subscribe/gi) || input.match(/package/gi)) {
        return "Glad you asked! Here is a list of our subscription packages: www.xyz.klm/packages"
    } else if (input.match(/representative/gi) || input.match(/rep/g)) {
        return "Sure! Please call this number 000111222333";
    } else if (input.match(/phone number/gi) || input.match(/phone call/gi) || input.match(/phone/gi)) {
        return "Please reach us with 0011223344.";
    } else if (input.match(/job/gi) || input.match(/career/gi)) {
        return "Interested in working for us? Please check our latest offers at www.xyz.klm/careers";
    } else if (input.match(/email/gi) || input.match(/mail/gi)) {
        return "Please send us an email to nobody@nomail.com";
    } else if (input.match(/thank/gi)) {
        return "You are welcome &#128512;";
    } else if (input.match(/bye/gi) || input.match(/goodbye/gi)) {
        return "Thank you for choosing XYZ. Goodbye.";
    } else if (input.match(/have nice day/gi) || input.match(/have good day/gi) || input.match(/have great day/gi)) {
        return "Have a wonderful day too!";
    } else if (input.match(/see you/gi) || input.match(/see ya/gi) || input.match(/ciao/gi) || input.match(/later/gi)) {
        return "If that is all. See you next time. Have a pleasant day.";
    } else if (input.match(/imela/gi) || input.match(/daalu/gi) || input.match(/ngwanu/gi) || input.match(/jisike/gi)) {
        return "Jisike, ezigbo onye ahia anyi &#128512;.";
    } else if (input.match(/o dabo/gi) || input.match(/odabo/gi)) {
        return "ma ri e lojo miiran &#128512;.";
    } else if (input.match(/sannu da zuwa/gi) || input.match(/sanu da zuwa/gi) || input.match(/sannu dazuwa/gi)) {
        return "sannu sannu lafiya &#128512;.";
    } else if (input.match(/sannu/gi) || input.match(/sanu/gi)) {
        return "Sannu &#128512;.";
    } else if (input.match(/howfar/gi) || input.match(/how far/gi) || input.match(/how you dey/gi) || input.match(/how area/gi) || input.match(/wetin dey/gi)) {
        return "I dey. Wetin dey happen? &#128512;";
    } else if (input.match(/book appointment/gi)) {
        return "Surely, you could book an appointment via www.xyz.klm/appointments";
    } else if (input.match(/Testing!/gi)) {
        return "I actually work";
    } else if (input.match(/Liked/gi)) {
        return "Thanks!";
    } else if (input.match(/okay/gi) || input.match(/nice/gi) || input.match(/great/gi) || input.match(/alright/gi) || input.match(/wow/gi)) {
        return "Yes.";
    } else if (input.match(/sad/gi) || input.match(/unhappy/gi) || input.match(/angry/gi) || input.match(/annnoyed/gi) || input.match(/disappoint/gi) || input.match(/satisfied/gi)) {
        return "I am sorry to hear that. However, be rest assured that I am here for you. Please, talk to me.";
    } else if (input.match(/cry/gi) || input.match(/tears/gi) || input.match(/tired/gi) || input.match(/upset/gi)) {
        return 'I understand when customers feel let down. Please tell me the specific issue.';
    } else if (input.match(/happy/gi) || input.match(/elated/gi) || input.match(/excited/gi) || input.match(/joy/gi)) {
        return "Your positivity is admirable! We are glad to put smiles on your face!";
    } else if (input.match(/think chatbots/gi) || input.match(/think bot/gi)) {
        return "Chatbots are beautiful. They make our lives easier.";
    } else if (input.match(/founded/gi) || input.match(/established/gi) || input.match(/created/gi)) {
        return "Thank you for asking. We have been running since 14-08-1997.";
    } else if (input.match(/keep data/gi) || input.match(/retain data/gi) || input.match(/store data/gi)) {
        return "After six months of first contact, we delete your data permanently.";
    } else if (input.match(/sing/gi) || input.match(/song/gi)) {
        return "Well, I am still training my voice. Watch this space...";
    } else if (input.match(/info/gi) || input.match(/need information/gi) || input.match(/want info/gi) || input.match(/looking info/gi)) {
        return "There is so much information I can help you with. Which would you like to get?";
    } else if (input.match(/to a manager/gi) || input.match(/with a manager/gi)) {
        return 'Sure, you can file a complaint to our managers on 123456789 or via email through you@them.com';
    } else if (input.match(/opening times/gi) || input.match(/time available/gi) || input.match(/opening hour/gi) || input.match(/opening day/gi) || input.match(/you open/gi)) {
        return "We are open every week day from 08:00 to 18:00, and on public holidays - 11:00 to 17:00.";
    } else if (input.match(/employee data/gi) || input.match(/personal data/gi) || input.match(/customer data/gi) || input.match(/with data/gi)) {
        return 'Our data protection rules are strict, hence we do not reveal sensitive data.';
    } else if (input.match(/what technology/gi)) {
        return 'You may have to guess.';
    } else if (input.match(/js/gi) || input.match(/javascript/gi) || input.match(/python/gi) || input.match(/java/gi) || input.match(/c#/gi) || input.match(/c++/g)) {
        return 'Keep guessing!';
    } else if (input.match(/refund/gi) || input.match(/terms conditions/gi)) {
        return 'Please read about our terms and conditions here at kedu.io';
    } else if (input.match(/it is about/gi) || input.match(/it's about/gi)) {
        return "We apologise. Would you like to schedule an appointment via phone or email immediately?";
    } else if (input.match(/complaint/gi) || input.match(/issue/gi) || input.match(/complain/gi) || input.match(/problem/gi)) {
        return 'What is the specific issue?';
    } else if (input.match(/credit card/gi) || input.match(/creditcard/gi) || input.match(/debit card/gi) || input.match(/debitcard/gi)) {
        return 'As long as your payment card is still valid, you are good to go. You may want to verify from your bank though. Only the following are accepted: AM, MC, and VS.';
    } else if (input.match(/fuck/gi) || input.match(/bitch/gi) || input.match(/nigger/gi) || input.match(/stupid/gi) || input.match(/suck/gi) || input.match(/shit/gi) || input.match(/duck/gi)) {
        const textInput = document.getElementById("textInput");
        textInput.disabled = true;
        textInput.placeholder = 'BLOCKED';
        textInput.style.color = 'white';
        return "Sorry, such language is not permitted on this platform, Thank you.";
    } else {
        return "I am sorry. Please could you rephrase your query or visit www.kedu.io/this for more?";
    }
}

