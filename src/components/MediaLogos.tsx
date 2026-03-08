const logos = [
  { name: "Forbes", url: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/b971b48c-a7c5-4344-9e19-080235d56cad/Forbes+Logo.jpg" },
  { name: "FOX News", url: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/68b86324-0484-4f6c-9647-df16f95d0405/FOX+News+Logo.jpg" },
  { name: "NBC", url: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/b6c516a5-4474-44f0-a975-3ed6b323d513/NBC+Logo.png" },
  { name: "Google News", url: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/405d1295-30a2-4002-b614-bf1333978df4/Google_News_Logo-removebg-preview.png" },
  { name: "Apple News", url: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/020f22fa-6815-4938-bf4e-e9c78414fd63/Apple_News_Logo-removebg-preview.png" },
  { name: "Yahoo News", url: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/d8799946-c855-4662-8b91-7435cf1c168c/Yahoo_News_Logo-removebg-preview.png" },
];

const MediaLogos = () => {
  return (
    <section className="py-16 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-muted-foreground text-sm uppercase tracking-widest mb-10 font-body">
          As Featured In
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {logos.map((logo) => (
            <img
              key={logo.name}
              src={logo.url}
              alt={logo.name}
              className="h-8 md:h-10 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaLogos;
