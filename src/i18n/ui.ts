export const ui: Record<string, Record<string, string>> = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "home.whatwedo": "What We Do",
    "structure.heading": "Organization Structure of DSC General Secretariat",
    "structure.intro": "The Royal Government has established the Digital Security Committee (D.S.C.) in order to ensure the efficient and effective function in leading, coordinating and promoting the management of digital security to protect the interests of all social actors against all forms of attacks as to respond to all technical aspects and relevant forces and thereby maintaining and protecting digital security.",
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
    "structure.intro": "រាជរដ្ឋាភិបាលបានបង្កើត “គណៈកម្មាធិការសន្តិសុខឌីជីថល” ដែលហៅកាត់ថា គ.ស.ឌ. ក្នុងគោលបំណងធានាប្រសិទ្ធភាពនិងស័ក្តិសិទ្ធិភាពនៃការបំពេញមុខងារដឹកនាំ សម្របសម្រួល និងជំរុញការគ្រប់គ្រងសន្តិសុខឌីជីថល ដើម្បីការពារអត្ថប្រយោជន៍របស់គ្រប់តួអង្គសង្គមទប់ទល់នឹងការវាយប្រហារគ្រប់រូបភាព ឆ្លើយតបគ្រប់ផ្នែកទាំងបច្ចេកទេសនិងកម្លាំងពាក់ព័ន្ធនឹងការធានានិងការពារសន្តិសុខឌីជីថល។ ",
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

export const defaultLang = languages.en;
