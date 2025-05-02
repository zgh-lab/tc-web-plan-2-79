
interface ContentSection {
  type: 'paragraph' | 'heading' | 'subheading' | 'list';
  content?: string;
  items?: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  imageUrl?: string;
  content: ContentSection[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'sensor-integrated-textiles-trend',
    title: 'Sensorintegrerade textilier är en växande trend i Europa',
    excerpt: 'Tröjor som mäter hjärtslag, sportkläder som följer rörelsemönster och arbetskläder som larmar vid fara är exempel på teknik som nu är på väg att bli verklighet.',
    date: '2 maj 2025',
    author: 'WRLDS Technologies',
    category: 'Trender',
    imageUrl: '/lovable-uploads/30473baa-85f4-4931-aad9-c722ae7a4918.png',
    content: [
      {
        type: 'paragraph',
        content: 'Tröjor som mäter hjärtslag, sportkläder som följer rörelsemönster och arbetskläder som larmar vid fara är exempel på teknik som nu är på väg att bli verklighet. Sensorer inbyggda i tyger, så kallade smarta textilier eller sensorintegrerade textilier, etablerar sig snabbt som en viktig trend internationellt. I Europa sker utvecklingen särskilt snabbt.'
      },
      {
        type: 'paragraph',
        content: 'För beslutsfattare inom hälsa, sport, industri och räddningstjänst innebär detta nya möjligheter till ökad effektivitet, bättre säkerhet och ökad innovationskraft. Utvecklingen i Europa drivs av flera faktorer. Exempelvis ökad efterfrågan på bärbar teknik, hållbarhetskrav och snabb digitalisering inom industrin. Samtidigt börjar EU se över regelverk för att främja och reglera området.'
      },
      {
        type: 'paragraph',
        content: 'Den här artikeln går igenom aktuella trender inom smarta textilier, vad som driver utvecklingen i Europa, vilka EU-regler som är viktiga att känna till och hur WRLDS Technologies kopplar in som teknikpartner i utvecklingen.'
      },
      {
        type: 'heading',
        content: 'Trender inom smarta textilier och sensorteknik'
      },
      {
        type: 'paragraph',
        content: 'Smarta textilier kombinerar elektronik och tyg för att skapa teknik som kan bäras direkt på kroppen. Det handlar om allt från sporttröjor med pulsmätare till bilsäten med inbyggda sensorer. Den globala marknaden för smarta textilier förväntas växa med cirka 22 procent per år under det här decenniet. Samtidigt växer marknaden för bärbar teknik i Europa med omkring 15,5 procent per år. Den uppskattas nå ett värde på cirka 62 miljarder dollar år 2031.'
      },
      {
        type: 'paragraph',
        content: 'Att tekniken etablerar sig bekräftas också av utvecklingen på mässor som Techtextil i Frankfurt. Här presenteras innovationer som grafenförstärkta tyger och tryckkänsliga material. Forskare har visat hur kläder kan användas som gränssnitt mot digitala system. Exempelvis kan en ärm med magnetiska sensorer användas för att styra ljus eller navigera i en VR-miljö med hjälp av handrörelser.'
      },
      {
        type: 'paragraph',
        content: 'Smarta textilier kan alltså både samla in data om bäraren och interagera med omgivningen.'
      },
      {
        type: 'heading',
        content: 'Användningsområden i dag'
      },
      {
        type: 'subheading',
        content: 'Hälsa'
      },
      {
        type: 'paragraph',
        content: 'Sensorplagg används redan i sjukvården för att övervaka puls, andning, kroppstemperatur och blodtryck. Detta möjliggör smarta sjukvårdsvästar, t-shirts för träningsuppföljning och lösningar för äldreomsorgen.'
      },
      {
        type: 'subheading',
        content: 'Sport'
      },
      {
        type: 'paragraph',
        content: 'Inom träning och idrott används kläder med rörelse- och muskelsensorer för att analysera prestation och teknik i realtid. Det ger värdefull feedback och kan förebygga skador.'
      },
      {
        type: 'subheading',
        content: 'Industri'
      },
      {
        type: 'paragraph',
        content: 'I industrin används uppkopplade arbetskläder för att mäta temperatur, gasnivåer och ergonomi. Kläderna kan upptäcka farliga miljöförhållanden eller varna vid felaktiga arbetsställningar.'
      },
      {
        type: 'subheading',
        content: 'Räddningstjänst'
      },
      {
        type: 'paragraph',
        content: 'Inom brandkår, polis och militär används sensorutrustning för att förbättra säkerheten. En jacka kan exempelvis registrera temperaturer, larma vid medvetslöshet och skicka positionsdata till kollegor.'
      },
      {
        type: 'heading',
        content: 'Varför utvecklingen går snabbt i Europa'
      },
      {
        type: 'subheading',
        content: 'Efterfrågan på bärbar teknik'
      },
      {
        type: 'paragraph',
        content: 'Europeiska konsumenter använder redan smartklockor och aktivitetsarmband. Nästa steg är att integrera denna funktionalitet direkt i kläderna. Behovet ökar i takt med att befolkningen blir mer teknikvan, mer hälsomedveten och äldre.'
      },
      {
        type: 'subheading',
        content: 'Fokus på hållbarhet'
      },
      {
        type: 'paragraph',
        content: 'Hållbarhet är centralt i EU:s politik och konsumentkrav. Det gäller även för smarta textilier. Produkterna måste vara återvinningsbara, tåla tvätt och slitage och inte bidra till ökade avfallsmängder. Redan nu ställs krav på eko-design, återvinningsbarhet och längre livslängd.'
      },
      {
        type: 'subheading',
        content: 'Digitalisering i näringslivet'
      },
      {
        type: 'paragraph',
        content: 'Digitaliseringen, inte minst genom initiativ som Industri 4.0 och Internet of Things, skapar efterfrågan på kroppsnära data. Smarta textilier är ett naturligt inslag i denna omställning. De gör det möjligt att samla in information direkt från människor i realtid och integrera den i digitala system för vård, träning och produktion.'
      },
      {
        type: 'heading',
        content: 'EU-regler och standarder att känna till'
      },
      {
        type: 'subheading',
        content: 'Dataskydd'
      },
      {
        type: 'paragraph',
        content: 'Smarta textilier hanterar ofta känslig information om individers hälsa och välbefinnande. GDPR gäller fullt ut. Det kräver tydligt samtycke och säker datahantering. Den nya Data Act från 2024 stärker dessutom reglerna för hur data från uppkopplade produkter får delas och användas.'
      },
      {
        type: 'subheading',
        content: 'Produktsäkerhet och IT-säkerhet'
      },
      {
        type: 'paragraph',
        content: 'Sensorprodukter måste uppfylla samma säkerhetskrav som annan elektronik på EU-marknaden, inklusive CE-märkning. EU:s nya cybersäkerhetslag, Cyber Resilience Act, ställer också krav på inbyggd IT-säkerhet. Tillverkare måste kunna visa att produkterna är skyddade mot intrång och får uppdateringar under hela sin livscykel.'
      },
      {
        type: 'subheading',
        content: 'Hållbarhet och livscykel'
      },
      {
        type: 'paragraph',
        content: 'Från 2025 blir separat insamling av textilier obligatorisk i hela EU. Nya krav på producentansvar innebär att även smarta kläder måste designas för återvinning. Elektronikdelar bör kunna tas bort och återvinnas, och materialen i övrigt ska vara hållbara. Även produktens hållbarhet över tid blir en regulatorisk fråga.'
      },
      {
        type: 'heading',
        content: 'WRLDS Technologies som teknikpartner'
      },
      {
        type: 'paragraph',
        content: 'Företag som vill utveckla sensorintegrerade textilier står ofta inför tekniska utmaningar. Det handlar om att kombinera tyg, elektronik, mjukvara och datainsamling i en fungerande helhet. Här kommer WRLDS Technologies in som teknikpartner med bred erfarenhet av att integrera sensorer i produkter för sport, industri och hälsa.'
      },
      {
        type: 'paragraph',
        content: 'WRLDS hjälper sina kunder genom hela utvecklingsprocessen. Det kan handla om att ta fram en första prototyp för tester, eller att skala upp till färdig produkt för marknaden. Genom att tillhandahålla både hårdvarukomponenter och kompetens inom mjukvaruintegration underlättar WRLDS för företag att fokusera på användningen i sin egen bransch.'
      },
      {
        type: 'paragraph',
        content: 'Exempel på tidigare projekt inkluderar träningsutrustning som ger feedback i realtid och arbetskläder med klimatsensorer för extrema miljöer. Tillsammans med kundens team tar WRLDS fram lösningar som är redo att möta både tekniska och regulatoriska krav.'
      },
      {
        type: 'paragraph',
        content: 'I en tid när sensorintegrerade textilier snabbt vinner mark blir valet av teknikpartner avgörande. WRLDS erbjuder den kompetens och flexibilitet som krävs för att förverkliga idéer, minska utvecklingsrisker och få ut innovativa produkter på marknaden.'
      }
    ]
  }
];
