const therapist = {
  name: "Dr. Serena Blake, PsyD",
  title: "Clinical Psychologist",
  image: "/serena.jpg", 
  location: "1287 Maplewood Drive, Los Angeles, CA 90026",
  contact: {
    phone: "(323) 555-0192",
    email: "serena@blakepsychology.com",
  },
  officeHours: {
    inPerson: "Tue & Thu, 10 AM–6 PM",
    virtual: "Mon, Wed & Fri, 1 PM–5 PM",
  },
  experience: "8 years of practice, 500+ sessions",
  about:
    "Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma. Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.",
  services: [
    {
      title: "Anxiety & Stress Management",
      description:
        "Learn techniques to manage stress and reduce anxiety using evidence-based therapies like CBT and mindfulness.",
    },
    {
      title: "Relationship Counseling",
      description:
        "Improve communication, resolve conflicts, and build healthier relationships with guidance and support.",
    },
    {
      title: "Trauma Recovery",
      description:
        "Heal from past trauma in a safe, compassionate space using personalized therapy approaches.",
    },
  ],
  fees: {
    individual: "$200 / individual session",
    couples: "$240 / couples session",
  },
  faq: [
    {
      question: "Do you accept insurance?",
      answer: "No, but a superbill is provided for self-submission.",
    },
    {
      question: "Are online sessions available?",
      answer: "Yes—all virtual sessions via Zoom.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "24-hour notice required.",
    },
  ],
};

export default therapist;
