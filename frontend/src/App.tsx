import { Button, Layout } from "antd";
import { useTranslation } from "react-i18next";
import "./App.scss";
import { useRecoilState } from "recoil";
import { countState } from "./state/countState";
import Navigation from "./components/navigation/Navigation";

export default function App() {
  const { t, i18n } = useTranslation();
  const [count, setCount] = useRecoilState(countState);

  const changeLanguage = (lng: "vi" | "en") => {
    i18n.changeLanguage(lng);
    localStorage.setItem("app_language", lng);
  };

  return (
    <div>
      <Layout>
        <Navigation />
        {/* <Button type="primary" onClick={() => changeLanguage("vi")}>
          vi
        </Button>
        <Button type="primary" onClick={() => changeLanguage("en")}>
          en
        </Button>
        <div>{t("hello")}</div>
        <br />
        <p>{count}</p>
        <Button onClick={() => setCount((prev) => prev + 1)}>Count!</Button> */}
      </Layout>
    </div>
  );
}
