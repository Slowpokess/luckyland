import { PageWrapper } from "@/components/layout/page-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Умови використання",
  description:
    "Умови використання для вебсайту та сервісів Lucky Link LLC. Використовуючи наш сайт, ви погоджуєтесь з цими умовами.",
  alternates: {
    canonical: "/uk/terms",
    languages: {
      en: "/terms",
      uk: "/uk/terms",
      "x-default": "/terms",
    },
  },
};

export default function TermsPage() {
  const currentDate = new Date().toLocaleDateString("uk-UA");

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
                  Умови використання
                </h1>
                <p
                  className="text-lg"
                  style={{
                    color: "#3A3A3A",
                    textShadow: "0 4px 14px rgba(0,0,0,0.18)",
                  }}
                >
                  Будь ласка, уважно прочитайте ці умови перед використанням нашого
                  вебсайту
                </p>
                <p
                  className="mt-2 text-sm"
                  style={{
                    color: "#3A3A3A",
                    textShadow: "0 4px 14px rgba(0,0,0,0.18)",
                  }}
                >
                  Останнє оновлення: {currentDate}
                </p>
              </div>
            </div>

            <Card>
              <CardContent className="prose prose-sm max-w-none p-8">
                <p className="mb-6">
                  Ласкаво просимо до Lucky Link LLC ("Компанія", "ми", "нас" або
                  "наш"). Отримуючи доступ до нашого вебсайту та сервісів або
                  користуючись ними, ви погоджуєтесь дотримуватися цих Умов
                  використання ("Умови"). Якщо ви не погоджуєтесь з цими Умовами,
                  будь ласка, не користуйтеся нашим вебсайтом.
                </p>

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">1. Прийняття умов</h2>
                  <p className="mb-4">
                    Використовуючи цей вебсайт, ви підтверджуєте згоду з цими Умовами
                    та нашою Політикою конфіденційності. Якщо ви не погоджуєтесь з
                    Умовами, вам заборонено використовувати цей вебсайт.
                  </p>
                  <p>
                    Ці Умови є юридично обов'язковою угодою між вами та Lucky Link
                    LLC. Ми залишаємо за собою право змінювати ці Умови в будь-який
                    час, і подальше використання вебсайту після змін означає вашу
                    згоду з оновленими Умовами.
                  </p>
                </section>

                <Separator className="my-6" />

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">2. Опис послуг</h2>
                  <p className="mb-4">
                    Lucky Link LLC надає послуги цифрової реклами та промоції через
                    наш вебсайт. Наші послуги включають:
                  </p>
                  <ul className="mb-4 list-inside list-disc space-y-2">
                    <li>
                      Інформацію про промо-кампанії та розіграші
                    </li>
                    <li>Стратегію та управління кампаніями</li>
                    <li>Залучення трафіку та оптимізацію</li>
                    <li>Аналітику та звітність</li>
                    <li>Партнерські інтеграції</li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    Ми залишаємо за собою право змінювати, призупиняти або
                    припиняти будь-який аспект наших послуг у будь-який час без
                    попереднього повідомлення.
                  </p>
                </section>

                <Separator className="my-6" />

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">3. Вимоги до користувача</h2>
                  <p className="mb-4">
                    Вам має бути щонайменше 18 років, щоб користуватися цим
                    вебсайтом. Використовуючи вебсайт, ви підтверджуєте, що:
                  </p>
                  <ul className="mb-4 list-inside list-disc space-y-2">
                    <li>Вам виповнилося щонайменше 18 років</li>
                    <li>Ви маєте правоздатність укладати юридично зобов'язувальні угоди</li>
                    <li>
                      Ви будете дотримуватися цих Умов та всіх застосовних законів і
                      регуляцій
                    </li>
                    <li>
                      Ви не перебуваєте в країні, на яку поширюються санкції уряду США
                    </li>
                  </ul>
                </section>

                <Separator className="my-6" />

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">4. Облікові записи користувача</h2>
                  <p className="mb-4">
                    Якщо ви створюєте обліковий запис на нашому вебсайті, ви
                    відповідаєте за:
                  </p>
                  <ul className="mb-4 list-inside list-disc space-y-2">
                    <li>Збереження конфіденційності даних доступу до акаунта</li>
                    <li>Усі дії, що відбуваються під вашим акаунтом</li>
                    <li>Негайне повідомлення про будь-яке несанкціоноване використання</li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    Ви погоджуєтесь не передавати доступ до акаунта іншим і не
                    дозволяти стороннім використовувати його. Ви несете
                    відповідальність за будь-які збитки, спричинені недотриманням
                    безпеки акаунта.
                  </p>
                </section>

                <Separator className="my-6" />

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">
                    5. Політика допустимого використання
                  </h2>
                  <p className="mb-4">Ви погоджуєтесь НЕ:</p>
                  <ul className="mb-4 list-inside list-disc space-y-2">
                    <li>
                      Використовувати вебсайт для будь-яких незаконних цілей або з
                      порушенням законів
                    </li>
                    <li>
                      Намага́тися отримати несанкціонований доступ до наших систем
                      або мереж
                    </li>
                    <li>
                      Втручатися або порушувати роботу вебсайту чи серверів
                    </li>
                    <li>
                      Використовувати автоматизовані засоби (боти, скрапери тощо)
                      без дозволу
                    </li>
                    <li>
                      Передавати віруси, шкідливе ПЗ або код, що може завдати шкоди
                      вебсайту
                    </li>
                    <li>
                      Видавати себе за іншу особу або неправдиво представляти
                      свою належність
                    </li>
                    <li>Збирати персональні дані інших користувачів</li>
                    <li>
                      Використовувати вебсайт для спаму чи небажаних повідомлень
                    </li>
                  </ul>
                </section>

                <Separator className="my-6" />

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">
                    6. Права інтелектуальної власності
                  </h2>
                  <p className="mb-4">
                    Увесь контент на цьому вебсайті, включно з текстами, графікою,
                    логотипами, зображеннями, програмним забезпеченням та іншими
                    матеріалами ("Контент"), належить Lucky Link LLC або її
                    ліцензіарам і захищений законами про авторські права, торговельні
                    марки та інші права інтелектуальної власності.
                  </p>
                  <p className="mb-4">
                    Ви не маєте права відтворювати, поширювати, змінювати, створювати
                    похідні роботи, публічно демонструвати чи іншим чином
                    використовувати будь-який Контент без нашого попереднього
                    письмового дозволу.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Назва, логотип і фірмовий стиль Lucky Link LLC є торговельними
                    марками Lucky Link LLC. Ви не маєте права використовувати ці
                    торговельні марки без нашого письмового дозволу.
                  </p>
                </section>

                <Separator className="my-6" />

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">7. Промо-розіграші</h2>
                  <p className="mb-4">
                    Участь у будь-якому промо-розіграші, що пропонується через наш
                    вебсайт, регулюється окремими Офіційними правилами. Беручи участь
                    у розіграші, ви погоджуєтесь дотримуватися цих правил, які
                    включають:
                  </p>
                  <ul className="mb-4 list-inside list-disc space-y-2">
                    <li>Покупка не потрібна для участі або виграшу</li>
                    <li>Недійсно там, де заборонено законом</li>
                    <li>Вікові та резидентські вимоги</li>
                    <li>Альтернативні способи участі (AMOE)</li>
                    <li>Процедури відбору переможців і вручення призів</li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    Будь ласка, ознайомтеся з Офіційними правилами кожного розіграшу
                    перед участю.
                  </p>
                </section>

                <Separator className="my-6" />

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">
                    8. Конфіденційність та збір даних
                  </h2>
                  <p className="mb-4">
                    Використання нашого вебсайту також регулюється Політикою
                    конфіденційності, яка описує, як ми збираємо, використовуємо та
                    захищаємо вашу персональну інформацію.
                  </p>
                  <p className="mb-4">
                    Використовуючи наш вебсайт, ви погоджуєтесь зі збором і
                    використанням вашої інформації, як описано в Політиці
                    конфіденційності.
                  </p>
                  <p>
                    Будь ласка, перегляньте нашу{" "}
                    <a href="/uk/privacy" className="text-primary hover:underline">
                      Політику конфіденційності
                    </a>{" "}
                    для отримання додаткової інформації.
                  </p>
                </section>

                <Separator className="my-6" />

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">9. Відмова від гарантій</h2>
                  <p className="mb-4">
                    <strong>"ЯК Є", "ЯК ДОСТУПНО":</strong> Вебсайт і послуги
                    надаються "як є" та "як доступно" без будь-яких гарантій,
                    прямих або непрямих.
                  </p>
                  <p className="mb-4">
                    <strong>БЕЗ ГАРАНТІЙ:</strong> Ми відмовляємося від усіх гарантій,
                    зокрема:
                  </p>
                  <ul className="mb-4 list-inside list-disc space-y-2">
                    <li>КОМЕРЦІЙНА ПРИДАТНІСТЬ</li>
                    <li>ПРИДАТНІСТЬ ДЛЯ ПЕВНОЇ МЕТИ</li>
                    <li>ВІДСУТНІСТЬ ПОРУШЕННЯ ПРАВ</li>
                    <li>БЕЗПЕРЕРВНА АБО БЕЗПОМИЛКОВА РОБОТА</li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    Ми не гарантуємо, що вебсайт буде безпечним, вільним від вірусів
                    або завжди доступним.
                  </p>
                </section>

                <Separator className="my-6" />

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">10. Обмеження відповідальності</h2>
                  <p className="mb-4">
                    У максимально дозволеному законом обсязі Lucky Link LLC не несе
                    відповідальності за:
                  </p>
                  <ul className="mb-4 list-inside list-disc space-y-2">
                    <li>
                      Непрямі, випадкові, спеціальні, побічні або штрафні збитки
                    </li>
                    <li>Втрату прибутку, даних або бізнес-можливостей</li>
                    <li>Збитки через використання або неможливість використання сайту</li>
                    <li>Збитки внаслідок несанкціонованого доступу до акаунта або даних</li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    Наша загальна відповідальність не перевищує суму, яку ви, якщо
                    застосовно, сплатили за доступ до вебсайту.
                  </p>
                </section>

                <Separator className="my-6" />

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">11. Відшкодування збитків</h2>
                  <p className="mb-4">
                    Ви погоджуєтесь відшкодовувати, захищати та звільняти від
                    відповідальності Lucky Link LLC, її посадових осіб, директорів,
                    працівників і агентів від будь-яких претензій, збитків, втрат,
                    відповідальності та витрат, що виникають у зв'язку з:
                  </p>
                  <ul className="list-inside list-disc space-y-2">
                    <li>Вашим використанням вебсайту</li>
                    <li>Порушенням цих Умов</li>
                    <li>Порушенням прав третіх осіб</li>
                    <li>Порушенням застосовних законів або регуляцій</li>
                  </ul>
                </section>

                <Separator className="my-6" />

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">12. Припинення</h2>
                  <p className="mb-4">
                    Ми можемо припинити або призупинити доступ до вашого акаунта та
                    вебсайту в будь-який час без попереднього повідомлення у випадку:
                  </p>
                  <ul className="mb-4 list-inside list-disc space-y-2">
                    <li>Порушення цих Умов</li>
                    <li>Залучення у шахрайські або незаконні дії</li>
                    <li>Будь-якої іншої причини на наш розсуд</li>
                  </ul>
                  <p>
                    Після припинення ваше право використовувати вебсайт негайно
                    припиняється. Усі положення цих Умов, які за своєю природою
                    мають діяти після припинення, залишаються чинними.
                  </p>
                </section>

                <Separator className="my-6" />

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">13. Вирішення спорів</h2>
                  <p className="mb-4">
                    <strong>Застосовне право:</strong> Ці Умови регулюються законами
                    штату Вайомінг без урахування норм колізійного права.
                  </p>
                  <p className="mb-4">
                    <strong>Арбітраж:</strong> Будь-які спори, що виникають з цих
                    Умов, вирішуються шляхом обов'язкового арбітражу, за винятком
                    випадків, коли це заборонено законом.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Ви погоджуєтесь вирішувати будь-які спори з Lucky Link LLC на
                    індивідуальній основі та відмовляєтесь від права участі в
                    колективних позовах або колективному арбітражі.
                  </p>
                </section>

                <Separator className="my-6" />

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">14. Зміни до умов</h2>
                  <p>
                    Ми залишаємо за собою право змінювати ці Умови в будь-який час.
                    Про суттєві зміни ми повідомимо, опублікувавши нові Умови на
                    вебсайті та оновивши дату "Останнє оновлення".
                  </p>
                  <p className="mt-4">
                    Подальше використання вебсайту після змін означає вашу згоду з
                    новими Умовами.
                  </p>
                </section>

                <Separator className="my-6" />

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">15. Контактна інформація</h2>
                  <p className="mb-4">
                    Якщо у вас є питання щодо цих Умов, будь ласка, зв'яжіться з нами:
                  </p>
                  <div className="mb-4 rounded-lg bg-muted/50 p-4">
                    <p className="mb-2">
                      <strong>Email (Бізнес і комплаєнс):</strong>{" "}
                      <a
                        href="/uk/contact"
                        className="text-primary hover:underline"
                      >
                        sup@luckylink.click
                      </a>
                    </p>
                    <p className="mb-2">
                      <strong>Email (Підтримка):</strong>{" "}
                      <a
                        href="/uk/contact"
                        className="text-primary hover:underline"
                      >
                        sup@luckylink.click
                      </a>
                    </p>
                    <p>
                      <strong>Компанія:</strong> Lucky Link LLC, Вайомінг, США
                    </p>
                  </div>
                </section>

                <div className="mt-12 rounded-lg bg-muted/50 p-6">
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
