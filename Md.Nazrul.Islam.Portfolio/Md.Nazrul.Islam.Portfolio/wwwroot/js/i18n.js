/* i18n.js - English / Bangla switch
   ------------------------------------------------------------------
   To translate something new: copy the English text exactly as it appears on the
   page, add one  "English": "বাংলা",  line to TEXT, save, refresh. That is all.
   ------------------------------------------------------------------ */
(function () {
    "use strict";

    var TEXT = {
        /* ---------- menu & general ---------- */
        "Home": "হোম",
        "About": "পরিচিতি",
        "Education": "শিক্ষা",
        "Skills": "দক্ষতা",
        "Experience": "অভিজ্ঞতা",
        "Projects": "প্রজেক্ট",
        "Tools": "টুলস",
        "Let's talk": "চলুন কথা বলি",
        "Skip to content": "মূল অংশে যান",
        "Privacy": "গোপনীয়তা",

        /* ---------- hero ---------- */
        "HELLO, I'M": "হ্যালো, আমি",
        "Md. Nazrul Islam": "মো. নাজরুল ইসলাম",
        "MIS & Data Management": "এমআইএস ও ডেটা ম্যানেজমেন্ট",
        "Sales Operations": "সেলস অপারেশন্স",
        "I bring together technology, data management, and operational experience to support reliable digital workflows and efficient business operations.":
            "আমি প্রযুক্তি, ডেটা ব্যবস্থাপনা ও কর্মক্ষেত্রের অভিজ্ঞতাকে একসাথে করে নির্ভরযোগ্য ডিজিটাল কর্মপ্রবাহ ও দক্ষ ব্যবসায়িক কার্যক্রমে সহায়তা করি।",
        "View My Projects": "আমার প্রজেক্ট দেখুন",
        "Contact Me": "আমার সাথে যোগাযোগ",
        "Download CV": "সিভি ডাউনলোড",
        "Open to professional opportunities": "পেশাদার সুযোগের জন্য উন্মুক্ত",
        "IT Support & Data Operations Professional": "আইটি সাপোর্ট ও ডেটা অপারেশন্স পেশাদার",
        "Currently learning": "বর্তমানে শিখছি",
        "Scroll": "স্ক্রল",
        "3+ years": "৩+ বছর",
        "distributor operations": "ডিস্ট্রিবিউটর অপারেশন্স",
        "Excel & MIS": "এক্সেল ও এমআইএস",
        "daily sales reporting": "দৈনিক সেলস রিপোর্টিং",
        "Marico & Godrej": "ম্যারিকো ও গোদরেজ",
        "FMCG distributors": "এফএমসিজি ডিস্ট্রিবিউটর",
        "Open to work": "কাজের সুযোগের জন্য উন্মুক্ত",
        "IT Support, MIS & Data roles in Dhaka": "ঢাকায় আইটি সাপোর্ট, এমআইএস ও ডেটা সংক্রান্ত পদে",
        "IT support, MIS reporting and data management for FMCG distributors, with a developer's mindset.":
            "এফএমসিজি ডিস্ট্রিবিউটরদের জন্য আইটি সাপোর্ট, এমআইএস রিপোর্টিং ও ডেটা ম্যানেজমেন্ট, একজন ডেভেলপারের মানসিকতা নিয়ে।",

        /* ---------- about ---------- */
        "// About Me": "// আমার সম্পর্কে",
        "Professional Profile": "পেশাগত পরিচিতি",
        "I am also developing my programming skills in C#, ASP.NET Core, and Microsoft SQL Server as I continue to grow toward a more technology-focused career.":
            "আমি একইসাথে C#, ASP.NET Core ও Microsoft SQL Server-এ আমার প্রোগ্রামিং দক্ষতা গড়ে তুলছি, যাতে আরও প্রযুক্তিকেন্দ্রিক ক্যারিয়ারের দিকে এগিয়ে যেতে পারি।",
        "IT Support": "আইটি সাপোর্ট",
        "Data Management": "ডেটা ম্যানেজমেন্ট",
        "Programming Learner": "প্রোগ্রামিং শিক্ষার্থী",
        "Years of Experience": "বছরের অভিজ্ঞতা",
        "Years of experience": "বছরের অভিজ্ঞতা",
        "Roles Held": "পদে দায়িত্ব পালন",
        "Roles held": "পদে দায়িত্ব পালন",
        "FMCG Brands Supported": "এফএমসিজি ব্র্যান্ডে সহায়তা",
        "FMCG brands supported": "এফএমসিজি ব্র্যান্ডে সহায়তা",

        /* ---------- education ---------- */
        "// Education": "// শিক্ষা",
        "Academic Background": "শিক্ষাগত পটভূমি",
        "My academic journey has helped me build a foundation in computer science, technology and general education.":
            "আমার শিক্ষাজীবন আমাকে কম্পিউটার সায়েন্স, প্রযুক্তি ও সাধারণ শিক্ষায় একটি ভিত্তি গড়তে সাহায্য করেছে।",
        "Result": "ফলাফল",
        "Diploma in Computer Science and Application": "কম্পিউটার সায়েন্স অ্যান্ড অ্যাপ্লিকেশনে ডিপ্লোমা",
        "Higher Secondary Certificate (HSC)": "উচ্চ মাধ্যমিক সনদ (এইচএসসি)",
        "Secondary School Certificate (SSC)": "মাধ্যমিক স্কুল সনদ (এসএসসি)",
        "Bangladesh Open University": "বাংলাদেশ উন্মুক্ত বিশ্ববিদ্যালয়",
        "Jafarganj Mir Abdul Gafur College": "জাফরগঞ্জ মীর আব্দুল গফুর কলেজ",
        "Debidwar Govt. Reaz Uddin Pilot Model High School": "দেবীদ্বার সরকারি রিয়াজ উদ্দিন পাইলট মডেল উচ্চ বিদ্যালয়",

        /* ---------- skills ---------- */
        "// Skills": "// দক্ষতা",
        "Technical & Professional Skills": "প্রযুক্তিগত ও পেশাগত দক্ষতা",
        "Programming": "প্রোগ্রামিং",
        "Database": "ডাটাবেস",
        "Data & Reporting": "ডেটা ও রিপোর্টিং",
        "IT Operations": "আইটি অপারেশন্স",
        "Business Operations": "ব্যবসায়িক কার্যক্রম",
        "Currently learning C# programming fundamentals": "বর্তমানে C# প্রোগ্রামিংয়ের মৌলিক বিষয়গুলো শিখছি",
        "Learning .NET application development": ".NET অ্যাপ্লিকেশন ডেভেলপমেন্ট শিখছি",
        "Database fundamentals and SQL queries": "ডাটাবেসের মৌলিক ধারণা ও SQL কোয়েরি",
        "Data Entry": "ডেটা এন্ট্রি",
        "Accurate data entry and record maintenance": "নির্ভুল ডেটা এন্ট্রি ও রেকর্ড সংরক্ষণ",
        "Organizing and maintaining business data": "ব্যবসায়িক ডেটা সংগঠিত ও সংরক্ষণ",
        "Sales Reporting": "সেলস রিপোর্টিং",
        "Sales data recording and reporting": "বিক্রয় তথ্য লিপিবদ্ধকরণ ও রিপোর্টিং",
        "Computer Operations": "কম্পিউটার অপারেশন্স",
        "Daily computer operations and office workflows": "দৈনন্দিন কম্পিউটার পরিচালনা ও অফিস কর্মপ্রবাহ",
        "Basic IT Troubleshooting": "মৌলিক আইটি ট্রাবলশুটিং",
        "Basic computer and software troubleshooting": "মৌলিক কম্পিউটার ও সফটওয়্যার সমস্যা সমাধান",
        "Distributor Systems": "ডিস্ট্রিবিউটর সিস্টেম",
        "Distributor operations and workflow management": "ডিস্ট্রিবিউটর কার্যক্রম ও কর্মপ্রবাহ ব্যবস্থাপনা",
        "Sales coordination and distributor support": "বিক্রয় সমন্বয় ও ডিস্ট্রিবিউটর সহায়তা",

        /* ---------- experience ---------- */
        "// Experience": "// অভিজ্ঞতা",
        "Professional Experience": "পেশাগত অভিজ্ঞতা",
        "Distributor Sales Representative": "ডিস্ট্রিবিউটর সেলস রিপ্রেজেন্টেটিভ",
        "Computer Operator": "কম্পিউটার অপারেটর",
        "Marico Bangladesh Ltd.": "ম্যারিকো বাংলাদেশ লিমিটেড",
        "Godrej Household Products BD Ltd.": "গোদরেজ হাউসহোল্ড প্রোডাক্টস বিডি লিমিটেড",
        "Support daily sales and distribution operations, prepare sales reports and coordinate with customers and the distributor team.":
            "দৈনন্দিন বিক্রয় ও বিতরণ কার্যক্রমে সহায়তা করি, সেলস রিপোর্ট প্রস্তুত করি এবং গ্রাহক ও ডিস্ট্রিবিউটর টিমের সাথে সমন্বয় করি।",
        "Operated distributor-level systems, prepared daily sales and distribution reports, and troubleshot routine IT issues.":
            "ডিস্ট্রিবিউটর পর্যায়ের সিস্টেম পরিচালনা করেছি, দৈনিক বিক্রয় ও বিতরণ রিপোর্ট তৈরি করেছি এবং নিয়মিত আইটি সমস্যার সমাধান করেছি।",
        "Managed daily sales and distribution reporting with MS Excel and custom software, keeping data accurate and head-office communication timely.":
            "এমএস এক্সেল ও কাস্টম সফটওয়্যার দিয়ে দৈনিক বিক্রয় ও বিতরণ রিপোর্টিং পরিচালনা করেছি; ডেটা নির্ভুল রেখেছি এবং প্রধান কার্যালয়ের সাথে সময়মতো যোগাযোগ বজায় রেখেছি।",
        "Supported daily sales operations, sales reporting and customer coordination at the distributor level.":
            "ডিস্ট্রিবিউটর পর্যায়ে দৈনিক বিক্রয় কার্যক্রম, সেলস রিপোর্টিং ও গ্রাহক সমন্বয়ে সহায়তা করেছি।",

        /* ---------- projects ---------- */
        "// Projects": "// প্রজেক্ট",
        "Featured Projects": "নির্বাচিত প্রজেক্ট",
        "Projects will be added soon.": "প্রজেক্টগুলো শীঘ্রই যোগ করা হবে।",
        "Code": "কোড",
        "Live Demo": "লাইভ ডেমো",
        "Personal Portfolio Website": "ব্যক্তিগত পোর্টফোলিও ওয়েবসাইট",
        "Data-driven portfolio built with ASP.NET Core MVC, EF Core and SQL Server, with a contact form.":
            "ASP.NET Core MVC, EF Core ও SQL Server দিয়ে তৈরি ডেটা-চালিত পোর্টফোলিও, যোগাযোগ ফর্মসহ।",

        /* ---------- tools ---------- */
        "// Tools": "// টুলস",
        "Tools & Technologies": "টুলস ও প্রযুক্তি",
        "Office Productivity": "অফিস প্রোডাকটিভিটি",
        "Development": "ডেভেলপমেন্ট",
        "Spreadsheet management, data entry and sales reporting": "স্প্রেডশিট ব্যবস্থাপনা, ডেটা এন্ট্রি ও সেলস রিপোর্টিং",
        "Document preparation and office documentation": "ডকুমেন্ট প্রস্তুত ও অফিস নথিপত্র",
        "SQL queries and relational database practice": "SQL কোয়েরি ও রিলেশনাল ডাটাবেস অনুশীলন",
        "Development environment for learning C# and .NET": "C# ও .NET শেখার জন্য ডেভেলপমেন্ট পরিবেশ",

        /* ---------- contact ---------- */
        "// Contact": "// যোগাযোগ",
        "Get In Touch": "যোগাযোগ করুন",
        "I'm open to IT support, MIS, data management and sales operations roles. Send me a message and I will reply as soon as possible.":
            "আমি আইটি সাপোর্ট, এমআইএস, ডেটা ম্যানেজমেন্ট ও সেলস অপারেশন্স সংক্রান্ত পদের জন্য উন্মুক্ত। আমাকে একটি বার্তা পাঠান, আমি যত দ্রুত সম্ভব উত্তর দেব।",
        "Dhaka, Bangladesh": "ঢাকা, বাংলাদেশ",
        "Name": "নাম",
        "Email": "ইমেইল",
        "Subject": "বিষয়",
        "Message": "বার্তা",
        "Send Message": "বার্তা পাঠান",
        "Thank you! Your message has been sent.": "ধন্যবাদ! আপনার বার্তা পাঠানো হয়েছে।",
        "Please check your input and try again.": "অনুগ্রহ করে আপনার দেওয়া তথ্য যাচাই করে আবার চেষ্টা করুন।",
        "Please check your input and try again": "অনুগ্রহ করে আপনার দেওয়া তথ্য যাচাই করে আবার চেষ্টা করুন।",

        /* ---------- privacy page ---------- */
        "// Privacy": "// গোপনীয়তা",
        "Privacy Policy": "গোপনীয়তা নীতি",
        "This website does not use advertising trackers. The only personal information collected is what you type into the contact form: your name, email address, subject and message.":
            "এই ওয়েবসাইটে বিজ্ঞাপনের ট্র্যাকার ব্যবহার করা হয় না। শুধু যোগাযোগ ফর্মে আপনি যা লেখেন, অর্থাৎ আপনার নাম, ইমেইল ঠিকানা, বিষয় ও বার্তা, সেটুকুই সংগ্রহ করা হয়।",
        "This information is stored in the website database and is used only to read and reply to your message. It is not sold or shared with anyone else.":
            "এই তথ্য ওয়েবসাইটের ডাটাবেসে সংরক্ষিত থাকে এবং শুধু আপনার বার্তা পড়তে ও উত্তর দিতে ব্যবহার করা হয়। এটি বিক্রি করা হয় না বা অন্য কারও সাথে শেয়ার করা হয় না।",
        "To ask for your message to be deleted, send an email using the address shown in the Contact section.":
            "আপনার বার্তা মুছে ফেলতে চাইলে যোগাযোগ অংশে দেওয়া ঠিকানায় ইমেইল করুন।",

        /* ---------- error page ---------- */
        "// Error": "// ত্রুটি",
        "Something went wrong": "কিছু একটা ভুল হয়েছে",
        "Sorry, the page you requested could not be shown. Please try again later.":
            "দুঃখিত, আপনার অনুরোধ করা পেজটি দেখানো যায়নি। অনুগ্রহ করে পরে আবার চেষ্টা করুন।",
        "Back to Home": "হোমে ফিরে যান"
    };

    /* Experience locations. Also registered with the leading "· " that the page prints. */
    var LOCATIONS = {
        "M Corporation, Uttara, Dhaka": "এম কর্পোরেশন, উত্তরা, ঢাকা",
        "M S Distribution, Gulistan, Dhaka": "এম এস ডিস্ট্রিবিউশন, গুলিস্তান, ঢাকা",
        "M/S Abul Khair Trading, Debidwar, Cumilla": "এম/এস আবুল খায়ের ট্রেডিং, দেবীদ্বার, কুমিল্লা",
        "Unicorn Distribution Ltd., Cumilla": "ইউনিকর্ন ডিস্ট্রিবিউশন লিমিটেড, কুমিল্লা"
    };
    Object.keys(LOCATIONS).forEach(function (k) {
        TEXT[k] = LOCATIONS[k];
        TEXT["\u00B7 " + k] = "\u00B7 " + LOCATIONS[k];
    });

    /* Paragraphs that contain formatting (<strong>): replaced as HTML, so only put TRUSTED text here */
    var HTML = {
        "Hello! I'm MD. NAZRUL ISLAM, an IT support and computer operations professional with experience in distributor operations, data management, sales reporting, and office automation.":
            "হ্যালো! আমি <strong>মো. নাজরুল ইসলাম</strong>, একজন আইটি সাপোর্ট ও কম্পিউটার অপারেশন্স পেশাদার, যার ডিস্ট্রিবিউটর অপারেশন, ডেটা ম্যানেজমেন্ট, সেলস রিপোর্টিং ও অফিস অটোমেশনে অভিজ্ঞতা রয়েছে।"
    };

    /* Words the hero typing effect cycles through */
    var TYPED_BN = "সি#|এএসপি.নেট কোর|এসকিউএল সার্ভার";

    /* ---------- numbers, months, patterns ---------- */
    var DIGITS = "০১২৩৪৫৬৭৮৯";
    function bnDigits(s) { return String(s).replace(/\d/g, function (d) { return DIGITS.charAt(Number(d)); }); }

    var MONTHS = {
        Jan: "জানুয়ারি", Feb: "ফেব্রুয়ারি", Mar: "মার্চ", Apr: "এপ্রিল", May: "মে", Jun: "জুন",
        Jul: "জুলাই", Aug: "আগস্ট", Sep: "সেপ্টেম্বর", Oct: "অক্টোবর", Nov: "নভেম্বর", Dec: "ডিসেম্বর"
    };

    var PATTERNS = [
        // "CGPA 2.84 / 4.00"  ->  "সিজিপিএ ২.৮৪ / ৪.০০"
        [/^(C?GPA)\s+([\d.]+)\s*\/\s*([\d.]+)$/, function (m) {
            return (m[1] === "CGPA" ? "সিজিপিএ" : "জিপিএ") + " " + bnDigits(m[2]) + " / " + bnDigits(m[3]);
        }]
    ];

    function translateDateText(text) {
        return text
            .replace(/\s+/g, " ").trim()
            .replace(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\b/g, function (m) { return MONTHS[m]; })
            .replace(/\bPresent\b/g, "বর্তমান")
            .replace(/\d/g, function (d) { return DIGITS.charAt(Number(d)); });
    }

    /* ---------- engine ---------- */
    var SKIP = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, SVG: 1, TEXTAREA: 1, INPUT: 1, SELECT: 1, CODE: 1 };
    var has = Object.prototype.hasOwnProperty;
    var saved = [];

    function norm(s) { return s.replace(/\s+/g, " ").trim(); }

    function lookup(key) {
        if (has.call(TEXT, key)) return TEXT[key];
        for (var i = 0; i < PATTERNS.length; i++) {
            var m = PATTERNS[i][0].exec(key);
            if (m) return PATTERNS[i][1](m);
        }
        return null;
    }

    function translateNode(node) {
        if (node.nodeType === 3) {                                   // text
            var raw = node.nodeValue;
            var key = norm(raw);
            if (!key) return;
            var t = lookup(key);
            if (t === null) return;
            saved.push({ node: node, text: raw });
            node.nodeValue = raw.match(/^\s*/)[0] + t + raw.match(/\s*$/)[0];
            return;
        }

        if (node.nodeType !== 1) return;                             // not an element
        if (SKIP[node.tagName.toUpperCase()] || node.hasAttribute("data-no-i18n")) return;
        if (node.id === "typed-text" || node.classList.contains("typed-cursor")) return;

        if (node.classList.contains("education-period")) {           // "May 2026 - Present", "2024 - 2026"
            saved.push({ el: node, date: node.textContent });
            node.textContent = translateDateText(node.textContent);
            return;
        }

        if (node.children.length > 0) {                              // paragraph with <strong> etc.
            var k = norm(node.textContent);
            if (has.call(HTML, k)) {
                saved.push({ el: node, html: node.innerHTML });
                node.innerHTML = HTML[k];
                return;
            }
        }

        Array.prototype.slice.call(node.childNodes).forEach(translateNode);
    }

    function restore() {
        for (var i = saved.length - 1; i >= 0; i--) {
            var s = saved[i];
            if (s.node) s.node.nodeValue = s.text;
            else if (s.html !== undefined) s.el.innerHTML = s.html;
            else if (s.date !== undefined) s.el.textContent = s.date;
        }
        saved = [];
    }

    var typed = document.getElementById("typed-text");
    var typedEn = typed ? typed.getAttribute("data-words") : null;

    function setTypedWords(lang) {
        if (!typed || !typedEn) return;
        var words = lang === "bn" ? TYPED_BN : typedEn;
        typed.setAttribute("data-words", words);
        typed.dataset.words = words;
        // Reduced-motion visitors have no typing loop, so update the static word
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            typed.textContent = words.split("|")[0];
        }
    }

    function apply(lang) {
        restore();
        if (lang === "bn") translateNode(document.body);
        document.documentElement.lang = lang;
        setTypedWords(lang);
    }

    function finishPending() { document.documentElement.classList.remove("i18n-pending"); }

    /* ---------- start ---------- */
    var current = document.documentElement.lang === "bn" ? "bn" : "en";
    apply(current);
    finishPending();
    window.setTimeout(finishPending, 2500);   // safety net

    var button = document.querySelector(".lang-toggle");
    if (button) {
        button.setAttribute("aria-pressed", current === "bn" ? "true" : "false");
        button.addEventListener("click", function () {
            current = current === "bn" ? "en" : "bn";
            apply(current);
            button.setAttribute("aria-pressed", current === "bn" ? "true" : "false");
            try { localStorage.setItem("lang", current); } catch (e) { /* ignore */ }
        });
    }
})();
