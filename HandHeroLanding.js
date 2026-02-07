{\rtf1\ansi\ansicpg1250\cocoartf2820
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;\f1\fnil\fcharset0 AppleColorEmoji;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 "use client";\
\
import \{ useState \} from "react";\
import \{ Card, CardContent \} from "@/components/ui/card";\
import \{ Button \} from "@/components/ui/button";\
import \{ Input \} from "@/components/ui/input";\
import \{ motion \} from "framer-motion";\
\
export default function HandHeroLanding() \{\
  const [step, setStep] = useState(1);\
  const [form, setForm] = useState(\{\
    greasiness: "",\
    usefulness: "",\
    wouldWant: "",\
    food: "",\
    restaurant: "",\
    email: "",\
  \});\
\
  const [loading, setLoading] = useState(false);\
\
  const handleChange = (field, value) => \{\
    setForm(\{ ...form, [field]: value \});\
  \};\
\
  const submitForm = async () => \{\
    setLoading(true);\
    try \{\
      await fetch("https://api.sheetbest.com/sheets/72bdaed2-50ac-4601-9617-b53edab7eab0", \{  // ide m\'e1r a te linked kell\
        method: "POST",\
        headers: \{ "Content-Type": "application/json" \},\
        body: JSON.stringify(form),\
      \});\
      setStep(5);\
    \} catch (err) \{\
      console.error(err);\
      alert("Hiba t\'f6rt\'e9nt, pr\'f3b\'e1ld \'fajra.");\
    \} finally \{\
      setLoading(false);\
    \}\
  \};\
\
  return (\
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 flex items-center justify-center p-4">\
      <motion.div initial=\{\{ opacity: 0 \}\} animate=\{\{ opacity: 1 \}\}>\
        <Card className="max-w-md w-full rounded-2xl shadow-xl">\
          <CardContent className="p-6 space-y-6">\
\
            \{step === 1 && (\
              <div className="space-y-4 text-center">\
                <h1 className="text-3xl font-bold">HandHero</h1>\
                <p className="text-lg">
\f1 \uc0\u55356 \u57172 
\f0  Zs\'edros lett a kezed?</p>\
                <p>Seg\'edts nek\'fcnk \'e9s nyerj ingyen kaj\'e1t!</p>\
                <Button className="w-full" onClick=\{() => setStep(2)\}>\
                  10 m\'e1sodperces k\'e9rd\uc0\u337 \'edv ind\'edt\'e1sa\
                </Button>\
              </div>\
            )\}\
\
            \{step === 2 && (\
              <div className="space-y-4">\
                <h2 className="text-xl font-semibold">Mennyire volt zs\'edros a kezed?</h2>\
                \{["Egy\'e1ltal\'e1n nem", "Kicsit", "Nagyon"].map((opt) => (\
                  <Button\
                    key=\{opt\}\
                    variant="outline"\
                    className="w-full"\
                    onClick=\{() => \{ handleChange("greasiness", opt); setStep(3); \}\}\
                  >\
                    \{opt\}\
                  </Button>\
                ))\}\
              </div>\
            )\}\
\
            \{step === 3 && (\
              <div className="space-y-4">\
                <h2 className="text-xl font-semibold">Mennyire volt hasznos a t\'f6rl\uc0\u337 kend\u337 ?</h2>\
                \{["Nem haszn\'e1ltam", "Hasznos volt", "Im\'e1dtam"].map((opt) => (\
                  <Button\
                    key=\{opt\}\
                    variant="outline"\
                    className="w-full"\
                    onClick=\{() => \{ handleChange("usefulness", opt); setStep(4); \}\}\
                  >\
                    \{opt\}\
                  </Button>\
                ))\}\
              </div>\
            )\}\
\
            \{step === 4 && (\
              <div className="space-y-4">\
                <h2 className="text-xl font-semibold">Szeretn\'e9d ha mindig lenne a rendel\'e9sben?</h2>\
                \{["Nem fontos", "J\'f3 lenne", "K\'d6TELEZ\uc0\u336 !"].map((opt) => (\
                  <Button\
                    key=\{opt\}\
                    variant="outline"\
                    className="w-full"\
                    onClick=\{() => handleChange("wouldWant", opt)\}\
                  >\
                    \{opt\}\
                  </Button>\
                ))\}\
                <Input placeholder="Mit ett\'e9l? (burger/pizza stb)" onChange=\{(e) => handleChange("food", e.target.value)\} />\
                <Input placeholder="Melyik \'e9tteremb\uc0\u337 l rendelt\'e9l?" onChange=\{(e) => handleChange("restaurant", e.target.value)\} />\
                <Input placeholder="Email (nyerem\'e9nyj\'e1t\'e9khoz - opcion\'e1lis)" onChange=\{(e) => handleChange("email", e.target.value)\} />\
                <Button className="w-full" onClick=\{submitForm\} disabled=\{loading\}>\
                  \{loading ? "K\'fcld\'e9s..." : "K\'e9sz"\}\
                </Button>\
              </div>\
            )\}\
\
            \{step === 5 && (\
              <div className="text-center space-y-4">\
                <h2 className="text-2xl font-bold">K\'f6sz\'f6nj\'fck! 
\f1 \uc0\u10084 \u65039 
\f0 </h2>\
                <p>R\'e9szt veszel az ingyen kaja sorsol\'e1son 
\f1 \uc0\u55356 \u57173 
\f0 </p>\
                <p className="text-sm text-gray-500">Hamarosan minden rendel\'e9shez j\'e1rhat HandHero 
\f1 \uc0\u55357 \u56841 
\f0 </p>\
              </div>\
            )\}\
\
          </CardContent>\
        </Card>\
      </motion.div>\
    </div>\
  );\
\}\
}