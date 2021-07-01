import * as React from "react";
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";
import { Content } from "./Content";

const messagesInFrench = {
  myMessage: "Aujourd'hui, c'est le {ts, date, ::yyyyMMdd}",
};

const messages = {
  en: {
    GREETING: "Hello {name}",
  },
  hu: {
    GREETING: "Szia {name}",
  },
};

export const App = () => {
  const [lang, setLang] = React.useState<"en" | "hu">("en");

  const onHandleLang = (value: "en" | "hu") => {
    setLang(value);
  };

  return (
    <IntlProvider
      messages={messages[lang]}
      key={lang}
      locale={lang}
      defaultLocale="en"
    >
      <p>
        <FormattedMessage
          id="GREETING"
          defaultMessage="Hello D!}"
          values={{ name: "Dani" }}
        />
        <br />
        <FormattedNumber value={19} style="currency" currency="EUR" />
      </p>
      <Content setLang={onHandleLang} />
    </IntlProvider>
  );
};
