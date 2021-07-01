import * as React from "react";
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";

interface Props {
  setLang: (value: "en" | "hu") => void;
}

export const Content = (props: Props) => {
  const [select, setSelect] = React.useState("en");
  const onChange = (e: any) => {
    const value = e.target.value;
    setSelect(value);
    console.log("onchnge", value);
    props.setLang(value);
  };

  console.log(select);
  return (
    <div>
      <select name="choice" onChange={onChange} value={select}>
        <option value="en">en</option>
        <option value="hu">hu</option>
      </select>
    </div>
  );
};
