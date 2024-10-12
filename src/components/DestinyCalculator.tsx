import React, { useState } from 'react';

interface DestinyResult {
  personalQualities: string;
  previousLife: string;
  lifeScenario: string;
  talents: string;
  destiny: string;
  money: string;
  programs: string;
  sexiness: string;
  parents: string;
  kids: string;
  relationship: string;
  lifeGuidance: string;
  yearForecast: string;
  personalBrand: string;
  health: string;
}

const calculateLifePathNumber = (birthDate: string): number => {
  const date = new Date(birthDate);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const sum = year.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0) +
              month.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0) +
              day.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);

  return (sum % 9) || 9;
};

const calculateExpressionNumber = (name: string): number => {
  const letterValues: { [key: string]: number } = {
    'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9,
    'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'O': 6, 'P': 7, 'Q': 8, 'R': 9,
    'S': 1, 'T': 2, 'U': 3, 'V': 4, 'W': 5, 'X': 6, 'Y': 7, 'Z': 8
  };

  const sum = name.toUpperCase().split('').reduce((acc, char) => {
    return acc + (letterValues[char] || 0);
  }, 0);

  return (sum % 9) || 9;
};

const generateResult = (name: string, birthDate: string, gender: string): DestinyResult => {
  const lifePathNumber = calculateLifePathNumber(birthDate);
  const expressionNumber = calculateExpressionNumber(name);

  const getPersonalQualities = (lifePathNumber: number, expressionNumber: number): string => {
    const qualities = [
      "leadership", "cooperation", "creativity", "practicality", "freedom",
      "responsibility", "analysis", "power", "humanitarianism"
    ];
    return `Your personal qualities are influenced by your Life Path Number ${lifePathNumber} and Expression Number ${expressionNumber}. This combination suggests strengths in ${qualities[lifePathNumber - 1]} and ${qualities[expressionNumber - 1]}.`;
  };

  const getPreviousLife = (lifePathNumber: number): string => {
    const previousLives = [
      "a leader or ruler", "a diplomat or peacemaker", "an artist or performer",
      "a builder or organizer", "an adventurer or explorer", "a teacher or healer",
      "a scholar or philosopher", "a business person or manager", "a humanitarian or visionary"
    ];
    return `In your previous life, you may have been ${previousLives[lifePathNumber - 1]}.`;
  };

  const getLifeScenario = (expressionNumber: number): string => {
    const scenarios = [
      "overcoming challenges to achieve personal growth",
      "building harmonious relationships and partnerships",
      "expressing yourself creatively and inspiring others",
      "creating stability and security in your life and for others",
      "embracing change and personal freedom",
      "nurturing and supporting others while finding balance",
      "seeking knowledge and understanding of life's mysteries",
      "achieving material success and personal power",
      "working towards the betterment of humanity"
    ];
    return `Your life scenario revolves around ${scenarios[expressionNumber - 1]}.`;
  };

  // Add more functions for other aspects...

  return {
    personalQualities: getPersonalQualities(lifePathNumber, expressionNumber),
    previousLife: getPreviousLife(lifePathNumber),
    lifeScenario: getLifeScenario(expressionNumber),
    talents: `Your natural talents are influenced by your Expression Number ${expressionNumber}. You have a gift for ${["leadership and initiative", "diplomacy and cooperation", "creativity and self-expression", "organization and hard work", "versatility and adaptability", "nurturing and problem-solving", "analysis and introspection", "management and achievement", "inspiration and humanitarianism"][expressionNumber - 1]}.`,
    destiny: `Your destiny is shaped by the combination of your Life Path (${lifePathNumber}) and Expression (${expressionNumber}) numbers. This suggests a life purpose that involves ${["taking charge and inspiring others", "mediating and creating harmony", "expressing your unique creativity", "building solid foundations", "exploring and expanding horizons", "serving and supporting others", "seeking wisdom and sharing knowledge", "achieving success and empowering others", "working towards global improvement"][Math.floor((lifePathNumber + expressionNumber) / 2) - 1]}.`,
    money: `Your approach to finances is influenced by your Life Path Number ${lifePathNumber}. You tend to ${["be ambitious and seek financial success", "value partnerships and balanced finances", "have creative approaches to money-making", "work hard for financial stability", "seek financial freedom and unconventional income", "be responsible and service-oriented with money", "analyze and strategize your financial moves", "have potential for great wealth through power and influence", "attract money through humanitarian efforts"][lifePathNumber - 1]}.`,
    programs: `Based on your numbers, you may benefit from programs or courses related to ${["leadership and management", "relationship building and conflict resolution", "arts and creative expression", "practical skills and organization", "personal development and adventure", "health and wellness", "philosophy and research", "business and finance", "social causes and global awareness"][expressionNumber - 1]}.`,
    sexiness: `Your sensuality and attractiveness are influenced by your Expression Number ${expressionNumber}. You exude charm through your ${["confidence and assertiveness", "diplomacy and grace", "creativity and expressiveness", "reliability and practicality", "adventurous spirit and versatility", "nurturing nature and attentiveness", "mystique and intellectual depth", "power and intensity", "idealism and compassion"][expressionNumber - 1]}.`,
    parents: `Your relationship with your parents is reflected in your Life Path Number ${lifePathNumber}. You may ${["seek to establish your independence", "strive for harmony in family relationships", "express yourself creatively within the family", "value tradition and family stability", "seek freedom within family structures", "take on nurturing or mediating roles", "analyze and understand family dynamics", "deal with power dynamics in the family", "have a broad, inclusive view of family"][lifePathNumber - 1]}.`,
    kids: `If you have or plan to have children, your parenting style is likely influenced by your Expression Number ${expressionNumber}. You tend to ${["encourage independence and leadership", "foster cooperation and harmony", "nurture creativity and self-expression", "provide structure and stability", "encourage exploration and adaptability", "be nurturing and supportive", "promote learning and curiosity", "empower and motivate", "instill humanitarian values"][expressionNumber - 1]}.`,
    relationship: `In relationships, your approach is shaped by both your Life Path (${lifePathNumber}) and Expression (${expressionNumber}) numbers. You tend to ${["seek partners who can match your ambition", "value harmony and balance in partnerships", "look for creative and expressive connections", "prioritize stability and loyalty", "need freedom and excitement in relationships", "nurture and support your partners", "seek intellectual stimulation and depth", "desire intense and transformative bonds", "look for partners who share your ideals"][Math.floor((lifePathNumber + expressionNumber) / 2) - 1]}.`,
    lifeGuidance: `Based on your numbers, focus on ${["developing your leadership skills and taking initiative", "cultivating harmonious relationships and finding balance", "expressing your creativity and unique voice", "building solid foundations and working diligently", "embracing change and seeking new experiences", "nurturing others and finding ways to be of service", "deepening your knowledge and understanding", "harnessing your personal power responsibly", "contributing to humanitarian causes"][lifePathNumber - 1]}.`,
    yearForecast: `This year emphasizes themes related to your Expression Number ${expressionNumber}. Focus on ${["taking charge of your life and starting new projects", "building and maintaining important relationships", "expressing yourself creatively and joyfully", "creating stability and security in your life", "embracing change and seeking freedom", "nurturing yourself and others, finding work-life balance", "deepening your understanding of yourself and others", "manifesting abundance and personal power", "connecting with your higher purpose and helping others"][expressionNumber - 1]}.`,
    personalBrand: `Your personal brand is strongly influenced by your Expression Number ${expressionNumber}. Emphasize your ${["leadership and pioneering spirit", "diplomatic and cooperative nature", "creativity and self-expression", "reliability and practical skills", "versatility and progressive thinking", "nurturing and problem-solving abilities", "wisdom and analytical skills", "ambition and transformative power", "idealism and humanitarian values"][expressionNumber - 1]} in your professional and personal presentation.`,
    health: `Your health and well-being are influenced by your Life Path Number ${lifePathNumber}. Pay attention to ${["stress management and physical exercise", "balance and harmony in diet and lifestyle", "creative outlets for emotional well-being", "establishing healthy routines and habits", "variety in diet and exercise, avoiding restlessness", "nurturing self-care practices and helping others", "mental health and stress reduction through analysis", "moderation and transformative health practices", "holistic health approaches and mind-body connection"][lifePathNumber - 1]}.`
  };
};

const DestinyCalculator: React.FC = () => {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');
  const [result, setResult] = useState<DestinyResult | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const calculatedResult = generateResult(name, birthDate, gender);
    setResult(calculatedResult);
  };

  return (
    <section id="destiny-calculator" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Advanced Destiny Calculator</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto mb-8">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="birthDate" className="block text-gray-700 font-bold mb-2">Birth Date</label>
            <input
              type="date"
              id="birthDate"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="gender" className="block text-gray-700 font-bold mb-2">Gender</label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
            Calculate Destiny
          </button>
        </form>
        {result && (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Your Detailed Destiny Reading</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(result).map(([key, value]) => (
                <div key={key} className="mb-4">
                  <h4 className="font-bold text-lg mb-2">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</h4>
                  <p>{value}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DestinyCalculator;