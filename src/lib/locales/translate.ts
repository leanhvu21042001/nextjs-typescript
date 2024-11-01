import i18next from "i18next";

i18next.init({ resources: {} });
i18next.addResourceBundle("en", "namespace1", {
  key: "hello from namespace 1",
});
