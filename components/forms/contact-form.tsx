"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname } from "@/lib/locale";
import { SITE_CONFIG } from "@/lib/constants/site";

type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
};

export function ContactForm() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const isUk = locale === "uk";
  const strings = {
    title: isUk ? "Надішліть повідомлення" : "Send us a Message",
    description: isUk
      ? "Заповніть форму нижче, і ми відповімо якнайшвидше."
      : "Fill out the form below and we'll get back to you as soon as possible.",
    nameLabel: isUk ? "Ім'я *" : "Name *",
    emailLabel: isUk ? "Email *" : "Email *",
    phoneLabel: isUk ? "Телефон *" : "Phone *",
    companyLabel: isUk ? "Компанія" : "Company",
    messageLabel: isUk ? "Повідомлення *" : "Message *",
    namePlaceholder: isUk ? "Іван Іваненко" : "John Doe",
    emailPlaceholder: isUk ? "ivan@example.com" : "john@example.com",
    companyPlaceholder: isUk ? "Ваша компанія (необов'язково)" : "Your Company (optional)",
    messagePlaceholder: isUk ? "Розкажіть, як ми можемо допомогти..." : "Tell us how we can help you...",
    sending: isUk ? "Надсилання..." : "Sending...",
    sendMessage: isUk ? "Надіслати повідомлення" : "Send Message",
    successMessage: isUk
      ? "Дякуємо за повідомлення! Ми зв'яжемося з вами найближчим часом."
      : "Thank you for your message! We'll get back to you soon.",
    errorMessage: isUk ? "Щось пішло не так. Спробуйте ще раз." : "Something went wrong. Please try again.",
    contactInfo: isUk ? "Контактна інформація" : "Contact Information",
    email: isUk ? "Email" : "Email",
    location: isUk ? "Локація" : "Location",
    phone: isUk ? "Телефон" : "Phone",
    businessHours: isUk ? "Години роботи" : "Business Hours",
    weekdayHours: isUk ? "Понеділок - П'ятниця" : "Monday - Friday",
    responseTime: isUk
      ? "Зазвичай ми відповідаємо протягом 1-2 робочих днів."
      : "We typically respond to inquiries within 1-2 business days.",
    nameMin: isUk ? "Ім'я має містити щонайменше 2 символи" : "Name must be at least 2 characters",
    emailInvalid: isUk ? "Введіть коректну email-адресу" : "Please enter a valid email address",
    phoneInvalid: isUk ? "Введіть коректний номер телефону" : "Please enter a valid phone number",
    messageMin: isUk ? "Повідомлення має містити щонайменше 10 символів" : "Message must be at least 10 characters",
    contactHref: isUk ? "/uk/contact#contact-form" : "/contact#contact-form",
  };

  const contactFormSchema = useMemo(
    () =>
      z.object({
        name: z.string().min(2, strings.nameMin),
        email: z.string().email(strings.emailInvalid),
        phone: z.string().min(7, strings.phoneInvalid),
        company: z.string().optional(),
        message: z.string().min(10, strings.messageMin),
      }),
    [strings]
  );

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: result.message || strings.successMessage,
        });
        form.reset();
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || strings.errorMessage,
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: strings.errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2" id="contact-form">
        <Card>
          <CardHeader>
            <CardTitle>{strings.title}</CardTitle>
            <CardDescription>{strings.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{strings.nameLabel}</FormLabel>
                        <FormControl>
                          <Input placeholder={strings.namePlaceholder} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{strings.emailLabel}</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder={strings.emailPlaceholder} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{strings.phoneLabel}</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="+13072257838" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{strings.companyLabel}</FormLabel>
                      <FormControl>
                        <Input placeholder={strings.companyPlaceholder} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{strings.messageLabel}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={strings.messagePlaceholder}
                          className="min-h-37.5"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {submitStatus.type && (
                  <div
                    className={`rounded-lg p-4 ${
                      submitStatus.type === "success"
                        ? "bg-green-50 text-green-900 dark:bg-green-900/20 dark:text-green-200"
                        : "bg-red-50 text-red-900 dark:bg-red-900/20 dark:text-red-200"
                    }`}
                  >
                    <p className="text-sm">{submitStatus.message}</p>
                  </div>
                )}

                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                  {isSubmitting ? (
                    strings.sending
                  ) : (
                    <>
                      {strings.sendMessage}
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>{strings.contactInfo}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Email</p>
                <a
                  href={strings.contactHref}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  {SITE_CONFIG.company.supportEmail}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">{strings.location}</p>
                <p className="text-sm text-muted-foreground">
                  Wyoming, USA
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">{strings.phone}</p>
                <div className="space-y-1">
                  {SITE_CONFIG.company.phoneNumbers.map((phone) => (
                    <a
                      key={phone.value}
                      href={`tel:${phone.value}`}
                      className="block text-sm text-muted-foreground hover:text-primary"
                    >
                      {phone.value} {phone.label ? `(${phone.label})` : ""}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{strings.businessHours}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2 text-sm font-semibold">{strings.weekdayHours}</p>
            <p className="text-sm text-muted-foreground">9:00 AM - 6:00 PM MST</p>
            <p className="mt-4 text-sm text-muted-foreground">
              {strings.responseTime}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
