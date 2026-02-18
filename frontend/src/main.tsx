import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
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
              colorPrimary: "#001a3d",
              borderRadius: 8,
            },
            components: {
              Layout: {
                headerBg: "#fdfdf5",
              },
              Menu: {
                colorBgBase: "#fdfdf5",
                colorItemBg: "#fdfdf5",
              },
            },
          }}
        >
          <App />
        </ConfigProvider>
      </RecoilRoot>
    </I18nextProvider>
  </StrictMode>,
);
