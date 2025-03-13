import { NextIntlClientProvider } from "next-intl";
import { getMessages } from 'next-intl/server';
import CloudfretNewsletter from "@/sections/layout/cloudfret-newsletter";
import CloudfretFooter from "@/sections/layout/cloudfret-footer";
import CloudfretNavbar from "@/sections/layout/cloudfret-navbar";
import CloudfretOffer from "@/sections/layout/cloudfret-offer";
import PageLoader from "@/components/page-loader";

export default async function RootLayout({ children }) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <CloudfretOffer />
      <CloudfretNavbar />

      {children}

      <CloudfretNewsletter />
      <CloudfretFooter />
      <PageLoader />
    </NextIntlClientProvider>
  );
}
