export const ui: Record<string, Record<string, string>> = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "home.whatwedo": "What We Do",
    "structure.heading": "Organization Structure of DSC",
    "structure.intro":
      "The Royal Government has established the Digital Security Committee (D.S.C.) in order to ensure the efficient and effective function in leading, coordinating and promoting the management of digital security to protect the interests of all social actors against all forms of attacks as to respond to all technical aspects and relevant forces and thereby maintaining and protecting digital security.",
    "structure.dscHeading":
      "Structure of the Digital Security Committee (D.S.C.)",
    "structure.dscIntro":
      "The Digital Security Committee (DSC) of Cambodia is composed of high-ranking officials including the Prime Minister as Chairman, Deputy Prime Ministers, and various Ministers as Vice-Chairmen, along with Secretaries of State and military leaders as members. Its composition is formalized by the Royal Government, with provisions for adding more members as needed. The DSC convenes biannually, with the possibility of extraordinary meetings, chaired by designated officials or their delegates, ensuring continuity and decision-making authority across its membership.",
    "structure.orgIntro":
      "The D.S.C. has a subordinating General Secretariat, overseeing 4 units, Cambodian Cyber Security Unit, Anti-Cybercrime Unit, Cyber Space Defense Unit, and Cyber Diplomatic affairs Unit. These units represent various ministries including Interior, National Defense, and Foreign Affairs, with provisions for additional deputies as needed. Appointments to these roles are made by the Royal Government upon request from the Minister of Posts and Telecommunications.",
    "structure.generalSecretaryHeading":
      "Structure of D.S.C.'s General Secretariat",
    "structure.generalSecretaryIntro":
      "The General Secretary of the Digital Security Committee (DSC) is headed by the Minister of Posts and Telecommunications, supported by several Deputy Secretary Generals and is responsible for directs and coordinates all technical and administrative aspects of digital security, serving as a key assistant to the Chairman. This includes managing various specialized units, overseeing human resources and budgeting, ensuring secure file and data management, and preparing comprehensive reports on digital security efforts. Additionally, they undertake any further duties as required by the Chairman, showcasing their pivotal role in the operational and strategic functions of the DSC.",
    "about.dsc": "About Digital Security Committee",
    "about.dscText":
      "The Royal Government has established the Digital Security Committee (D.S.C.) in order to ensure the efficient and effective function in leading, coordinating and promoting the management of digital security to protect the interests of all social actors against all forms of attacks as to respond to all technical aspects and relevant forces and thereby maintaining and protecting digital security.",
    "about.strategies": "Strategic Goals and Strategies",
    "about.strategiesText":
      "In order to achieve the above vision and objectives, the Royal Government has set four strategic goals and ten strategies as follows:",
    "about.roleResponsibilities": "Role and Responsibilites",
  },
  km: {
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "home.whatwedo": "កាតព្វកិច្ចរបស់យើង",
    "structure.heading": "រចនាសម្ព័ន្ធរបស់អគ្គលេខាធិការដ្ឋាន គ.ស.ឌ.",
    "structure.intro":
      "រាជរដ្ឋាភិបាលបានបង្កើត “គណៈកម្មាធិការសន្តិសុខឌីជីថល” ដែលហៅកាត់ថា គ.ស.ឌ. ក្នុងគោលបំណងធានាប្រសិទ្ធភាពនិងស័ក្តិសិទ្ធិភាពនៃការបំពេញមុខងារដឹកនាំ សម្របសម្រួល និងជំរុញការគ្រប់គ្រងសន្តិសុខឌីជីថល ដើម្បីការពារអត្ថប្រយោជន៍របស់គ្រប់តួអង្គសង្គមទប់ទល់នឹងការវាយប្រហារគ្រប់រូបភាព ឆ្លើយតបគ្រប់ផ្នែកទាំងបច្ចេកទេសនិងកម្លាំងពាក់ព័ន្ធនឹងការធានានិងការពារសន្តិសុខឌីជីថល។ ",
    "about.dsc": "About Digital Security Committee",
    "about.dscText":
      "រាជរដ្ឋាភិបាលបានបង្កើត “គណៈកម្មាធិការសន្តិសុខឌីជីថល” ដែលហៅកាត់ថា គ.ស.ឌ. ក្នុងគោលបំណងធានាប្រសិទ្ធភាពនិងស័ក្តិសិទ្ធិភាពនៃការបំពេញមុខងារដឹកនាំ សម្របសម្រួល និងជំរុញការគ្រប់គ្រងសន្តិសុខឌីជីថល ដើម្បីការពារអត្ថប្រយោជន៍របស់គ្រប់តួអង្គសង្គមទប់ទល់នឹងការវាយប្រហារគ្រប់រូបភាព ឆ្លើយតបគ្រប់ផ្នែកទាំងបច្ចេកទេសនិងកម្លាំងពាក់ព័ន្ធនឹងការធានានិងការពារសន្តិសុខឌីជីថល។ ",
    "about.strategies": "គោលដៅជាយុទ្ធសាស្រ្ត និងយុទ្ធសាស្ត្រ",
    "about.strategiesText":
      "ដើម្បីសម្រេចបាននូវចក្ខុវិស័យនិងគោលបំណងខាងលើ រដ្ឋាភិបាលដាក់ចេញគោលដៅជាយុទ្ធសាស្ត្រចំនួន៤និងយុទ្ធសាស្ត្រចំនួន១០ ដូចខាងក្រោម៖",
    "about.roleResponsibilities": "តួនាទី និងភារកិច្ច",
  },
} as const;

export const languages = {
  en: "en",
  km: "km",
} as const;

export type SupportedLanguage = keyof typeof languages;

export const defaultLang = languages.km;
