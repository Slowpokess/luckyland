import { PageWrapper } from "@/components/layout/page-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Офіційні правила",
  description:
    "Офіційні правила для всіх промо-розіграшів Lucky Link LLC. Покупка не потрібна. Недійсно там, де заборонено.",
  alternates: {
    canonical: "/uk/rules",
    languages: {
      en: "/rules",
      uk: "/uk/rules",
      "x-default": "/rules",
    },
  },
};

export default function RulesPage() {
  const currentYear = new Date().getFullYear();

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
                  Офіційні правила
                </h1>
                <p
                  className="text-lg"
                  style={{
                    color: "#3A3A3A",
                    textShadow: "0 4px 14px rgba(0,0,0,0.18)",
                  }}
                >
                  Офіційні правила промо-розіграшів Lucky Link LLC
                </p>
              </div>
            </div>

            <Card>
              <CardContent className="prose prose-sm max-w-none p-8">
                {/* Table of Contents */}
                <div className="mb-8 rounded-lg bg-muted/50 p-6">
                  <h2 className="mb-4 text-xl font-bold">Зміст</h2>
                  <ol className="space-y-2 text-sm">
                    <li>
                      <a href="#sponsor" className="text-primary hover:underline">
                        1. Спонсор
                      </a>
                    </li>
                    <li>
                      <a href="#eligibility" className="text-primary hover:underline">
                        2. Вимоги до участі
                      </a>
                    </li>
                    <li>
                      <a
                        href="#no-purchase"
                        className="text-primary hover:underline"
                      >
                        3. Покупка не потрібна
                      </a>
                    </li>
                    <li>
                      <a href="#entry-period" className="text-primary hover:underline">
                        4. Період участі
                      </a>
                    </li>
                    <li>
                      <a href="#how-to-enter" className="text-primary hover:underline">
                        5. Як взяти участь
                      </a>
                    </li>
                    <li>
                      <a
                        href="#winner-selection"
                        className="text-primary hover:underline"
                      >
                        6. Вибір переможців
                      </a>
                    </li>
                    <li>
                      <a href="#prizes" className="text-primary hover:underline">
                        7. Призи
                      </a>
                    </li>
                    <li>
                      <a href="#odds" className="text-primary hover:underline">
                        8. Шанси на виграш
                      </a>
                    </li>
                    <li>
                      <a
                        href="#taxes-responsibilities"
                        className="text-primary hover:underline"
                      >
                        9. Податки та відповідальність
                      </a>
                    </li>
                    <li>
                      <a
                        href="#publicity-release"
                        className="text-primary hover:underline"
                      >
                        10. Згода на публічність
                      </a>
                    </li>
                    <li>
                      <a href="#disputes" className="text-primary hover:underline">
                        11. Спори та застосовне право
                      </a>
                    </li>
                    <li>
                      <a href="#privacy" className="text-primary hover:underline">
                        12. Конфіденційність
                      </a>
                    </li>
                    <li>
                      <a href="#contact" className="text-primary hover:underline">
                        13. Контакти та запит правил
                      </a>
                    </li>
                  </ol>
                </div>

                <p className="mb-4 text-xs italic">
                  Останнє оновлення: {new Date().toLocaleDateString("uk-UA")}
                </p>

                {/* 1. Sponsor */}
                <section id="sponsor" className="mb-8 scroll-mt-20">
                  <h2 className="mb-4 text-2xl font-bold">1. Спонсор</h2>
                  <p className="mb-2">
                    <strong>Спонсор:</strong> Lucky Link LLC
                  </p>
                  <p className="mb-2">
                    <strong>Локація:</strong> Вайомінг, США
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Промо-розіграші, описані в цих Офіційних правилах, спонсоруються
                    Lucky Link LLC — компанією з обмеженою відповідальністю у
                    Вайомінгу.
                  </p>
                </section>

                <Separator className="my-6" />

                {/* 2. Eligibility */}
                <section id="eligibility" className="mb-8 scroll-mt-20">
                  <h2 className="mb-4 text-2xl font-bold">2. Вимоги до участі</h2>
                  <p className="mb-4">
                    Ці промо-розіграші відкриті лише для законних резидентів 50 штатів
                    США та округу Колумбія, яким виповнилося 18 років на дату участі.
                  </p>
                  <h3 className="mb-2 text-lg font-semibold">Обмеження участі:</h3>
                  <ul className="mb-4 list-inside list-disc space-y-2">
                    <li>
                      Працівники, посадові особи, директори, агенти та представники
                      Спонсора і його материнських компаній, афілійованих осіб,
                      дочірніх компаній, рекламних і промоційних агентств та юридичні
                      радники НЕ можуть брати участь.
                    </li>
                    <li>
                      Члени найближчої сім'ї (чоловік/дружина, батьки, діти, брати/сестри
                      та їхні подружжя незалежно від місця проживання) або особи, що
                      проживають в одному домогосподарстві, НЕ можуть брати участь.
                    </li>
                    <li>
                      Участь означає повну та безумовну згоду учасника з цими Офіційними
                      правилами та рішеннями Спонсора, які є остаточними і обов'язковими
                      в усіх питаннях, пов'язаних з розіграшем.
                    </li>
                  </ul>
                  <div className="rounded-lg bg-yellow-50 border border-yellow-200 p-4 dark:bg-yellow-900/20 dark:border-yellow-800">
                    <p className="text-sm font-semibold text-yellow-900 dark:text-yellow-200">
                      НЕДІЙСНО ТАМ, ДЕ ЗАБОРОНЕНО ЗАКОНОМ
                    </p>
                  </div>
                </section>

                <Separator className="my-6" />

                {/* 3. No Purchase Necessary */}
                <section id="no-purchase" className="mb-8 scroll-mt-20">
                  <h2 className="mb-4 text-2xl font-bold">
                    3. Покупка не потрібна / Альтернативний спосіб участі
                  </h2>
                  <p className="mb-4">
                    <strong>ПОКУПКА НЕ ПОТРІБНА ДЛЯ УЧАСТІ АБО ВИГРАШУ.</strong>{" "}
                    Покупка не збільшує ваші шанси на виграш.
                  </p>
                  <p className="mb-4">
                    Ці промо-розіграші НЕ є лотереями, азартними іграми, ставками або
                    будь-якими "pay to win" схемами. Це легітимні промо-інструменти,
                    які бренди використовують для залучення клієнтів.
                  </p>
                  <h3 className="mb-2 text-lg font-semibold">
                    Альтернативний спосіб участі (AMOE):
                  </h3>
                  <p className="mb-4">
                    Спонсор надає альтернативний спосіб участі без покупки. Щоб взяти
                    участь без покупки, дотримуйтесь інструкцій щодо поштової заявки
                    нижче:
                  </p>
                  <div className="mb-4 rounded-lg bg-muted/50 p-4">
                    <p className="mb-2 font-semibold">Поштова заявка:</p>
                    <ol className="list-inside list-decimal space-y-2 text-sm">
                      <li>Надрукуйте від руки ім'я, повну адресу, email і номер телефону на картці 3" x 5"</li>
                      <li>Надішліть картку у запечатаному конверті на адресу: Lucky Link LLC, Attn: Promotional Entries, [Address Placeholder]</li>
                      <li>
                        Одна заявка на зовнішній конверт. Кілька заявок в одному
                        конверті будуть дискваліфіковані.
                      </li>
                      <li>
                        Поштові заявки мають бути відправлені до кінцевого терміну та
                        отримані до дати, вказаної в матеріалах конкретного розіграшу.
                      </li>
                    </ol>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Усі заявки (платні та AMOE) мають рівні шанси на виграш.
                    Дублікати заявок від однієї особи будуть дискваліфіковані.
                  </p>
                </section>

                <Separator className="my-6" />

                {/* 4. Entry Period */}
                <section id="entry-period" className="mb-8 scroll-mt-20">
                  <h2 className="mb-4 text-2xl font-bold">4. Період участі</h2>
                  <p className="mb-4">
                    Період участі для кожного промо-розіграшу визначається в матеріалах
                    конкретної програми. Заявки, отримані поза визначеним періодом,
                    будуть дискваліфіковані.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Комп'ютер Спонсора є офіційним засобом фіксації часу розіграшу.
                  </p>
                </section>

                <Separator className="my-6" />

                {/* 5. How to Enter */}
                <section id="how-to-enter" className="mb-8 scroll-mt-20">
                  <h2 className="mb-4 text-2xl font-bold">5. Як взяти участь</h2>
                  <p className="mb-4">Є два способи участі. Оберіть один:</p>

                  <h3 className="mb-2 text-lg font-semibold">
                    Спосіб 1: Участь через покупку (необов'язково)
                  </h3>
                  <p className="mb-4">
                    Здійсніть відповідну покупку у бренда-партнера протягом періоду
                    участі. Ви отримаєте визначену кількість заявок залежно від суми
                    покупки або типу продукту. Це необов'язковий спосіб участі.
                  </p>

                  <h3 className="mb-2 text-lg font-semibold">
                    Спосіб 2: Альтернативний спосіб участі (AMOE) — без покупки
                  </h3>
                  <p className="mb-4">
                    Дотримуйтесь поштових інструкцій у Розділі 3 вище, щоб взяти участь
                    без покупки.
                  </p>

                  <div className="rounded-lg bg-blue-50 border border-blue-200 p-4 dark:bg-blue-900/20 dark:border-blue-800">
                    <p className="text-sm font-semibold text-blue-900 dark:text-blue-200">
                      ВАЖЛИВО: Обидва способи участі мають рівні шанси на виграш.
                      Покупка не підвищує ваші шанси.
                    </p>
                  </div>
                </section>

                <Separator className="my-6" />

                {/* 6. Winner Selection */}
                <section id="winner-selection" className="mb-8 scroll-mt-20">
                  <h2 className="mb-4 text-2xl font-bold">6. Вибір переможців</h2>
                  <p className="mb-4">
                    Переможці обираються випадковим чином серед усіх відповідних заявок.
                    Розіграш проводиться під наглядом Спонсора, і його рішення є
                    остаточними.
                  </p>
                  <p className="mb-4">
                    Шанси на виграш залежать від загальної кількості відповідних заявок.
                    Конкретні кількості та значення призів будуть зазначені в матеріалах
                    конкретного розіграшу.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Переможців повідомляють електронною поштою, телефоном або поштою
                    протягом X днів після розіграшу. Невідповідь упродовж X днів може
                    призвести до дискваліфікації та вибору альтернативного переможця.
                  </p>
                </section>

                <Separator className="my-6" />

                {/* 7. Prizes */}
                <section id="prizes" className="mb-8 scroll-mt-20">
                  <h2 className="mb-4 text-2xl font-bold">7. Призи</h2>
                  <p className="mb-4">
                    Призи залежать від конкретного промо-розіграшу і зазначаються в
                    матеріалах програми. Приклади можуть включати:
                  </p>
                  <ul className="mb-4 list-inside list-disc space-y-2">
                    <li>Подарункові картки</li>
                    <li>Мерч</li>
                    <li>Враження</li>
                    <li>Електронні пристрої</li>
                    <li>Грошові еквіваленти</li>
                  </ul>
                  <p className="mb-4">
                    <strong>Умови щодо призів:</strong>
                  </p>
                  <ul className="mb-4 list-inside list-disc space-y-2">
                    <li>
                      Призи не підлягають передачі та не можуть бути обміняні на
                      готівку, окрім випадків, визначених Спонсором на власний розсуд.
                    </li>
                    <li>
                      Спонсор залишає за собою право замінити приз рівної або більшої
                      вартості, якщо заявлений приз недоступний.
                    </li>
                    <li>
                      Деталі призів і їх доступність можуть змінюватися на розсуд
                      Спонсора.
                    </li>
                  </ul>
                </section>

                <Separator className="my-6" />

                {/* 8. Odds */}
                <section id="odds" className="mb-8 scroll-mt-20">
                  <h2 className="mb-4 text-2xl font-bold">8. Шанси на виграш</h2>
                  <p className="mb-4">
                    Шанси на виграш залежать від загальної кількості відповідних заявок
                    у кожному розіграші.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Спонсор не гарантує мінімальну кількість учасників або заявок для
                    будь-якого розіграшу.
                  </p>
                </section>

                <Separator className="my-6" />

                {/* 9. Taxes */}
                <section id="taxes-responsibilities" className="mb-8 scroll-mt-20">
                  <h2 className="mb-4 text-2xl font-bold">
                    9. Податки та відповідальність
                  </h2>
                  <p className="mb-4">
                    <strong>Податки:</strong> Переможці несуть повну відповідальність
                    за всі федеральні, штатні та місцеві податки, а також інші витрати,
                    пов'язані з прийняттям і використанням призу.
                  </p>
                  <p className="mb-4">
                    <strong>Звітування про вартість:</strong> Переможці можуть отримати
                    форму IRS 1099 щодо вартості призу, якщо цього вимагає закон.
                  </p>
                  <p className="mb-4">
                    <strong>Перевірка:</strong> Усі заявки на приз підлягають перевірці.
                    Від переможця може вимагатися заповнення та повернення підтвердження
                    відповідності, звільнення від відповідальності та (де законно)
                    згоди на публічність протягом X днів після повідомлення.
                  </p>
                  <p className="mb-4">
                    <strong>Дискваліфікація:</strong> Спонсор залишає за собою право
                    дискваліфікувати будь-якого переможця, який не дотримується цих
                    Офіційних правил або надає неправдиву чи оманливу інформацію.
                  </p>
                </section>

                <Separator className="my-6" />

                {/* 10. Publicity Release */}
                <section id="publicity-release" className="mb-8 scroll-mt-20">
                  <h2 className="mb-4 text-2xl font-bold">10. Згода на публічність</h2>
                  <p className="mb-4">
                    Окрім випадків, де це заборонено законом, участь у розіграші означає
                    згоду переможця на використання Спонсором його імені, зображення,
                    фотографії, голосу, думок та/або місця проживання для промо-цілей у
                    будь-яких медіа по всьому світу без додаткової оплати чи компенсації.
                  </p>
                </section>

                <Separator className="my-6" />

                {/* 11. Disputes */}
                <section id="disputes" className="mb-8 scroll-mt-20">
                  <h2 className="mb-4 text-2xl font-bold">
                    11. Спори та застосовне право
                  </h2>
                  <p className="mb-4">
                    <strong>Застосовне право:</strong> Ці Офіційні правила регулюються
                    законами штату Вайомінг без урахування норм колізійного права.
                  </p>
                  <p className="mb-4">
                    <strong>Вирішення спорів:</strong> Будь-які спори, що виникають з
                    цих Офіційних правил або у зв'язку з ними, вирішуються через
                    обов'язковий арбітраж, якщо це не заборонено законом.
                  </p>
                  <p className="mb-4">
                    <strong>Обмеження:</strong> Беручи участь, ви погоджуєтесь, що:
                    (1) усі спори, претензії та підстави позову вирішуються
                    індивідуально, без колективних позовів; (2) будь-які претензії,
                    рішення та виплати обмежуються фактичними витратами, і в жодному
                    випадку — гонорарами адвокатів; і (3) за жодних обставин учасник
                    не має права на непрямі, штрафні, випадкові чи побічні збитки та
                    відмовляється від таких вимог.
                  </p>
                </section>

                <Separator className="my-6" />

                {/* 12. Privacy */}
                <section id="privacy" className="mb-8 scroll-mt-20">
                  <h2 className="mb-4 text-2xl font-bold">12. Конфіденційність</h2>
                  <p className="mb-4">
                    Інформація, подана разом із заявкою, підпадає під дію Політики
                    конфіденційності, опублікованої на вебсайті Спонсора. Беручи
                    участь у розіграші, ви погоджуєтесь із збором та використанням
                    вашої персональної інформації, як описано в Політиці
                    конфіденційності.
                  </p>
                  <p>
                    <Link href="/uk/privacy" className="text-primary hover:underline">
                      Переглянути Політику конфіденційності
                    </Link>
                  </p>
                </section>

                <Separator className="my-6" />

                {/* 13. Contact */}
                <section id="contact" className="mb-8 scroll-mt-20">
                  <h2 className="mb-4 text-2xl font-bold">
                    13. Контакти та запит правил
                  </h2>
                  <p className="mb-4">
                    Щоб отримати копію цих Офіційних правил поштою або звернутися до
                    Спонсора з питаннями щодо розіграшу:
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
                    <p className="mb-2">
                      <strong>Пошта:</strong> Lucky Link LLC, [Address Placeholder],
                      Вайомінг, США
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Будь ласка, закладайте 2–4 тижні на доставку поштових запитів
                    правил.
                  </p>
                </section>

                {/* Footer Notice */}
                <div className="mt-12 rounded-lg bg-muted/50 p-6">
                  <p className="mb-2 text-center font-semibold">
                    ПОКУПКА НЕ ПОТРІБНА ДЛЯ УЧАСТІ АБО ВИГРАШУ. НЕДІЙСНО ТАМ, ДЕ
                    ЗАБОРОНЕНО.
                  </p>
                  <p className="text-center text-sm text-muted-foreground">
                    &copy; {currentYear} Lucky Link LLC. Всі права захищені.
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
