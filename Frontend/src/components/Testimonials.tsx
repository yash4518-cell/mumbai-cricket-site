import SectionTag from "./SectionTag";

const crewData = [
  {
    title: "Operators",
    role: "Operator",
    members: ["Yash Nadkar", "Soham Jadhav", "Idrish Badgujar", "Samip Gurav"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
      </svg>
    ),
  },
  {
    title: "Cameraman",
    role: "Cameraman",
    members: ["Sarthak More", "Saksham Jadhav", "Deep Nadkar", "Harshad Surve"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M12 15.75h-.75m.75 0H8.25m3.75 0V12m0-3.75H8.25m-3.75 0H3.75m4.5 0H4.5m15 0h-3.75m0 0V8.25m0 3.75v3.75m0-7.5a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75v-.75A.75.75 0 0115 8.25zM6 12a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12z" />
      </svg>
    ),
  },
  {
    title: "Management",
    role: "Manager",
    members: ["Idrish Badgujar", "Sushant More"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
];

export default function Testimonials() {
  return (
    <section className="bg-chalk-100 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <SectionTag>OUR CREW</SectionTag>
          <h2 className="font-display uppercase text-4xl sm:text-5xl text-ink-900 mt-3">
            Mumbai Cricket Crew
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {crewData.map((member, index) => (
            <div
              key={member.title}
              className="fade-up-card bg-white rounded-[18px] p-8 flex flex-col"
              style={{
                boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                transition: "all .3s ease",
                animationDelay: `${index * 100}ms`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="flex items-center justify-center w-14 h-14 rounded-full"
                  style={{ backgroundColor: "var(--color-ball-500)", color: "white" }}
                >
                  {member.icon}
                </div>
                <div>
                  <h3 className="font-display uppercase text-xl text-ink-900">{member.title}</h3>
                  <p
                    className="font-mono text-xs tracking-wide mt-1"
                    style={{ color: "var(--color-ball-600)" }}
                  >
                    {member.role}
                  </p>
                </div>
              </div>

              <div className="border-t" style={{ borderColor: "rgba(20, 32, 27, 0.08)" }}></div>

              <ul className="mt-5 space-y-2 flex-1">
                {member.members.map((name) => (
                  <li key={name} className="text-ink-900 text-sm leading-relaxed">
                    • {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .fade-up-card {
          opacity: 0;
          animation: fadeUp 600ms ease forwards;
        }
      `}</style>
    </section>
  );
}
