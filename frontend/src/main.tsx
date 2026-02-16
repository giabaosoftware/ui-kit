import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ConfigProvider } from "antd";
import { I18nextProvider } from "react-i18next";
import i18n from "./locales/i18n.ts";
import { RecoilRoot } from "recoil";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <RecoilRoot>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#2a3f5dff",
              borderRadius: 8,
            },
          }}
        >
          <App />
        </ConfigProvider>
      </RecoilRoot>
    </I18nextProvider>
  </StrictMode>,
);
