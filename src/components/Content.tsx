import * as React from "react";
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";

interface Props {
  setLang: (value: "en" | "hu") => void;
  lang:string;
}

export const Content = (props: Props) => {
  const {lang,setLang} = props;

  const onChange = (e: any) => {
    const value = e.target.value;
    console.log("onchnge", value);
    setLang(value);
  };

  return (
    <div>
      <select name="choice" onChange={onChange} value={lang}>
        <option value="en">en</option>
        <option value="hu">hu</option>
      </select>
    </div>
  );
};
