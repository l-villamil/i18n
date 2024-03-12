import React from "react";
import ReactDOM from "react-dom";
import localeEsMessages from "./locales/es.json";
import localeEnMessages from "./locales/en.json"

import {IntlProvider} from 'react-intl';

import JobsList from "./components/jobslist";

const userLanguage = navigator.language.split('-')[0]; // Obtiene el idioma del navegador del usuario
const messages = {
    'es': localeEsMessages,
    'en': localeEnMessages,
    // Agrega más idiomas según sea necesario
  };
ReactDOM.render(     <IntlProvider locale={userLanguage} messages={messages[userLanguage]}>
<JobsList/>
</IntlProvider>, document.getElementById("root"));
