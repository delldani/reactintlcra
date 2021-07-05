import * as React from "react";
import {
  IntlProvider,
  FormattedMessage,
  FormattedNumber,
  FormattedPlural,
  FormattedDate,
} from "react-intl";
import { Content } from "./Content";

const messagesInFrench = {
  myMessage: "Aujourd'hui, c'est le {ts, date, ::yyyyMMdd}",
};

const messages = {
  en: {
    BASIC: "Basic sentence",
    GREETING: "Hello {name}  <strong> strong</strong>",
    PLURAL:
      "This will be plural :{amount, plural, =0 {no languages} one {# one language}  other {# languages}}",
    FUNC: "függvény <b> tag-el",
    SWITCH:
      "Switc: {gender, select,male {He} female {She} other {They} } will respond shortly.",
  },
  hu: {
    BASIC: "Alap mondat",
    GREETING: "Szia {name} <strong> kiemelt</strong>",
    PLURAL:
      "Ez plural lesz {amount, plural, =0 {no languages} one {# egy nyelv} other {# nyelvek}}",
    FUNC: "Function with <b> tag",
    SWITCH:
      "Switc: {gender, select,male {Ő} female {Ő} other {Ő}} hamarosan válaszol.",
  },
};

export const App = () => {
  const [lang, setLang] = React.useState<"en" | "hu">("en");

  const onHandleLang = (value: "en" | "hu") => {
    setLang(value);
  };

  return (
    <div>
      <IntlProvider
        messages={messages[lang]}
        key={lang}
        locale={lang}
        defaultLocale="en"
      >
        <p>
          <FormattedMessage
            id="GREETING"
            defaultMessage="Hello D!"
            values={{
              name: "Dani",
              strong: (word: string) => <strong>{word}</strong>,
            }}
          />
          <br />

          <FormattedNumber value={19} style="currency" currency="EUR" />
          <br />
          <FormattedPlural value={1} one="message" other="messages" />
          <br />
          <FormattedMessage
            id="PLURAL"
            defaultMessage="ez plral  :{amount, plural, =0 {no languages} one {# one language} few {# several languages} many {# lots of languages} other {# wrong format}}"
            values={{ amount: 2 }}
          />
          <br />
          <FormattedMessage id="FUNC">{(txt) => <b>{txt}</b>}</FormattedMessage>
          <br />
          <FormattedMessage id="SWITCH" values={{ gender: "female" }} />
          <br />
          <FormattedDate
            value={new Date("2013, 03, 09")}
            year="numeric"
            month="long"
            day="2-digit"
          />
        </p>
        <Content setLang={onHandleLang} lang={lang} />
      </IntlProvider>
    </div>
  );
};
