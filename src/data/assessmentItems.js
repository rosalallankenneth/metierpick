const minRate = "Not Applicable";
const maxRate = "Very Applicable";
const itemType = "rating";

const linguisticItems = {
  questions: [
    {
      type: itemType,
      name: "1",
      title: "Books are very important to me.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: "2",
      title:
        "I can hear words in my head before I read, speak, or write them down.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: "3",
      title:
        "I get more out of listening to the radio or a spoken-word recording than I do from television or films.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: "4",
      title: "I enjoy word games like Scrabble, Anagrams, or Password.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: "5",
      title:
        "I enjoy entertaining myself or others with tongue twisters, nonsense rhymes, or puns.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: "6",
      title:
        "Other people sometimes have to stop and ask me to explain the meaning of the words I use in my writing and speaking.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: "7",
      title:
        "English, social studies, and history were easier for me in school than math and science.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: "8",
      title:
        "Learning to speak or read another language (e.g., French, Spanish, German) has been relatively easy for me.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: "9",
      title:
        "My conversation includes frequent references to things that I’ve read or heard.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: "10",
      title:
        "I’ve written something recently that I was particularly proud of or that earned me recognition from others.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    }
  ]
};

module.exports = { linguisticItems };
