const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json"); // adjust path if needed

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Data from your static components
const mediaLogos = [
  { name: "NBC", url: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/b6c516a5-4474-44f0-a975-3ed6b323d513/NBC+Logo.png" },
  { name: "Chicago Tribune", url: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/007fe245-5cc6-47da-b027-4a2e928a940a/Image+8.jpeg?format=500w" },
  { name: "Forbes", url: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/b971b48c-a7c5-4344-9e19-080235d56cad/Forbes+Logo.jpg" },
  { name: "FOX News", url: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/68b86324-0484-4f6c-9647-df16f95d0405/FOX+News+Logo.jpg" },
  { name: "TEDx", url: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/b2f99b48-c90e-4465-aec2-8b3b277dc8f4/TEDx+Logo.png?format=300w" },
];

const recognitions = [
  {
    logo: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/c913cc0e-0ff1-4aeb-b451-286c5d0cce4b/Image+86.jpeg?format=500w",
    title: "Forbes 30 Under 30",
    subtitle: "Youngest Honoree of Class of 2026",
    buttonText: "Read More",
    link: "https://www.forbes.com/profile/momin-ahmed/",
  },
  {
    logo: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/a0621259-7e6b-41e6-937b-c3268a9a07df/Image+2.jpeg?format=500w",
    title: "FOX News",
    subtitle: "Illinois High School Senior Becomes Youngest Honoree on Forbes 30 Under 30 List",
    buttonText: "Watch Segment",
    link: "https://www.fox32chicago.com/video/fmc-n1kql9459pc5l1uk",
  },
  {
    logo: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/b6c516a5-4474-44f0-a975-3ed6b323d513/NBC+Logo.png",
    title: "NBC",
    subtitle: "Airing March 16th, 2026",
    buttonText: "Coming Soon",
    link: "https://modelunacademy.org/our-recognitions",
  },
  {
    logo: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/4c8fad20-ade9-471c-86de-c98e212121cb/Chicago+Tribune+Square+Logo.jpg?format=500w",
    title: "Chicago Tribune",
    subtitle: "Hinsdale Central teen sets up Model UN Academy site to help thousands of students find success",
    buttonText: "Read More",
    link: "https://www.chicagotribune.com/2025/11/15/hinsdale-central-teen-sets-up-model-un-academy-site/",
  },
  {
    logo: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/b2f99b48-c90e-4465-aec2-8b3b277dc8f4/TEDx+Logo.png?format=300w",
    title: "TEDx Talk",
    subtitle: "How to Disagree Without Dividing | Momin Ahmed",
    buttonText: "Watch Talk",
    link: "https://www.youtube.com/watch?v=1RN7wtJWeJQ",
  },
  {
    logo: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/11f5302a-9b54-4148-aea2-eb9886fb3cc0/Youth+Service+America+Square+Logo.jpg?format=500w",
    title: "Youth Service America",
    subtitle: "Everyday Young Hero",
    buttonText: "Read More",
    link: "https://ysa.org/mominahmed/",
  },
];

async function seed() {
  // Clear existing data (optional – comment out if you don't want to delete existing entries)
  console.log("Clearing existing media_logos...");
  const mediaSnapshot = await db.collection("media_logos").get();
  const mediaBatch = db.batch();
  mediaSnapshot.docs.forEach((doc) => mediaBatch.delete(doc.ref));
  await mediaBatch.commit();

  console.log("Clearing existing recognitions...");
  const recSnapshot = await db.collection("recognitions").get();
  const recBatch = db.batch();
  recSnapshot.docs.forEach((doc) => recBatch.delete(doc.ref));
  await recBatch.commit();

  // Add media logos
  console.log("Adding media logos...");
  for (const [i, logo] of mediaLogos.entries()) {
    await db.collection("media_logos").add({
      name: logo.name,
      logo_url: logo.url,
      sort_order: i,
    });
  }

  // Add recognitions
  console.log("Adding recognitions...");
  for (const [i, rec] of recognitions.entries()) {
    await db.collection("recognitions").add({
      title: rec.title,
      subtitle: rec.subtitle,
      logo_url: rec.logo,
      link_url: rec.link,
      button_text: rec.buttonText,
      sort_order: i,
    });
  }

  console.log("Seed complete!");
}

seed().catch(console.error);