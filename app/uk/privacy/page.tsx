import { PageWrapper } from "@/components/layout/page-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Політика конфіденційності",
  description:
    "Політика конфіденційності Lucky Link LLC. Дізнайтеся, як ми збираємо, використовуємо та захищаємо вашу персональну інформацію.",
  alternates: {
    canonical: "/uk/privacy",
    languages: {
      en: "/privacy",
      uk: "/uk/privacy",
      "x-default": "/privacy",
    },
  },
};

export default function PrivacyPage() {
  return (
    <PageWrapper>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <div className="mx-auto inline-block rounded-2xl border border-black/5 bg-background/50 px-6 py-5 backdrop-blur-sm">
                <h1
                  className="mb-4 text-4xl font-bold tracking-tight md:text-5xl"
                  style={{
                    color: "#0E0E0E",
                    WebkitTextStroke: "1px rgba(255,255,255,0.35)",
                    textShadow: "0 8px 30px rgba(0,0,0,0.25)",
                    filter: "drop-shadow(0 0 1px rgba(255,255,255,0.25))",
                  }}
                >
                  Політика конфіденційності
                </h1>
                <p
                  className="text-lg"
                  style={{
                    color: "#3A3A3A",
                    textShadow: "0 4px 14px rgba(0,0,0,0.18)",
                  }}
                >
                  Як ми збираємо, використовуємо та захищаємо вашу інформацію
                </p>
                <p
                  className="mt-2 text-sm"
                  style={{
                    color: "#3A3A3A",
                    textShadow: "0 4px 14px rgba(0,0,0,0.18)",
                  }}
                >
                  Останнє оновлення: {new Date().toLocaleDateString("uk-UA")}
                </p>
              </div>
            </div>

            <Card>
              <CardContent className="prose prose-sm max-w-none p-8">
                <p className="mb-6">
                  Lucky Link LLC ("ми", "нас" або "наш") зобов'язується захищати
                  вашу приватність. Ця Політика конфіденційності пояснює, як ми
                  збираємо, використовуємо, розкриваємо та захищаємо вашу інформацію
                  під час відвідування нашого вебсайту або використання наших
                  сервісів.
                </p>

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">
                    1. Яку інформацію ми збираємо
                  </h2>

                  <h3 className="mb-2 text-lg font-semibold">
                    Персональна інформація
                  </h3>
                  <p className="mb-4">
                    Ми можемо збирати персональну інформацію ("Персональна
                    інформація"), яку ви добровільно надаєте нам, включно з:
                  </p>
                  <ul className="mb-6 list-inside list-disc space-y-2">
                    <li>
                      <strong>Контактні дані:</strong> ім'я, email, номер телефону,
                      поштова адреса
                    </li>
                    <li>
                      <strong>Дані облікового запису:</strong> логін, пароль,
                      профільна інформація
                    </li>
                    <li>
                      <strong>Демографічна інформація:</strong> вік, стать, локація,
                      уподобання
                    </li>
                    <li>
                      <strong>Платіжна інформація:</strong> дані банківської картки
                      (обробляються безпечно через сторонніх платіжних провайдерів)
                    </li>
                    <li>
                      <strong>Комунікації:</strong> повідомлення, запити, відгуки,
                      звернення до підтримки
                    </li>
                  </ul>

                  <h3 className="mb-2 text-lg font-semibold">
                    Автоматично зібрана інформація
                  </h3>
                  <p className="mb-4">
                    Коли ви відвідуєте наш вебсайт, ми автоматично збираємо певну
                    інформацію:
                  </p>
                  <ul className="mb-4 list-inside list-disc space-y-2">
                    <li>
                      <strong>Інформація про пристрій:</strong> IP-адреса, тип
                      браузера, операційна система, ідентифікатори пристрою
                    </li>
                    <li>
                      <strong>Дані використання:</strong> переглянуті сторінки, час
                      перебування, натиснуті посилання, шляхи навігації
                    </li>
                    <li>
                      <strong>Cookies і трекінг:</strong> дані cookies, інформація
                      пікселів відстеження
                    </li>
                  </ul>
                </section>

                <Separator className="my-6" />

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">
                    2. Як ми збираємо інформацію
                  </h2>
                  <p className="mb-4">Ми збираємо інформацію через:</p>
                  <ul className="list-inside list-disc space-y-2">
                    <li>Прямі взаємодії з вами (форми, email, телефон)</li>
                    <li>Автоматизовані технології (cookies, вебмаяки, аналітика)</li>
                    <li>Сторонні джерела (партнери, постачальники послуг)</li>
                    <li>Заявки на участь у промо-розіграшах</li>
                  </ul>
                </section>

                <Separator className="my-6" />

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">
                    3. Як ми використовуємо вашу інформацію
                  </h2>
                  <p className="mb-4">Ми використовуємо вашу інформацію для:</p>
                  <ul className="mb-4 list-inside list-disc space-y-2">
                    <li>
                      <strong>Надання сервісів:</strong> надання та покращення наших
                      сервісів
                    </li>
                    <li>
                      <strong>Комунікації:</strong> відповіді на запити, надсилання
                      оновлень і промо-матеріалів
                    </li>
                    <li>
                      <strong>Управління акаунтом:</strong> створення та ведення вашого
                      облікового запису
                    </li>
                    <li>
                      <strong>Промо-розіграші:</strong> обробка заявок, вибір
                      переможців, вручення призів
                    </li>
                    <li>
                      <strong>Аналітика:</strong> аналіз використання для покращення
                      вебсайту
                    </li>
                    <li>
                      <strong>Безпека:</strong> виявлення, запобігання та усунення
                      технічних проблем і шахрайства
                    </li>
                    <li>
                      <strong>Юридична відповідність:</strong> дотримання правових
                      зобов'язань
                    </li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    <strong>Правова підстава:</strong> ми обробляємо вашу інформацію на
                    підставі вашої згоди, законних бізнес-інтересів та правових
                    зобов'язань.
                  </p>
                </section>

                <Separator className="my-6" />

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">
                    4. Передача інформації
                  </h2>

                  <h3 className="mb-2 text-lg font-semibold">
                    Ми НЕ продаємо вашу персональну інформацію
                  </h3>
                  <p className="mb-4">
                    Ми не продаємо, не здаємо в оренду і не обмінюємо вашу персональну
                    інформацію третім сторонам для маркетингових цілей.
                  </p>

                  <h3 className="mb-2 text-lg font-semibold">
                    Коли ми передаємо інформацію
                  </h3>
                  <p className="mb-4">Ми можемо передавати вашу інформацію:</p>
                  <ul className="mb-4 list-inside list-disc space-y-2">
                    <li>
                      <strong>Постачальникам послуг:</strong> третім сторонам, які
                      надають послуги від нашого імені (платіжні сервіси, email,
                      аналітика)
                    </li>
                    <li>
                      <strong>Бізнес-партнерам:</strong> партнерським брендам для
                      промо-кампаній (лише за вашою згодою)
                    </li>
                    <li>
                      <strong>Юридичні вимоги:</strong> якщо це вимагається законом,
                      судовим рішенням або запитом державних органів
                    </li>
                    <li>
                      <strong>Бізнес-трансфери:</strong> у зв'язку зі злиттям,
                      поглинанням або продажем активів
                    </li>
                    <li>
                      <strong>За вашою згодою:</strong> коли ви явно дозволяєте передачу
                    </li>
                  </ul>

                  <h3 className="mb-2 text-lg font-semibold">
                    Промо-розіграші
                  </h3>
                  <p className="mb-4">
                    Для промо-розіграшів інформація про переможців (ім'я, зображення,
                    локація) може бути публічно розкрита для промо-цілей, якщо це не
                    заборонено законом. Ви можете відмовитися від публічності, якщо
                    відмовитеся від призу.
                  </p>
                </section>

                <Separator className="my-6" />

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">5. Cookies і трекінг</h2>

                  <h3 className="mb-2 text-lg font-semibold">Що таке cookies?</h3>
                  <p className="mb-4">
                    Cookies — це невеликі текстові файли, що зберігаються на вашому
                    пристрої, запам'ятовують ваші налаштування та відстежують
                    використання вебсайту.
                  </p>

                  <h3 className="mb-2 text-lg font-semibold">Типи cookies, які ми використовуємо</h3>
                  <ul className="mb-4 list-inside list-disc space-y-2">
                    <li>
                      <strong>Необхідні cookies:</strong> потрібні для коректної
                      роботи вебсайту
                    </li>
                    <li>
                      <strong>Аналітичні cookies:</strong> допомагають нам розуміти, як
                      відвідувачі використовують вебсайт
                    </li>
                    <li>
                      <strong>Маркетингові cookies:</strong> відстежують взаємодію з
                      нашими маркетинговими кампаніями
                    </li>
                    <li>
                      <strong>Cookies уподобань:</strong> запам'ятовують ваші
                      налаштування та переваги
                    </li>
                  </ul>

                  <h3 className="mb-2 text-lg font-semibold">Аналітика третіх сторін</h3>
                  <p className="mb-4">
                    Ми використовуємо Google Analytics і Meta Pixel для аналізу
                    трафіку. Ці сервіси збирають анонімні дані використання. Ви можете
                    відмовитися від Google Analytics, використовуючи{" "}
                    <a
                      href="https://tools.google.com/dlpage/gaoptout"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      додаток для браузера Google Analytics Opt-out
                    </a>
                    .
                  </p>
                </section>

                <Separator className="my-6" />

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">6. Безпека даних</h2>
                  <p className="mb-4">
                    Ми впроваджуємо відповідні технічні та організаційні заходи для
                    захисту вашої інформації:
                  </p>
                  <ul className="mb-4 list-inside list-disc space-y-2">
                    <li>
                      <strong>Шифрування:</strong> SSL/TLS для передачі даних
                    </li>
                    <li>
                      <strong>Контроль доступу:</strong> обмежений доступ до
                      персональної інформації
                    </li>
                    <li>
                      <strong>Безпечне зберігання:</strong> захищені сервери та бази
                      даних
                    </li>
                    <li>
                      <strong>Регулярні аудити:</strong> періодичні оцінки безпеки
                    </li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    <strong>Жоден метод передачі не є на 100% безпечним.</strong>
                    Хоча ми прагнемо захистити вашу інформацію, ми не можемо
                    гарантувати абсолютну безпеку.
                  </p>
                </section>

                <Separator className="my-6" />

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">
                    7. Ваші права щодо конфіденційності
                  </h2>
                  <p className="mb-4">Ви маєте право:</p>
                  <ul className="mb-4 list-inside list-disc space-y-2">
                    <li>
                      <strong>Доступ:</strong> запитати копію вашої персональної
                      інформації
                    </li>
                    <li>
                      <strong>Виправлення:</strong> вимагати виправлення неточної
                      інформації
                    </li>
                    <li>
                      <strong>Видалення:</strong> вимагати видалення персональної
                      інформації
                    </li>
                    <li>
                      <strong>Заперечення:</strong> заперечити проти обробки
                      інформації
                    </li>
                    <li>
                      <strong>Обмеження:</strong> вимагати обмеження обробки
                    </li>
                    <li>
                      <strong>Переносимість:</strong> вимагати передачі даних
                    </li>
                    <li>
                      <strong>Відмова:</strong> відписатися від маркетингових
                      повідомлень
                    </li>
                  </ul>
                  <p className="mb-4">
                    Щоб скористатися цими правами, звертайтесь на{" "}
                    <a
                      href="mailto:seo@cchanse.life"
                      className="text-primary hover:underline"
                    >
                      seo@cchanse.life
                    </a>{" "}
                    або{" "}
                    <a
                      href="mailto:support@lucky1ink.com"
                      className="text-primary hover:underline"
                    >
                      support@lucky1ink.com
                    </a>
                    .
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Ми відповімо на ваш запит протягом 30 днів з урахуванням чинних
                    законодавчих вимог та винятків.
                  </p>
                </section>

                <Separator className="my-6" />

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">8. Зберігання даних</h2>
                  <p className="mb-4">
                    Ми зберігаємо вашу персональну інформацію стільки, скільки
                    необхідно для:
                  </p>
                  <ul className="mb-4 list-inside list-disc space-y-2">
                    <li>Надання наших сервісів</li>
                    <li>Виконання юридичних зобов'язань</li>
                    <li>Вирішення спорів</li>
                    <li>Забезпечення виконання наших угод</li>
                  </ul>
                  <p>
                    Якщо ви просите видалення, ми вилучимо ваші дані з активних
                    систем, але можемо зберігати їх у резервних чи архівних сховищах,
                    якщо цього вимагає закон або легітимні бізнес-цілі.
                  </p>
                </section>

                <Separator className="my-6" />

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">
                    9. Конфіденційність дітей
                  </h2>
                  <p className="mb-4">
                    Наш вебсайт і сервіси не призначені для осіб молодше 18 років. Ми
                    свідомо не збираємо персональну інформацію від дітей до 18 років.
                  </p>
                  <p>
                    Якщо ми виявимо, що ненавмисно зібрали інформацію від дитини до
                    18 років, ми вживемо заходів для її негайного видалення.
                  </p>
                </section>

                <Separator className="my-6" />

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">
                    10. Міжнародна передача даних
                  </h2>
                  <p className="mb-4">
                    Ваша інформація може бути передана та оброблена в країнах, що
                    відрізняються від вашої країни проживання. Ми забезпечуємо
                    належні заходи захисту відповідно до цієї Політики
                    конфіденційності.
                  </p>
                </section>

                <Separator className="my-6" />

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">
                    11. Зміни до цієї Політики конфіденційності
                  </h2>
                  <p>
                    Ми можемо періодично оновлювати цю Політику конфіденційності. Ми
                    повідомимо вас про суттєві зміни шляхом:
                  </p>
                  <ul className="mb-4 mt-4 list-inside list-disc space-y-2">
                    <li>Публікації нової політики на вебсайті</li>
                    <li>Оновлення дати "Останнє оновлення"</li>
                    <li>Надсилання email-повідомлення (якщо у вас є акаунт)</li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    Подальше використання вебсайту після змін означає вашу згоду з
                    оновленою Політикою конфіденційності.
                  </p>
                </section>

                <Separator className="my-6" />

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">12. Контакти</h2>
                  <p className="mb-4">
                    Якщо у вас є питання, занепокоєння або запити щодо цієї Політики
                    конфіденційності чи наших практик обробки даних, звертайтесь:
                  </p>
                  <div className="mb-4 rounded-lg bg-muted/50 p-4">
                    <p className="mb-2">
                      <strong>Email (Бізнес і комплаєнс):</strong>{" "}
                      <a
                        href="mailto:seo@cchanse.life"
                        className="text-primary hover:underline"
                      >
                        seo@cchanse.life
                      </a>
                    </p>
                    <p className="mb-2">
                      <strong>Email (Підтримка):</strong>{" "}
                      <a
                        href="mailto:support@lucky1ink.com"
                        className="text-primary hover:underline"
                      >
                        support@lucky1ink.com
                      </a>
                    </p>
                    <p>
                      <strong>Компанія:</strong> Lucky Link LLC, Вайомінг, США
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Ми відповімо на ваш запит протягом 30 днів.
                  </p>
                </section>

                <div className="mt-12 rounded-lg bg-muted/50 p-6">
                  <p className="mb-2 text-center font-semibold">
                    Ваша приватність важлива для нас
                  </p>
                  <p className="text-center text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Lucky Link LLC. Всі права
                    захищені.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
