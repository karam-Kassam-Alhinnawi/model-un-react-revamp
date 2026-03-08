import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useState } from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const allLanguages = [
  "Afrikaans", "Albanian/Shqiptare", "Amharic/አማርኛ", "Arabic/عربي", "Armenian/հայկ",
  "Azerbaijani/Azərbaycan", "Basque/Euskara", "Belarusian/беларускі", "Bengali/Bangla/বাংলা",
  "Bosnian/Bosanski", "Bulgarian/български", "Catalan/Català", "Cebuano", "Chichewa",
  "Chinese (Simplified)/简体中文", "Chinese (Traditional)/繁體中文", "Corsican/Corsu",
  "Croatian/Hrvatski", "Czech/Čeština", "Danish/Dansk", "Dutch/Nederlands", "English",
  "Esperanto", "Estonian/Eesti Keel", "Filipino", "Finnish/Suomalainen", "French/Français",
  "Frisian/Frysk", "Galician/Galego", "Georgian/ქართული", "German/Deutsch", "Greek/ελληνικά",
  "Gujarati/ગુજરાતી", "Haitian Creole/Kreyòl ayisyen", "Hausa", "Hawaiian/ʻŌlelo Hawaiʻi",
  "Hebrew/עִברִית", "Hindi/हिंदी", "Hmong/Hmoob", "Hungarian/Magyar", "Icelandic/Íslenskur",
  "Igbo", "Indonesian/Indonesia", "Irish/Gaeilge", "Italian/Italiano", "Japanese/日本語",
  "Javanese/Basa Jawa", "Kannada/ಕನ್ನಡ", "Kazakh/қазақ", "Khmer/ខ្មែរ", "Korean/한국인",
  "Kurdish/Kurdî", "Kyrgyz/Кыргызча", "Laotian/ຄົນລາວ", "Latin/Latinus", "Latvian/Latviski",
  "Lithuanian/Lietuvių", "Luxembourgish/Lëtzebuergesch", "Macedonian/македонски", "Malagasy",
  "Malay/Melayu", "Malayalam/മലയാളം", "Maltese/Malti", "Mãori", "Marathi/मराठी",
  "Mongolian/Монгол", "Myanmar (Burmese)/မြန်မာ", "Nepali/नेपाली", "Norwegian/Norsk",
  "Pashto/پښتو", "Persian/فارسی", "Polish/Polski", "Portuguese/Português",
  "Punjabi (Gurmukhi)/ਪੰਜਾਬੀ", "Romanian/Română", "Russian/Русский", "Samoan/Samoa",
  "Scots Gaelic/Gàidhlig", "Serbian/Cрпски", "Sesotho", "Shona", "Sindhi/سنڌي",
  "Sinhala/සිංහල", "Slovak/Slovenský", "Slovenian/Slovenski", "Somali/Soomaali",
  "Spanish/Español", "Sundanese/Basa Sunda", "Swahili/Kiswahili", "Swedish/Svenska",
  "Tajik/тоҷикӣ", "Tamil/தமிழ்", "Telugu/తెలుగు", "Thai/แบบไทย", "Turkish/Türkçe",
  "Ukrainian/українська", "Urdu/اردو", "Uzbek/O'zbek", "Vietnamese/Tiếng Việt",
  "Welsh/Cymraeg", "Xhosa/isiXhosa", "Yiddish/יידיש", "Yoruba", "Zulu",
];

const Languages = () => {
  const [search, setSearch] = useState("");
  const filtered = allLanguages.filter(l => l.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <div className="pt-8"><Navbar /></div>
      <PageHero title="Languages" />

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
                1,300,000 words in 104 languages
              </h2>
              <p className="text-muted-foreground font-body">Browse all available translations of our educational guides</p>
            </div>

            <div className="relative mb-8 max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="text"
                placeholder="Search languages..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-full border border-border bg-card text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {filtered.map((lang, i) => (
                <motion.div
                  key={lang}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(i * 0.02, 0.5) }}
                  className="bg-card rounded-xl p-4 shadow-card hover:shadow-elevated hover:scale-[1.02] transition-all cursor-pointer border border-border/50 hover:border-primary/30"
                >
                  <span className="text-sm font-medium text-foreground font-body">{lang}</span>
                </motion.div>
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="text-center text-muted-foreground mt-8 font-body">No languages found matching "{search}"</p>
            )}
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Languages;
