import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
  Navigate,
} from "react-router-dom";
import FlagPage from "./FlagPage";
import PersonDetails from "./PersonDetails";
import { useTranslation } from "react-i18next";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const LanguageWrapper = ({ children }: { children: any }) => {
  const { i18n } = useTranslation();
  const { lang } = useParams();

  React.useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  return children;
};

const getUserLanguage = () => {
  const language = navigator.language.split("-")[0]; // Get the browser language (first part)
  const supportedLanguages = ["en", "cz", "ua"];
  return supportedLanguages.includes(language) ? language : "cz"; // Default to 'cz' if not supported
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={`/${getUserLanguage()}`} />} />
        <Route
          path="/:lang"
          element={
            <LanguageWrapper>
              <Header absolute />
              <FlagPage />
              <Footer />
            </LanguageWrapper>
          }
        />
        <Route
          path="/:lang/:id"
          element={
            <LanguageWrapper>
              <Header />
              <PersonDetails />
              <Footer isBlue />
            </LanguageWrapper>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
