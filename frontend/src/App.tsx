import { Button } from "antd";
import { useTranslation } from "react-i18next";
import "./App.scss";
import { useRecoilState } from "recoil";
import { countState } from "./state/countState";

export default function App() {
  const { t, i18n } = useTranslation();
  const [count, setCount] = useRecoilState(countState);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <Button type="primary" onClick={() => changeLanguage("vi")}>
        vi
      </Button>
      <Button type="primary" onClick={() => changeLanguage("en")}>
        en
      </Button>
      <div>{t("hello")}</div>
      <br />
      <p>{count}</p>
      <Button onClick={() => setCount((prev) => prev + 1)}>Count!</Button>
    </div>
  );
}
