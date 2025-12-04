import { FileCheck, FormInput, PhoneCall, Stethoscope } from "lucide-react";

export const APP_NAME = "Dopomoga";
export const APP_DESCRIPTION =
    "Professional online consultations with psychologists, psychiatrists and personal doctors.";
export const APP_URL = "https://localhost:3000";
export const LOGO = "/logo.png";

export const services = [
    { name: 'Психологія', url: '/психологія' },
    { name: 'Психіатрія', url: '/психіатрія' },
    { name: 'Сімейна медицина', url: '/сімейна-медицина' }
]

export const contacts = [
    { type: 'email', value: 'test@medicine.com' },
    { type: 'mobile', value: '+380345523412' }
]

export const navItems = [
    { label: "Головна", path: "/" },
    { label: "Про нас", path: "/про-нас" },
    { label: "Послуги", path: "/послуги" },
    { label: "Контакти", path: "/контакти" },
    { label: "Лікарям", path: "/співпраця" },
];

export const faqs = [
    {
        question: "Як записатися на консультацію?",
        answer: "Ви можете записатися через форму на сайті або зателефонувати нам. Ми підберемо зручний час та формат консультації (відео або чат)."
    },
    {
        question: "Чи безпечні онлайн-консультації?",
        answer: "Так, всі консультації проводяться через захищені платформи з шифруванням даних. Ваші особисті дані та історія хвороби надійно захищені."
    },
    {
        question: "Які документи я отримаю після консультації?",
        answer: "Після консультації ви отримаєте офіційний висновок лікаря, рекомендації та, за потреби, електронний рецепт або направлення."
    },
    {
        question: "Чи можна отримати консультацію дитині?",
        answer: "Звісно! У нас є кваліфіковані педіатри та дитячі спеціалісти. Консультація проходить у комфортній для дитини формі."
    },
    {
        question: "Які формати консультацій доступні?",
        answer: "Ми пропонуємо відеоконсультації (найпопулярніший формат), текстові консультації в чаті та голосові дзвінки."
    },
];


export const steps = [
    {
        number: "Крок 1",
        title: "Заповніть форму",
        description: "Ви заповнюєте форму на сайті",
        icon: <FormInput className="w-8 h-8" />,
    },
    {
        number: "Крок 2",
        title: "Зв’яжемося з вами",
        description: "З вами зв'язуються та назначають час та дату консультації",
        icon: <PhoneCall className="w-8 h-8" />,
    },
    {
        number: "Крок 3",
        title: "Консультація з лікарем",
        description: "Вас консультує кваліфікований лікар",
        icon: <Stethoscope className="w-8 h-8" />,
    },
    {
        number: "Крок 4",
        title: "Отримайте висновок",
        description: "Ви отримуєте детальне медичне заключення",
        icon: <FileCheck className="w-8 h-8" />,
    },
];