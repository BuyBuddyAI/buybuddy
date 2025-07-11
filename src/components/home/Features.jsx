const features = [
  { icon: "🧠", title: "AI Chat Assistant", desc: "Talk to an intelligent assistant for personalized help." },
  { icon: "📉", title: "Live Deal Alerts", desc: "Be the first to know when prices drop." },
  { icon: "🛍️", title: "Smart Shopping Lists", desc: "Plan your shopping with ease." },
];

const Features = () => {
  return (
    <section id="features" className="py-14 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10">Why BuyBuddy?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <div key={i} className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition">
            <div className="text-5xl mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold">{f.title}</h3>
            <p className="text-gray-600 mt-2">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
